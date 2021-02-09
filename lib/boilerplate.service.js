const fs = require('fs')
const path = require('path')
const unzipper = require('unzipper')
const ora = require('ora')

const boilerplateFunc = (folderName) => {
    return new Promise((resolve, reject) => {
        const throbber1 = ora('Adding boilerplate code...').start();
        const defaultFilePath = path.resolve(__dirname, '../utils/default.zip')
        const destPath = `${process.cwd()}/${folderName}`
        fs.createReadStream(defaultFilePath)
            .pipe(unzipper.Extract({ path: destPath }))
            .on('finish', (err) => {
                throbber1.stop()
                if(err){
                    reject(err)
                }
                else{
                    resolve('Added boilerplate')
                }
            })
    })
}

module.exports = boilerplateFunc