// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const { writeFile } = require('./utils/generateMarkdown.js');
const generatePage = require('./src/page-template.js');

// TODO: Create an array of questions for user input
const questions = [];
const userQuestions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?',
            validate: projectTitleInput => {
                if (projectTitleInput) {
                    return true;
                } else {
                    console.log('Please enter a title for your project!')
                    return false;
                }
            }
            
        },

        {
            type: 'input',
            name: 'description',
            message: 'Please provide some information about your project:',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log('You need to provide some information about your project!')
                    return false;
                }
            }
        },

        {
            type: 'input',
            name: 'installation',
            message: 'Please provide a step-by-step description of how to install your project:'
        },

        {
            type: 'input',
            name: 'usage',
            message: 'Please provide directions and examples for use:'
        },

        {
            type: 'input',
            name: 'credits',
            message: 'Please list the people who contributed to this project:'
        },

        {
            type: 'input',
            name: 'tests',
            message: 'Please write any tests for your project, if any:'
        },

        {
            type: 'checkbox',
            name: 'license',
            message: 'Please select a license from the list:',
            choices: ['Apache 2.0 License', 'Boost Software License 1.0', 'Eclipse Public License 1.0', 'The Hippocratic License 2.1', 'The Hippocratic License 3.0', 'IBM Public License Version 1.0', 'ISC License (ISC)', 'MIT License', 'The Unlicense']
        },

        {
            type: 'input',
            name: 'github',
            message: 'What is your github username?'
        },

        {
            type: 'input',
            name: 'email',
            message: 'What is your email?'
        }


    ]);
};
userQuestions()
    .then(generatePage)
    .then(pageReadMe => {
        return writeFile(pageReadMe);
    })
    .then(writeFileResponse => {
        console.log(writeFileResponse);
    })
    .catch(err => {
        console.log(err);
    });

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
