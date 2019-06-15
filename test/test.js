'use strict';
const pti = require('puppeteer-to-istanbul');

const url = 'file://' + __dirname + '/index.html';

// Add and remove layer type from map.
// Returns node count before and after removal.
const addRemoveLayer = async (type) => {
  return await page.evaluate((type) => {
    // Get layer based on type
    const layer = data[type];

    // Add to map
    explorer.map.addLayer(layer);
    const before = explorer.outline.find({
      parent: explorer.outline.get(explorer.options.layers.id),
    }).length;

    // Remove from map
    explorer.map.removeLayer(layer);
    const after = explorer.outline.find({
      parent: explorer.outline.get(explorer.options.layers.id),
    }).length;
    return {before, after};
  }, type);
};

// Add and remove overlay type from map.
// Returns node count before and after removal.
const addRemoveOverlay = async () => {
  return await page.evaluate(() => {
    // Add to map
    explorer.map.addOverlay(data.overlay);
    const before = explorer.outline.find({
      parent: explorer.outline.get(explorer.options.overlays.id),
    }).length;

    // Remove from map
    explorer.map.removeOverlay(data.overlay);
    const after = explorer.outline.find({
      parent: explorer.outline.get(explorer.options.overlays.id),
    }).length;
    return {before, after};
  });
};

// Check if element exists.
const isExist = async (selector) => {
  await page.waitFor(1000);
  const elements = await page.$$(selector);
  return elements.length > 0;
};

// Check if element or parent is visible.
// w2ui hides some components by hiding its parent.
const isVisible = async (selector) => {
  await page.waitFor(1000);
  return await page.evaluate((selector) => {
    return $(selector).parent().css('display') !== 'none';
  }, selector);
};

describe('olexp', () => {
  beforeAll(async () => {
    await page.coverage.startJSCoverage();
    await page.goto(url);
  });

  afterAll(async () => {
    const jsCoverage = await page.coverage.stopJSCoverage();
    pti.write(jsCoverage);
  });

  describe('API', () => {
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

  describe('Manager', () => {
    it('there is initially two nodes (Layers and Overlays)', async () => {
      const nodes = await page.evaluate(() => explorer.outline.get());
      expect(nodes.length).toEqual(2);
    });

    it('there is initially an empty Layers node', async () => {
      const node = await page.evaluate(() => {
        const nodes = explorer.outline.get(explorer.options.layers.id);
        return explorer.outline.find({parent: nodes});
      });
      expect(node.length).toEqual(0);
    });

    it('there is initially an empty Overlays node', async () => {
      const node = await page.evaluate(() => {
        const nodes = explorer.outline.get(explorer.options.overlays.id);
        return explorer.outline.find({parent: nodes});
      });
      expect(node.length).toEqual(0);
    });
  });

  describe('Map', () => {
    it('loads layer - group', async () => {
      const {before, after} = await addRemoveLayer('group');
      expect(before).toEqual(1);
      expect(after).toEqual(0);
    });

    it('loads layer - tile', async () => {
      const {before, after} = await addRemoveLayer('tile');
      expect(before).toEqual(1);
      expect(after).toEqual(0);
    });

    it('loads layer - vector', async () => {
      const {before, after} = await addRemoveLayer('vector');
      expect(before).toEqual(1);
      expect(after).toEqual(0);
    });

    it('loads overlay', async () => {
      const {before, after} = await addRemoveOverlay();
      expect(before).toEqual(1);
      expect(after).toEqual(0);
    });
  });

  describe('Toolbar', () => {
    it('show/hide toolbar', async () => {
      const selector = '[name=olexp-explorer-explorer-name-toolbar]';
      await expect(await isVisible(selector)).toEqual(true);
      await expect(page).toClick('.olexp-control-toolbar-hide');
      await expect(await isVisible(selector)).toEqual(false);
      await expect(page).toClick('.olexp-ol-toolbar-show');
      await expect(await isVisible(selector)).toEqual(true);
    });

    it('show/hide outline panel', async () => {
      const selector = '[name=olexp-explorer-explorer-name-navigation]';
      await expect(await isVisible(selector)).toEqual(true);
      await expect(page).toClick('.olexp-control-layer-manager-navigation');
      await expect(await isVisible(selector)).toEqual(false);
      await expect(page).toClick('.olexp-control-layer-manager-navigation');
      await expect(await isVisible(selector)).toEqual(true);
    });

    it('show/hide details panel', async () => {
      const selector = '[name=olexp-explorer-explorer-name-details]';
      await expect(await isVisible(selector)).toEqual(false);
      await expect(page).toClick('.olexp-control-layer-manager-details');
      await expect(await isVisible(selector)).toEqual(true);
      await expect(page).toClick('.olexp-control-layer-manager-details');
      await expect(await isVisible(selector)).toEqual(false);
    });

    it('show/hide add tile layer popup', async () => {
      const selector = '#w2ui-popup';
      await expect(await isExist(selector)).toEqual(false);
      await expect(page).toClick('.olexp-control-layer-control-add-tile');
      await expect(await isExist(selector)).toEqual(true);
      await expect(page).toClick('.w2ui-msg-close');
      await expect(await isExist(selector)).toEqual(false);
    });

    it('show/hide add tile vector popup', async () => {
      const selector = '#w2ui-popup';
      await expect(await isExist(selector)).toEqual(false);
      await expect(page).toClick('.olexp-control-layer-control-add-vector');
      await expect(await isExist(selector)).toEqual(true);
      await expect(page).toClick('.w2ui-msg-close');
      await expect(await isExist(selector)).toEqual(false);
    });

    it('show/hide graticule popup', async () => {
      const selector = '#w2ui-popup';
      await expect(await isExist(selector)).toEqual(false);
      await expect(page).toClick('.olexp-control-graticule');
      await expect(await isExist(selector)).toEqual(true);
      await expect(page).toClick('.w2ui-msg-close');
      await expect(await isExist(selector)).toEqual(false);
    });

    it('show/hide measure area cursor', async () => {
      const selector = '.olexp-measure-hidden';
      await expect(page).toClick('.olexp-control-measure-area');
      await expect(page).toClick('.olexp-control-measure-area');
      await expect(page).toMatchElement(selector);
    });

    it.skip('show/hide measure length cursor', async () => {
      const selector = '.olexp-measure-hidden';
      await expect(page).toClick('.olexp-control-measure-length');
      await expect(page).toClick('.olexp-control-measure-length');
      await expect(page).toMatchElement(selector);
    });

    it('show/hide edit settings popup', async () => {
      const selector = '#w2ui-popup';
      await expect(await isExist(selector)).toEqual(false);
      await expect(page).toClick('.olexp-control-edit-settings');
      await expect(await isExist(selector)).toEqual(true);
      await expect(page).toClick('.w2ui-msg-close');
      await expect(await isExist(selector)).toEqual(false);
    });
  });
});
