// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
    validate: titleInput => {
      if (titleInput) {
        return true;
      } else {
        console.log('Please enter a title!');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'description',
    message: 'Please write a description of your project:',
    validate: titleInput => {
      if (titleInput) {
        return true;
      } else {
        console.log('Please enter the description of your project!')
      }
    }
  },
  {
    type: 'confirm',
    name: 'confirmInstall',
    message: 'Do you want to provide installation instructions?'
  },
  {
      type: 'input',
      name: 'usage',
      message: 'Please provide usage info (written instruction, how-to-video link, screenshoot link):'
  },
  {
      type: 'input',
      name: 'contributors',
      message: 'Who are the contributors for this project? (Please use commas to list them)'
  },
  {
      type: 'list',
      name: 'license',
      message: 'What are the required license(s) for this project:',
      choices: ['MIT', 'Apache-2.0', 'GPL-3.0', 'BSD-3-Clause', 'NONE']
  },
  {
      type: 'input',
      name: 'contributing',
      message: 'Please indicate your contributing guidelines:',
  },
  {
      type: 'input',
      name: 'test',
      message: 'Command to run or test your application:',
  },
  {
      type: 'input',
      name: 'github',
      message: 'Please provide your Github username:',
      validate: gitInput => {
          if (gitInput) { return true; } else {
              console.log('Please enter your Github username!');
              return false;
          }
      }
  },
  {
      type: 'input',
      name: 'email',
      message: 'Please enter your email address as your primary contact:'
  },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
