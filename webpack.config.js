let Encore  = require('@symfony/webpack-encore');
let path    = require('path');

const assets_path   = path.resolve('./');
const output_path   = path.resolve('./build');
    ;
const public_path   = '/build';

const js_path       = path.join(assets_path, '');

Encore
// empty the outputPath dir before each build
//.cleanupOutputBeforeBuild()

// directory where all compiled assets will be stored
    .setOutputPath(output_path)

    // what's the public path to this directory (relative to your project's document root dir)
    .setPublicPath(public_path)

    // will output as build/app.js
    .addEntry('app', path.join(js_path, '/index.js'))


    .enableSourceMaps(Encore.isProduction())

    // create hashed filenames (e.g. app.abc123.css)
    .enableVersioning(false)
    .enableReactPreset()
;

let config = Encore.getWebpackConfig();
config.watchOptions = { poll: true, ignored: /node_modules/ };

// export the final configuration
module.exports = config;