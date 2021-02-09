const cmd = require('node-cmd')

const initFolder = (folderName) => {
    return new Promise((resolve, reject) => {
        cmd.run(`mkdir ${folderName}`, (err, data, stderr) => {
            if (err) {
                reject(err)
            }
            else if (stderr) {
                reject(stderr)
            }
            else {
                cmd.run(`cd ${folderName} && npm init -y`, (err, data, stderr) => {
                    if (err) {
                        reject(err)
                    }
                    else if (stderr) {
                        reject(stderr)
                    }
                    else resolve(data)
                })
            }
        })
    })
}

module.exports = initFolder