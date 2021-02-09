const cmd = require('node-cmd')
const ora = require('ora')
// const logger = require('./logger.service')

const addDeps = (folderName) => {
    return new Promise((resolve, reject) => {
        const throbber1 = ora('Installing dependencies...').start();
        cmd.run(`cd ${folderName} && npm install express body-parser cors morgan --save`, (err, data, stderr) => {
            throbber1.stop()
            if (err) {
                reject(err)
            }
            else if (stderr) {
                reject(stderr)
            }
            else {
                const throbber2 = ora('Installing dev dependencies...').start();
                cmd.run(`cd ${folderName} && npm install nodemon @babel/core @babel/cli @babel/preset-env rimraf npm-run-all --save-dev`, (err, data, stderr) => {
                    throbber2.stop()
                    if (err) {
                        reject(err)
                    }
                    else if (stderr) {
                        resolve(stderr)
                    }
                    else resolve(data)
                })
            }
        })
    })
}

module.exports = addDeps