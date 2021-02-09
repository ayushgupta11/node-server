const chalk = require('chalk')

const initFolder = require('./initFolder.service')
const addDeps = require('./addDeps.service')
const addScripts = require('./addScripts.service')
const boilerplateFunc = require('./boilerplate.service')
const initRepo = require('./initRepo.service')

const defaultFunc = async (name) => {
    try{
        let stage_1_res = await initFolder(name)
        if(stage_1_res){
            console.log('\nInitialized a folder named ' + chalk.green.bold(name) + ' with package.json \n')
            let stage_2_res = await addDeps(name)
            if(stage_2_res){
                console.log(chalk.blue('Initialization completed.\n'))
                let stage_3_res = await addScripts(name)
                if(stage_3_res){
                    let stage_4_res = await boilerplateFunc(name)
                    if(stage_4_res){
                        console.log('Added boilerplate code.\n')
                        let stage_5_res = await initRepo(name)
                        if(stage_5_res){
                            console.log('Initialized an empty git repository.\n')
                            console.log(chalk.bold('Project created successfully.') + ' Run below commands to access project... \n')
                            console.log(chalk.green.bold(`cd ${name}`))
                            console.log(chalk.green.bold('npm run dev\n'))
                            console.log('Happy hacking!!!')
                        }
                    }
                }
            }
        }
    }
    catch(err){
        console.log('error occured')
        console.log(err)
    }
}

module.exports = defaultFunc