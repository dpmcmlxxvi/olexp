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
  });
});
