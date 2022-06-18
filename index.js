// TODO: Include packages needed for this application
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [];
const userQuestions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'projectTitle',
            message: 'What is the title of your project? (Required)',
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
            type: 'confirm',
            name: 'confirmDescription',
            message: 'Would you like to enter a description for your project?',
            default: true
        },

        {
            type: 'input',
            name: 'description',
            message: 'Please provide some information about your project:',
            when: ({ confirmDescription }) => {
                if (confirmDescription) {
                    return true;
                } else {
                    return false;
                }
            }

        },

        {
            type: 'input',
            name: 'desciptionQuestionOne',
            message: 'What was your motivation?'
        },

        
        {
            type: 'input',
            name: 'desciptionQuestionTwo',
            message: 'Why did you build this project? '
        },

        
        {
            type: 'input',
            name: 'desciptionQuestionThree',
            message: 'What problem did it solve?'
        },

        
        {
            type: 'input',
            name: 'desciptionQuestionFour',
            message: 'What did you learn?'
        },
    ])
}
userQuestions()

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
