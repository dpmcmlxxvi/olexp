'use strict';
const pti = require('puppeteer-to-istanbul');

const url = 'file://' + __dirname + '/index.html';

describe('olexp', () => {

  beforeAll(async () => {
    await Promise.all([
      page.coverage.startJSCoverage(),
      page.coverage.startCSSCoverage(),
    ]);
  });

  afterAll(async () => {
    const [jsCoverage, cssCoverage] = await Promise.all([
      page.coverage.stopJSCoverage(),
      page.coverage.stopCSSCoverage(),
    ]);
    pti.write(jsCoverage);
  });

  describe('API', () => {
    beforeEach(async () => {
      await jestPuppeteer.resetPage()
      await page.goto(url);
    });

    it('creates a valid explorer object', async () => {
      const explorer = await page.evaluate(() => explorer);
      expect(explorer).not.toBeNull();
    });

    it('should find explorer API', async () => {
      const api = await page.evaluate(() => Object.keys(explorer));
      await expect(api).toEqual([
        'details',
        'layout',
        'manager',
        'map',
        'navigation',
        'options',
        'outline',
        'toolbar',
      ]);
    });

    it('should find explorer toolbar items', async () => {
      const count = await page.evaluate(() => {
        return Object.keys(explorer.options.controls).reduce((value, name) => {
          return value + (explorer.options.controls[name] ? 1 : 0);
        }, 0);
      });
      const items = await page.evaluate(() => explorer.toolbar.items.length);
      await expect(count).not.toEqual(items);
    });
  });

  describe('Event', () => {
    beforeEach(async () => {
      await jestPuppeteer.resetPage()
      await page.goto(url);
    });

    it('default has no listeners', async () => {
      const event = await page.evaluate(() => olexp.event.Event());
      expect(Object.keys(event.listeners).length).toEqual(0);
    });

    it('initialized has listener', async () => {
      const event = await page.evaluate(() => {
        const listener = () => {};
        return olexp.event.Event({'test' : [listener]});
      });
      expect(Object.keys(event.listeners).length).toEqual(1);
    });

    it('register listener', async () => {
      const event = await page.evaluate(() => {
        const listener = () => {};
        const event = olexp.event.Event();
        event.register('test');
        event.on('test', listener, this);
        return event;
      });
      expect(Object.keys(event.listeners).length).toEqual(1);
    });

    it('unregister listener', async () => {
      const {event, listeners} = await page.evaluate(() => {
        const listener = () => {};
        const event = olexp.event.Event();
        event.register('test');
        event.on('test', listener, this);
        const listeners = event.unregister('test');
        return {event, listeners};
      });

      expect(listeners.length).toEqual(1);
      expect(Object.keys(event.listeners).length).toEqual(0);
    });

    it('unlisten to listener', async () => {
      const {event, name} = await page.evaluate(() => {
        const listener = () => {};
        const name = 'test';
        const event = olexp.event.Event({'test': [listener]});
        event.off(name, listener);
        return {event, name};
      });
      expect(event.listeners[name].length).toEqual(0);
    });

  });

  describe('Item', () => {
    beforeEach(async () => {
      await jestPuppeteer.resetPage()
      await page.goto(url);
    });

    it('tile layer has only name details property', async () => {
      const details = await page.evaluate(() => {
        const layer = new ol.layer.Tile({source : new ol.source.OSM()});
        const item = new olexp.item.Item('testid', 'test name', layer);
        return item.getDetails();
      });

      expect(details.length).toEqual(1);
    });

    it('item has area measurement property', async () => {
      const details = await page.evaluate(() => {
        const layer = new ol.layer.Tile({source : new ol.source.OSM()});
        layer.set(olexp.measure.properties.area, '0.0');
        const item = new olexp.item.Item('testid', 'test name', layer);
        return item.getDetails();
      });
      const hasArea = details.reduce((hasArea, detail) => {
        return hasArea || ('Area' === detail.property);
      }, false);

      expect(hasArea).toEqual(true);
      expect(details.length).toEqual(2);
    });

    it('item has length measurement property', async () => {
      const details = await page.evaluate(() => {
        const layer = new ol.layer.Tile({source : new ol.source.OSM()});
        layer.set(olexp.measure.properties.length, '0.0');
        const item = new olexp.item.Item('testid', 'test name', layer);
        return item.getDetails();
      });

      const hasLength = details.reduce((hasLength, detail) => {
        return hasLength || ('Length' === detail.property);
      }, false);

      expect(hasLength).toEqual(true);
      expect(details.length).toEqual(2);
    });

    it('item has group layer count property', async () => {
      const details = await page.evaluate(() => {
        const layer = new ol.layer.Group();
        const item = new olexp.item.Item('testid', 'test group', layer);
        return item.getDetails();
      });

      const hasCount = details.reduce((hasCount, detail) => {
        return hasCount || ('Layer Count' === detail.property);
      }, false);

      expect(hasCount).toEqual(true);
    });

    it('item has vector feature count property', async () => {
      const details = await page.evaluate(() => {
        const item = new olexp.item.Item('testid', 'test vector', vector);
        return item.getDetails();
      });

      const hasCount = details.reduce((hasCount, detail) => {
        return hasCount || ('Feature Count' === detail.property);
      }, false);
      expect(hasCount).toEqual(true);
    });

    it('item overlay has its properties', async () => {
      const properties = await page.evaluate(() => {
        const item = new olexp.item.Item('testid', 'test overlay', overlay);
        return item.getProperties();
      });

      const item = await page.evaluate(() => olexp.item);
      const length = Object.keys(properties).length;

      expect(length).toEqual(Object.keys(item.OverlayProperties).length + 1);
    });

    it('item layer has its properties', async () => {
      const properties = await page.evaluate(() => {
        const item = new olexp.item.Item('testid', 'test vector', vector);
        return item.getProperties();
      });

      const item = await page.evaluate(() => olexp.item);
      const length = Object.keys(properties).length;

      expect(length).toEqual(Object.keys(item.LayerProperties).length + 1);
    });

    it('item has a property set', async () => {
      const properties = await page.evaluate(() => {
        const item = new olexp.item.Item('testid', 'test vector', vector);
        item.setProperties({'name': 'foo'});
        return item.getProperties();
      });

      expect(properties.name).toEqual('foo');
    });

    it('zoom to item overlay', async () => {
      const {center, position} = await page.evaluate(() => {
        const item = new olexp.item.Item('testid', 'test overlay', overlay);
        item.zoomTo(explorer.map);
        return {
          center: explorer.map.getView().getCenter(),
          position,
        };
      });

      expect(position.length).toEqual(center.length);
      position.forEach((pos, index) => {
        expect(pos).toEqual(center[index]);
      });
    });

    it('zoom to item layer', async () => {
      const {center, position} = await page.evaluate(() => {
        const item = new olexp.item.Item('testid', 'test vector', vector);
        item.zoomTo(explorer.map);
        return {
          center: explorer.map.getView().getCenter(),
          position,
        };
      });

      expect(position.length).toEqual(center.length);
      position.forEach((pos, index) => {
        expect(pos).toEqual(center[index]);
      });
    });

    it('zoom to item group', async () => {
      const {center, position} = await page.evaluate(() => {
        const group = new ol.layer.Group({layers: [vector, vector]});
        const item = new olexp.item.Item('testid', 'test group', group);
        item.zoomTo(explorer.map);
        return {
          center: explorer.map.getView().getCenter(),
          position,
        };
      });

      expect(position.length).toEqual(center.length);
      position.forEach((pos, index) => {
        expect(pos).toEqual(center[index]);
      });
    });
  });

  describe('Manager', () => {
    beforeEach(async () => {
      await jestPuppeteer.resetPage()
      await page.goto(url);
    });

    it('there is initially two nodes (Layers and Overlays)', async () => {
      const nodes = await page.evaluate(() => explorer.outline.get());
      expect(nodes.length).toEqual(2);
    });

    it('there is initially an empty Layers node', async () => {
      const node = await page.evaluate(() => {
        const nodes = explorer.outline.get(explorer.options.layers.id)
        return explorer.outline.find({parent : nodes});
      });
      expect(node.length).toEqual(0);
    });

    it('there is initially an empty Overlays node', async () => {
      const node = await page.evaluate(() => {
        const nodes = explorer.outline.get(explorer.options.overlays.id);
        return explorer.outline.find({parent : nodes});
      });
      expect(node.length).toEqual(0);
    });

    // it('adds a node when a map layer is added', async () => {
    //   const node = await page.evaluate(() => {
    //     explorer.map.addLayer(tile);
    //     const nodes = explorer.outline.get(explorer.options.layers.id);
    //     return explorer.outline.find({parent : nodes});
    //   });
    //   expect(node.length).toEqual(1);
    // });
  });
});
