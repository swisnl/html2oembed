# html2oembed

[![Node Version](https://img.shields.io/node/v/html2oembed.svg?style=flat-square)](https://www.npmjs.com/package/html2oembed)
[![Latest Version on NPM](https://img.shields.io/npm/v/html2oembed.svg?style=flat-square)](https://www.npmjs.com/package/html2oembed)
[![Software License](https://img.shields.io/github/license/swisnl/html2oembed.svg?style=flat-square)](LICENSE.md)
[![Buy us a tree](https://img.shields.io/badge/Treeware-%F0%9F%8C%B3-lightgreen.svg?style=flat-square)](https://plant.treeware.earth/swisnl/html2oembed)
[![Made by SWIS](https://img.shields.io/badge/%F0%9F%9A%80-made%20by%20SWIS-%230737A9.svg?style=flat-square)](https://www.swis.nl)

Create [oEmbed](https://oembed.com/) JSON from HTML

## Install

Install with npm:
```bash
$ npm install --save-dev html2oembed
```

## Basic usage

Via code:
```js
const html2oembed = require('html2oembed');

const html = '<html><head><title>My awesome app</title><link href="/css/app.61f9f8cc.css" rel="stylesheet"></head><body><div id="app"></div><script type="text/javascript" src="/js/chunk-vendors.e42a3317.js"></script><script type="text/javascript" src="/js/app.c0e16a2e.js"></script></body></html>';
const parsed = html2oembed.parse(html);
const json = JSON.stringify(parsed);
```

Via CLI:
```bash
# Display help
$ npx html2oembed --help

# Convert HTML to oEmbed JSON
$ npx html2oembed convert ./index.html ./oembed.json
```

### Sample output

```json
{
  "version": "1.0",
  "type": "rich",
  "title": "My awesome app",
  "html": "<link href=\"/css/app.61f9f8cc.css\" rel=\"stylesheet\"><div id=\"app\"></div><script type=\"text/javascript\" src=\"/js/chunk-vendors.e42a3317.js\"></script><script type=\"text/javascript\" src=\"/js/app.c0e16a2e.js\"></script>",
  "width": "100%",
  "height": "100%"
}
```

## Change log

Please see [CHANGELOG](CHANGELOG.md) for more information on what has changed recently.


## Contributing

Please see [CONTRIBUTING](CONTRIBUTING.md) and [CODE_OF_CONDUCT](CODE_OF_CONDUCT.md) for details.


## Security

If you discover any security related issues, please email security@swis.nl instead of using the issue tracker.


## Credits

- [Jasper Zonneveld](https://github.com/JaZo)
- [All Contributors](../../contributors)


## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.

This package is [Treeware](https://treeware.earth). If you use it in production, then we ask that you [**buy the world a tree**](https://plant.treeware.earth/swisnl/html2oembed) to thank us for our work. By contributing to the Treeware forest you’ll be creating employment for local families and restoring wildlife habitats.


## SWIS :heart: Open Source

[SWIS](https://www.swis.nl) is a web agency from Leiden, the Netherlands. We love working with open source software.
