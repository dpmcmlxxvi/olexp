OpenLayers Explorer
============================================================

[![build](https://travis-ci.org/dpmcmlxxvi/olexp.svg?branch=istanbul-phantom)](https://travis-ci.org/dpmcmlxxvi/olexp)
[![coverage](https://img.shields.io/coveralls/dpmcmlxxvi/olexp.svg)](https://coveralls.io/r/dpmcmlxxvi/olexp?branch=istanbul-phantom)
[![codacy](https://img.shields.io/codacy/grade/df098e3d833a44a3af028f712c4ee75e.svg)](https://www.codacy.com/app/dpmcmlxxvi/olexp?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=dpmcmlxxvi/olexp&amp;utm_campaign=Badge_Grade)
[![npm](https://badge.fury.io/js/olexp.svg)](https://badge.fury.io/js/olexp)
[![dependencies](https://img.shields.io/david/dpmcmlxxvi/olexp.svg)](https://david-dm.org/dpmcmlxxvi/olexp)
[![devdependencies](https://img.shields.io/david/dev/dpmcmlxxvi/olexp/istanbul-phantom.svg)](https://david-dm.org/dpmcmlxxvi/olexp/istanbul-phantom#info=devDependencies)
[![Greenkeeper](https://badges.greenkeeper.io/dpmcmlxxvi/olexp.svg)](https://greenkeeper.io/)
[![grunt](https://cdn.gruntjs.com/builtwith.png)](http://gruntjs.com/)

OpenLayers Explorer (olexp) is a Javascript library that combines the mapping
power of [OpenLayers](http://openlayers.org/) and the layout management of
[w2ui](http://w2ui.com). The olexp library can be used to create web
applications to explore spatial data. The library provides an out-of-the-box
solution to display map content along with easy-to-use common interface tools -
a layer manager and a toolbar.

  ![](docs/web/img/olexp-example-screenshot.png)

DOCUMENTATION
------------------------------------------------------------

The following help is available at the olexp
[website](http://dpmcmlxxvi.github.io/olexp):

- [Documentation](http://dpmcmlxxvi.github.io/olexp/docs/web/)
- [Examples](http://dpmcmlxxvi.github.io/olexp/docs/web/demos.html)
- [API](http://dpmcmlxxvi.github.io/olexp/docs/api/)

BUILD
------------------------------------------------------------

The only requirement for building olexp is [node.js](https://nodejs.org). The
following instructions assume that `grunt-cli` has been installed globally:

    npm install -g grunt-cli

To build the library clone it, install it, then grunt it

    git clone https://github.com/dpmcmlxxvi/olexp.git
    npm install
    grunt

TEST
------------------------------------------------------------

To run the unit tests

    grunt test

Then open the coverage report in the `coverage` directory in a browser.

NPM
------------------------------------------------------------

The olexp library source and distribution is also available as a npm package
[here](https://www.npmjs.com/package/olexp). The following installs the olexp
package:

    npm install olexp

LICENSE
------------------------------------------------------------

Copyright (c) 2015 Daniel Pulido <dpmcmlxxvi@gmail.com>

Source code is released under the [MIT License](http://opensource.org/licenses/MIT).
Documentation is released under the [CC BY 4.0](http://creativecommons.org/licenses/by-sa/4.0/).
Icons are from [OSGeo](http://trac.osgeo.org/osgeo/wiki) and released under the
[CC BY 4.0](http://creativecommons.org/licenses/by-sa/4.0/).
