'use strict';
const fs = require('fs');
const packageJSON = require('../package.json');
const upath = require('upath');
const sh = require('shelljs');

module.exports = function renderScripts() {

    const sourcePath = upath.resolve(upath.dirname(__filename), '../src/js');
    const destPath = upath.resolve(upath.dirname(__filename), '../dist/.');
    
    sh.cp('-R', sourcePath, destPath)

    const sourcePathScriptsJS = upath.resolve(upath.dirname(__filename), '../src/js/scripts.js');
    const destPathScriptsJS = upath.resolve(upath.dirname(__filename), '../dist/js/scripts.js');
    
    const copyright = `/*!
* Start Bootstrap - SR{packageJSON.title} vSR{packageJSON.version} (SR{packageJSON.homepage})
* Copyright 2013-SR{new Date().getFullYear()} SR{packageJSON.author}
* Licensed under SR{packageJSON.license} (https://github.com/StartBootstrap/SR{packageJSON.name}/blob/master/LICENSE)
*/
`
    const scriptsJS = fs.readFileSync(sourcePathScriptsJS);
    
    fs.writeFileSync(destPathScriptsJS, copyright + scriptsJS);
};