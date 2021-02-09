const cmd = require('node-cmd')
const ora = require('ora')

const initRepo = (name) => {
    return new Promise((resolve, reject) => {
        const throbber1 = ora('Initializing git repository...').start();
        cmd.run(`cd ${name} && git init`, (err, data, stderr) => {
            throbber1.stop()
            if(err){
                reject(err)
            }
            if(stderr){
                resolve(stderr)
            }
            else{
                resolve('Initialized empty git repository.')
            }
        })
    })
}

module.exports = initRepo