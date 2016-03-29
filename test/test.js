
var expect = chai.expect;

/*
 * Define test helper functions 
 */
var olexptest = olexptest || {};

/*
 * Convert object to CSS style string
 */
olexptest.toStyle = function(obj)
{

    var style = JSON.stringify(obj);
    style = style.replace(/[{}]/g, '');
    style = style.replace(/[,]/g, '; ');
    style = style.replace(/[\"]/g, '');
    return style;

};

/*
 * Create test data.
 */
olexptest.create = function(id, options)
{

    var attributes = {bottom: 0, left: 0, right: 0, top: '40px', display: 'none', position: 'fixed'};
    var style = olexptest.toStyle(attributes);
    var target = $('<div/>', {id: id, style: style}).appendTo('body').get(0);

    var explorer = new olexp.Explorer(id, options);
    var data = {explorer: explorer, target: target};

    return data;
};

/*
 * Destroy test data
 */
olexptest.destroy = function(data)
{

    // Clean up explorer resources
    olexp.destroy(data.explorer);

    // Clean up DOM resources
    $('#'+data.target.id).remove();

};

/*
 * Define tests 
 */

describe('Undefined', function()
{

    it('does not create an Explorer if id is undefined', function()
    {
        expect(olexp.Explorer).to['throw']('olexp.Explorer: id not defined');
    });

    it('does not create an Explorer if id is not found', function()
    {
        var create = function(){new olexp.Explorer('bad-id');};
        expect(create).to['throw']('olexp.Explorer: id not found');
    });

});

describe('Explorer', function()
{
    var data = null;

    beforeEach(function()
    {
        data = olexptest.create('explorer');
    });

    afterEach(function()
    {
        olexptest.destroy(data);
    });

    it('creates a valid Explorer object', function()
    {
        expect(data.explorer).to.not.be['null'];
    });

    it('creates valid Explorer items', function()
    {
        for (name in data.explorer)
        {
            expect(data.explorer[name]).to.not.be['null'];
        }
    });

    it('creates the expected toolbar items', function()
    {
        var count = 0;
        for (name in data.explorer.options.controls)
        {
            if (data.explorer.options.controls[name]) count++;
        }
        expect(data.explorer.toolbar.items.length).to.not.equal(count);
    });
});

describe('Event', function()
{

    it('default has no listeners', function()
    {
        var event = olexp.event.Event();
        expect(Object.keys(event.listeners).length).to.equal(0);
    });
    
    it('initialized has listener', function()
    {
        var listener = function(){};
        var event = olexp.event.Event({'test' : [listener]});
        expect(Object.keys(event.listeners).length).to.equal(1);
    });

    it('register listener', function()
    {
        var listener = function(){};
        var event = olexp.event.Event();
        event.register('test');
        event.on('test', listener, this);
        expect(Object.keys(event.listeners).length).to.equal(1);
    });

    it('unregister listener', function()
    {
        var listener = function(){};
        var event = olexp.event.Event();
        event.register('test');
        event.on('test', listener, this);
        var listeners = event.unregister('test');
        expect(listeners.length).to.equal(1);
        expect(Object.keys(event.listeners).length).to.equal(0);
    });

    it('unlisten to listener', function()
    {
        var listener = function(){};
        var event = olexp.event.Event({'test': [listener]});
        event.off('test', listener);
        expect(event.listeners['test'].length).to.equal(0);
    });

});

describe('Item', function()
{

    var data = null;
    var div = null;
    var position = null;
    var overlay = null;
    var vector = null;

    beforeEach(function()
    {
        data = olexptest.create('explorer');

        div = $('<div>', {'id': 'itemoverlayid'});
        $('body').append(div);

        // Define some common ol3 test data
        var coordinate = [-77.016389, 38.904722];
        position = ol.proj.transform(coordinate, 'EPSG:4326', 'EPSG:3857');
        var geometry = {'type': 'Point', 'coordinates': position};
        var geojson = {'type': 'Feature', 'geometry': geometry};
        var features = (new ol.format.GeoJSON()).readFeatures(geojson);
        var source = new ol.source.Vector({features: features});
        var element = document.getElementById('itemoverlayid');

        vector = new ol.layer.Vector({source: source});
        overlay = new ol.Overlay({position: position, element: element, stopEvent: false});

    });

    afterEach(function()
    {
        olexptest.destroy(data);
        div.remove();
    });

    it('tile layer has only name details property', function()
    {
        var layer = new ol.layer.Tile({source : new ol.source.OSM()});
        var item = new olexp.item.Item('testid', 'test name', layer);
        var details = item.getDetails();
        expect(details.length).to.equal(1);
    });

    it('item has area measurement property', function()
    {
        var layer = new ol.layer.Tile({source : new ol.source.OSM()});
        layer.set(olexp.measure.properties.area, '0.0');
        var item = new olexp.item.Item('testid', 'test name', layer);
        var details = item.getDetails();
        var hasArea = false;
        for (var i = 0; i < details.length; i++)
        {
            hasArea = hasArea || ('Area' === details[i].property);
        }
        expect(hasArea).to.be.ok;
        expect(details.length).to.equal(2);
    });

    it('item has length measurement property', function()
    {
        var layer = new ol.layer.Tile({source : new ol.source.OSM()});
        layer.set(olexp.measure.properties.length, '0.0');
        var item = new olexp.item.Item('testid', 'test name', layer);
        var details = item.getDetails();
        var hasLength = false;
        for (var i = 0; i < details.length; i++)
        {
            hasLength = hasLength || ('Length' === details[i].property);
        }
        expect(hasLength).to.be.ok;
        expect(details.length).to.equal(2);
    });

    it('item has group layer count property', function()
    {
        var layer = new ol.layer.Group();
        var item = new olexp.item.Item('testid', 'test group', layer);
        var details = item.getDetails();
        var length = -1;
        for (var i = 0; i < details.length; i++)
        {
            if ('Layer Count' === details[i].property)
            {
                length = 0;
            }
        }
        expect(length).to.equal(0);
    });

    it('item has vector feature count property', function()
    {

        var item = new olexp.item.Item('testid', 'test vector', vector);
        var details = item.getDetails();
        var length = -1;
        for (var i = 0; i < details.length; i++)
        {
            if ('Feature Count' === details[i].property)
            {
                length = 1;
            }
        }
        expect(length).to.equal(1);
    });

    it('item overlay has its properties', function()
    {

        var item = new olexp.item.Item('testid', 'test overlay', overlay);
        var properties = item.getProperties();
        expect(Object.keys(properties).length).to.equal(Object.keys(olexp.item.OverlayProperties).length+1);

    });

    it('item layer has its properties', function()
    {
           
        var item = new olexp.item.Item('testid', 'test vector', vector);
        var properties = item.getProperties();
        expect(Object.keys(properties).length).to.equal(Object.keys(olexp.item.LayerProperties).length+1);

    });

    it('item has a property set', function()
    {

        var item = new olexp.item.Item('testid', 'test vector', vector);
        item.setProperties({'name': 'foo'});
        var properties = item.getProperties();
        expect(properties.name).to.equal('foo');

    });

    it('zoom to item overlay', function()
    {

        var item = new olexp.item.Item('testid', 'test overlay', overlay);
        item.zoomTo(data.explorer.map);
        var center = data.explorer.map.getView().getCenter();
        expect(position.length).to.equal(center.length);
        for (var i = 0; i < position.length; i++)
        {
            expect(position[i]).to.equal(center[i]);
        }

    });

    it('zoom to item layer', function()
    {

        var item = new olexp.item.Item('testid', 'test vector', vector);
        item.zoomTo(data.explorer.map);
        var center = data.explorer.map.getView().getCenter();
        expect(position.length).to.equal(center.length);
        for (var i = 0; i < position.length; i++)
        {
            expect(position[i]).to.equal(center[i]);
        }

    });

    it('zoom to item group', function()
    {

        var group = new ol.layer.Group({layers: [vector, vector]});
        var item = new olexp.item.Item('testid', 'test group', group);
        item.zoomTo(data.explorer.map);
        var center = data.explorer.map.getView().getCenter();
        expect(position.length).to.equal(center.length);
        for (var i = 0; i < position.length; i++)
        {
            expect(position[i]).to.equal(center[i]);
        }

    });

});

describe('Manager', function()
{
    var data = null;
    var div = null;
    var group = null;
    var tile = null;
    var vector = null;
    var overlay = null;

    beforeEach(function()
    {

        data = olexptest.create('explorer');

        div = $('<div>', {'id': 'overlayid'});
        $('body').append(div);

        // Define some common ol3 test data
        var coordinate = [-77.016389, 38.904722];
        var position = ol.proj.transform(coordinate, 'EPSG:4326', 'EPSG:3857');
        var geometry = {'type': 'Point', 'coordinates': position};
        var geojson = {'type': 'Feature', 'geometry' : geometry};
        var features = (new ol.format.GeoJSON()).readFeatures(geojson);
        var source = new ol.source.Vector({features: features});
        var element = document.getElementById('overlayid');

        vector = new ol.layer.Vector({source: source});
        overlay = new ol.Overlay({position: position, element: element, stopEvent: false});
        group = new ol.layer.Group({layers: [vector]});
        tile = new ol.layer.Tile({source : new ol.source.OSM()});

    });

    afterEach(function()
    {
        olexptest.destroy(data);
        div.remove();
    });

    it('there is initially two nodes (Layers and Overlays)', function()
    {
        expect(data.explorer.outline.get().length).to.equal(2);
    });

    it('there is initially an empty Layers node', function()
    {
        var layerNodes = data.explorer.outline.get(data.explorer.options.layers.id);
        expect(data.explorer.outline.find({parent : layerNodes}).length).to.equal(0);
    });

    it('there is initially an empty Overlays node', function()
    {
        var overlayNodes = data.explorer.outline.get(data.explorer.options.overlays.id);
        expect(data.explorer.outline.find({parent : overlayNodes}).length).to.equal(0);
    });

    it('adds a node when a map layer is added', function()
    {
        data.explorer.map.addLayer(tile);
        var layerNodes = data.explorer.outline.get(data.explorer.options.layers.id);
        expect(data.explorer.outline.find({parent : layerNodes}).length).to.equal(1);
    });

    it('adds item details when node is clicked', function()
    {
        data.explorer.map.addLayer(tile);
        var layerNodes = data.explorer.outline.get(data.explorer.options.layers.id);
        var node = data.explorer.outline.find({parent : layerNodes})[0];
        data.explorer.outline.onClick({target : node.id});
        expect(data.explorer.details.records.length).to.equal(1);
    });

    it('hides item when node is double clicked', function()
    {
        data.explorer.map.addLayer(tile);
        var layerNodes = data.explorer.outline.get(data.explorer.options.layers.id);
        var node = data.explorer.outline.find({parent : layerNodes})[0];
        data.explorer.outline.onDblClick({target : node.id});
        var layer = data.explorer.map.getLayers().getArray()[0];
        expect(layer.getVisible()).to.not.be.ok;
        expect(node.disabled).to.be.ok;
    });

    it('removes a node when a map layer is removed', function()
    {
        data.explorer.map.addLayer(tile);
        data.explorer.map.removeLayer(tile);
        var layerNodes = data.explorer.outline.get(data.explorer.options.layers.id);
        expect(data.explorer.outline.find({parent : layerNodes}).length).to.equal(0);
    });

    it('adds a node when a map overlay is added', function()
    {
        data.explorer.map.addOverlay(overlay);
        var overlayNodes = data.explorer.outline.get(data.explorer.options.overlays.id);
        expect(data.explorer.outline.find({parent : overlayNodes}).length).to.equal(1);
    });
     
    it('adds item details when node is clicked', function()
    {
        data.explorer.map.addOverlay(overlay);
        var overlayNodes = data.explorer.outline.get(data.explorer.options.overlays.id);
        var node = data.explorer.outline.find({parent : overlayNodes})[0];
        data.explorer.outline.onClick({target : node.id});
        expect(data.explorer.details.records.length).to.equal(1);
    });
     
    it('hides item when node is double clicked', function()
    {
        data.explorer.map.addOverlay(overlay);
        var overlayNodes = data.explorer.outline.get(data.explorer.options.overlays.id);
        var node = data.explorer.outline.find({parent : overlayNodes})[0];
        data.explorer.outline.onDblClick({target : node.id});
        expect($('#overlay1').is(':visible')).to.not.be.ok;
        expect(node.disabled).to.be.ok;
    });
     
    it('removes a node when a map overlay is removed', function()
    {
        data.explorer.map.addOverlay(overlay);
        data.explorer.map.removeOverlay(overlay);
        var overlayNodes = data.explorer.outline.get(data.explorer.options.overlays.id);
        expect(data.explorer.outline.find({parent : overlayNodes}).length).to.equal(0);
    });

    it('adds a node when a map layer group is added', function()
    {
        data.explorer.map.addLayer(group);
        var layerNodes = data.explorer.outline.get(data.explorer.options.layers.id);
        var groupNode = data.explorer.outline.find({parent : layerNodes});
        expect(groupNode.length).to.equal(1);
        expect(groupNode[0].nodes.length).to.equal(1);
    });

    it('adds a node when the map layerGroup is changed', function()
    {
        data.explorer.map.setLayerGroup(group);
        var layerNodes = data.explorer.outline.get(data.explorer.options.layers.id);
        var groupNode = data.explorer.outline.find({parent : layerNodes});
        expect(groupNode.length).to.equal(1);
        expect(groupNode[0].nodes.length).to.equal(0);
    });

});

describe('NodeManager', function()
{
    var data = null;
    var div1 = null;
    var div2 = null;

    beforeEach(function()
    {
        data = olexptest.create('explorer');
        div1 = $('<div>', {'id': 'overlayone'});
        div2 = $('<div>', {'id': 'overlaytwo'});
        $('body').append(div1);
        $('body').append(div2);
    });

    afterEach(function()
    {
        olexptest.destroy(data);
        div1.remove();
        div2.remove();
    });

    it('moves an item down when its layer is moved down', function()
    {
        // Add two layers
        var layerOneBefore = new ol.layer.Tile({source : new ol.source.OSM()});
        var layerTwoBefore = new ol.layer.Tile({source : new ol.source.Stamen({layer: 'watercolor'})});
        data.explorer.map.addLayer(layerOneBefore);
        data.explorer.map.addLayer(layerTwoBefore);
 
        // Get layer item nodes
        var layersNode = data.explorer.outline.get(data.explorer.options.layers.id);
        var nodes = data.explorer.outline.find({parent : layersNode});
        var idTwoBefore = nodes[0].id;
        var idOneBefore = nodes[1].id;
 
        // Move layer
        var layers = data.explorer.map.getLayers();
        layers.remove(layerTwoBefore);
        layers.insertAt(0, layerTwoBefore);
 
        // Get layer items
        var nodes = data.explorer.outline.find({parent : layersNode});
        var idOneAfter = nodes[0].id;
        var idTwoAfter = nodes[1].id;
        var layers = data.explorer.map.getLayers();
        var layerTwoAfter = layers.getArray()[0];
        var layerOneAfter = layers.getArray()[1];
 
        // Check layers and items have been moved
        expect(idOneBefore).to.equal(idTwoAfter);
        expect(idTwoBefore).to.not.equal(idOneAfter);
        expect(layerOneBefore).to.equal(layerOneAfter);
        expect(layerTwoBefore).to.equal(layerTwoAfter);

    });
 
    it('moves an item up when its layer is moved up', function()
    {
        // Add two layers
        var layerOneBefore = new ol.layer.Tile({source : new ol.source.OSM()});
        var layerTwoBefore = new ol.layer.Tile({source : new ol.source.Stamen({layer: 'watercolor'})});
        data.explorer.map.addLayer(layerOneBefore);
        data.explorer.map.addLayer(layerTwoBefore);
 
        // Get layer item nodes
        var layersNode = data.explorer.outline.get(data.explorer.options.layers.id);
        var nodes = data.explorer.outline.find({parent : layersNode});
        var idTwoBefore = nodes[0].id;
        var idOneBefore = nodes[1].id;
 
        // Move layer
        var layers = data.explorer.map.getLayers();
        layers.remove(layerOneBefore);
        layers.insertAt(1, layerOneBefore);
 
        // Get layer items
        var nodes = data.explorer.outline.find({parent : layersNode});
        var idOneAfter = nodes[0].id;
        var idTwoAfter = nodes[1].id;
        var layers = data.explorer.map.getLayers();
        var layerTwoAfter = layers.getArray()[0];
        var layerOneAfter = layers.getArray()[1];
 
        // Check layers and items have been moved
        expect(idOneBefore).to.not.equal(idOneAfter);
        expect(idTwoBefore).to.equal(idTwoAfter);
        expect(layerOneBefore).to.equal(layerOneAfter);
        expect(layerTwoBefore).to.equal(layerTwoAfter);

    });
     
    it('moves an item down when its overlay is moved down', function()
    {
        // Define overlays
        var pos1 = ol.proj.transform([-77.016389, 38.904722], 'EPSG:4326', 'EPSG:3857');
        var pos2 = ol.proj.transform([-77.016489, 38.904822], 'EPSG:4326', 'EPSG:3857');

        // Add two overlays
        var overlayOneBefore = new ol.Overlay({position: pos1, element: document.getElementById('overlayone'), stopEvent: false});
        var overlayTwoBefore = new ol.Overlay({position: pos2, element: document.getElementById('overlaytwo'), stopEvent: false});
        data.explorer.map.addOverlay(overlayOneBefore);
        data.explorer.map.addOverlay(overlayTwoBefore);
  
        // Get layer item nodes
        var overlayNode = data.explorer.outline.get(data.explorer.options.overlays.id);
        var nodes = data.explorer.outline.find({parent : overlayNode});
        var idTwoBefore = nodes[0].id;
        var idOneBefore = nodes[1].id;
  
        // Move overlay
        var overlays = data.explorer.map.getOverlays();
        overlays.remove(overlayTwoBefore);
        overlays.insertAt(0, overlayTwoBefore);
  
        // Get overlay items
        var nodes = data.explorer.outline.find({parent : overlayNode});
        var idOneAfter = nodes[0].id;
        var idTwoAfter = nodes[1].id;
        var overlays = data.explorer.map.getOverlays();
        var overlayTwoAfter = overlays.getArray()[0];
        var overlayOneAfter = overlays.getArray()[1];
  
        // Check overlays and items have been moved
        expect(idOneBefore).to.equal(idTwoAfter);
        expect(idTwoBefore).to.not.equal(idOneAfter);
        expect(overlayOneBefore).to.equal(overlayOneAfter);
        expect(overlayTwoBefore).to.equal(overlayTwoAfter);
  
    });
  
    it('moves an item up when its layer is moved up', function()
    {
        // Define overlays
        var pos1 = ol.proj.transform([-77.016389, 38.904722], 'EPSG:4326', 'EPSG:3857');
        var pos2 = ol.proj.transform([-77.016489, 38.904822], 'EPSG:4326', 'EPSG:3857');

        // Add two overlays
        var overlayOneBefore = new ol.Overlay({position: pos1, element: document.getElementById('overlayone'), stopEvent: false});
        var overlayTwoBefore = new ol.Overlay({position: pos2, element: document.getElementById('overlaytwo'), stopEvent: false});
        data.explorer.map.addOverlay(overlayOneBefore);
        data.explorer.map.addOverlay(overlayTwoBefore);

        // Get overlay item nodes
        var overlayNode = data.explorer.outline.get(data.explorer.options.overlays.id);
        var nodes = data.explorer.outline.find({parent : overlayNode});
        var idTwoBefore = nodes[0].id;
        var idOneBefore = nodes[1].id;

        // Move overlay
        var overlays = data.explorer.map.getOverlays();
        overlays.remove(overlayOneBefore);
        overlays.insertAt(1, overlayOneBefore);

        // Get overlay items
        var nodes = data.explorer.outline.find({parent : overlayNode});
        var idOneAfter = nodes[0].id;
        var idTwoAfter = nodes[1].id;
        var overlays = data.explorer.map.getOverlays();
        var overlayTwoAfter = overlays.getArray()[0];
        var overlayOneAfter = overlays.getArray()[1];

        // Check overlays and items have been moved
        expect(idOneBefore).to.not.equal(idOneAfter);
        expect(idTwoBefore).to.equal(idTwoAfter);
        expect(overlayOneBefore).to.equal(overlayOneAfter);
        expect(overlayTwoBefore).to.equal(overlayTwoAfter);

     });
      
 });

describe('Util', function()
{
    var data = null;

    beforeEach(function()
    {
        data = olexptest.create('explorer');
    });

    afterEach(function()
    {
        olexptest.destroy(data);
    });

    it('adds a new point layer to map', function()
    {
        var util = olexp.util.Util();
        var features = [new ol.Feature(new ol.geom.Point(ol.proj.transform([-77.016389, 38.904722], 'EPSG:4326', 'EPSG:3857'),'XY')),
                        new ol.Feature(new ol.geom.Point(ol.proj.transform([-77.017389, 38.904722], 'EPSG:4326', 'EPSG:3857'),'XY')),
                        new ol.Feature(new ol.geom.Point(ol.proj.transform([-77.017389, 38.914722], 'EPSG:4326', 'EPSG:3857'),'XY'))];
        var layerNodes = data.explorer.outline.get(data.explorer.options.layers.id);
        
        expect(data.explorer.outline.find({parent : layerNodes}).length).to.equal(0);
        util.addLayerVector(data.explorer.map, 'Test Point Layer', features, true);
        expect(data.explorer.outline.find({parent : layerNodes}).length).to.equal(1);

    });

    it('adds a new circle layer to map', function()
    {
        var util = olexp.util.Util();
        var features = [new ol.Feature(new ol.geom.Circle(ol.proj.transform([-77.016389, 38.904722], 'EPSG:4326', 'EPSG:3857'), 10, 'XY')),
                        new ol.Feature(new ol.geom.Circle(ol.proj.transform([-77.017389, 38.904722], 'EPSG:4326', 'EPSG:3857'), 10, 'XY')),
                        new ol.Feature(new ol.geom.Circle(ol.proj.transform([-77.017389, 38.914722], 'EPSG:4326', 'EPSG:3857'), 10, 'XY'))];
        var layerNodes = data.explorer.outline.get(data.explorer.options.layers.id);
        
        expect(data.explorer.outline.find({parent : layerNodes}).length).to.equal(0);
        util.addLayerVector(data.explorer.map, 'Test Circle Layer', features, true);
        expect(data.explorer.outline.find({parent : layerNodes}).length).to.equal(1);

    });

    it('gets tile types properties', function()
    {
        var util = olexp.util.Util();
        var types = util.getTileTypes();
        for (var name in types)
        {
            expect(types[name].class.prototype instanceof ol.source.TileImage).to.be.ok;
            expect(typeof types[name].name === 'string').to.be.ok;
            expect(typeof types[name].settings === 'object').to.be.ok;
        }
    });

});
