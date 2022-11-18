'use strict';

const fs = require('fs');
const parse = require('./parse');

class WebpackOembedPlugin {
    apply(compiler) {
        compiler.hooks.afterEmit.tap('WebpackOembedPlugin', (compilation) => {
            Object.entries(compilation.assets).forEach(([key, value]) => {
                if (!value.emitted || !key.endsWith('.html')) {
                    return;
                }

                fs.writeFileSync(
                    value.existsAt.replace(/\.html$/, '.json'),
                    JSON.stringify(parse(value.source()))
                );
            });
        });
    }
}

module.exports = WebpackOembedPlugin;
