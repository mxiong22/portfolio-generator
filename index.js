// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require ('fs')
const generateMarkdown = require('./util/generateMarkdown')
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your application?',
        name: 'title',

    }
    ,
    {
        type: 'input',
        message: 'What is the description of your application?',
        name: 'description',

    }
    ,
    {
        type: 'input',
        message: 'what is the process of your application\'s installation',
        name: 'installation',
    }
    ,
    {
        type: 'input',
        message: 'What is the process of your application\'s usage?',
        name: 'usage',
    }
    ,
    {
        type: 'input',
        message: 'What are the contributions to your application?',
        name: 'contributions',
    }
    ,
    {
        type: 'list',
        message: 'choose a license',
        name: 'license',
        choices: ['Apache 2.0', 'GNU', 'MIT', 'BSD 2-Clause', 'BSD 3-Clause', 'Boost Software', 'Creative Commons Zero', 'Eclipse', 'GNU Affero', 'GNU General', 'GNU Lesser']
    }
    , 
    {
        type: 'input',
        message: 'Does your application have any special features?',
        name: 'feature',
    }
    , 
    {
        type: 'input',
        message: 'How do you test your application?',
        name: 'test',
    }
    , 
    {
        type: 'input',
        message: 'What is the name of your repo?',
        name: 'repo',
    }
    , 
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'name',
    }
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data)

 }

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(function (answers) {
            //  console.log(answers)
            // console.log(answers.title)
            console.log(generateMarkdown(answers))
            writeToFile ('generatorReadMe.md', generateMarkdown(answers))
        })
}

// Function call to initialize app
init();
