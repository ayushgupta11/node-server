const fs = require('fs')

const actualScripts = {
    "start": "npm run prod",
    "build": "npm-run-all clean transpile",
    "server": "node ./dist",
    "dev": "npm-run-all build server",
    "prod": "npm-run-all build server",
    "transpile": "babel ./src --out-dir dist",
    "clean": "rimraf dist",
    "watch:dev": "nodemon",
    "test": "jest"
}

const babelConfig = {
    "presets": ["@babel/preset-env"]
}

const nodemonConfig = {
    "exec": "npm run dev",
    "watch": ["src/*"],
    "ignore": ["**/__tests__/**", "*.test.js", "*.spec.js"]
}

const addScripts = (folderName) => {
    return new Promise((resolve, reject) => {
        try {
            let path = `${process.cwd()}/${folderName}/package.json`
            let content = JSON.parse(fs.readFileSync(path, 'utf8'))
            content['scripts'] = actualScripts
            content['babel'] = babelConfig
            content['nodemonConfig'] = nodemonConfig
            fs.writeFileSync(path, JSON.stringify(content, null, 4))
            resolve(content)
        }
        catch (err) {
            reject(err)
        }
    })
}

module.exports = addScripts