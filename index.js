const inquirer = require('inquirer');
const generateMarkDown = require('./utils/generateMarkdown');
const fs = require('fs');



// array of questions for user
const questions = [
    {
        type: 'input',
        message:  'What is the name of your project?',
        name:  'title',
    },
    {
        type: 'input',
        message:  'Give a brief description of your project.',
        name:  'description',
    },
    {
        type: 'input',
        message:  'Describe how you would install your project.',
        name:  'installation',
    },
    {
        type: 'input',
        message:  'How would this project be used?',
        name:  'usage',
    },
    {
        type: 'input',
        message:  'Are there any other contributors to this project? Please list them if there are more than one.',
        name:  'contributors',
    },
    {
        type: 'input',
        message:  'Do you have test command instructions?',
        name:  'tests',
    },
    {
        type: 'input',
        message:  'What is your email address?',
        name:  'email',
    },
    {
        type: 'input',
        message:  'What is your Github username?',
        name:  'github',
    },
    {
        type: 'input',
        message:  'What license did you use for your project?',
        name: 'license',
    }
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        err ? console.error(err): console.log('success!');
    }) 

}

// function to initialize program
function init() {
    inquirer 
    .prompt(questions)
    .then((data) => {
    writeToFile('ReadME.md', generateMarkDown(data))
    })
}

// function call to initialize program
init();
