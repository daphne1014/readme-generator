// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
// const questions = [];
const questions = () => {
    return inquirer
      .prompt([
        {
          type: 'input',
          name: 'title',
          message: 'What is your project title?',
          validate: nameInput => {
            if (nameInput) {
              return true;
            } else {
              console.log('Please enter your project title!');
              return false;
            }
          }
        },
        {
          type: 'input',
          name: 'description',
          message: 'Provide some description of your project',
          validate: nameInput => {
            if (nameInput) {
              return true;
            } else {
              console.log('Please provide some description!');
              return false;
            }
          }
        },
        {
          type: 'input',
          name: 'installation',
          message: 'What are the steps required to install your project?',
          validate: nameInput => {
            if (nameInput) {
                return true;
              } else {
                console.log('Please provide installation description!');
                return false;
              }
        }
      },
      {
        type: 'input',
        name: 'usage',
        message: 'What are usage information when using this app?',
        validate: nameInput => {
            if (nameInput) {
              return true;
            } else {
              console.log('Please provide instructions and examples for use!');
              return false;
            }
      }
    },
    {
        type: 'input',
        name: 'credits',
        message: 'Who were the contributers to this project?',
        validate: nameInput => {
            if (nameInput) {
              return true;
            } else {
              console.log('Please provide contributer infomation!');
              return false;
            }
      }
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Go the extra mile and write tests for your application.',
        validate: nameInput => {
            if (nameInput) {
              return true;
            } else {
              console.log('Please provide contributer infomation!');
              return false;
            }
      }
    }
      ])
  };
  
  questions();


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
