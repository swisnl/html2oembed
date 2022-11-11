'use strict';

const HTMLParser = require('node-html-parser');

function parse(html) {
    const document = HTMLParser.parse(html);

    const data = {
        version: '1.0',
        type: 'rich',
    };

    const title = document.querySelector('head title');
    if (title) {
        data.title = title.innerText.trim();
    }

    data.html = '';
    for (const stylesheet of document.querySelectorAll('head link[rel="stylesheet"]')) {
        data.html += stylesheet.outerHTML;
    }
    const body = document.querySelector('body');
    if (body) {
        data.html += body.innerHTML;
    }

    data.width = '100%';
    data.height = '100%';

    return data;
}

module.exports = parse
