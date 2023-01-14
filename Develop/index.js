//  packages needed for this application

const inquirer = require('inquirer');
const fs = require('fs');


//  questions for user input

inquirer
  .prompt([
    {
      type: 'input',
      name: 'Title',
      message: 'What is the title of your project?',
    },
    {
      type: 'input',
      name: 'Description',
      message: 'Add a description of your project.',
    },
    {
      type: 'input',
      name: 'Installation',
      message: 'What are the installation instructions for your project?',
    },
    {
      type: 'input',
      name: 'Usage',
      message: 'Provide instructions and examples for use. Include screenshots as needed.',
    },
    {
      type: 'input',
      name: 'Contributing',
      message: 'Do you have any contribution guidelines?',
    },
    {
      type: 'input',
      name: 'Tests',
      message: 'Add testing instructions for your project.',  
    },
    {
      type: 'list',
      name: 'License',
      message: 'Did you use any of the following licenses on your project?',
      choices: [ "mit",
      "lgpl-3.0",
      "mpl-2.0",
      "agpl-3.0",
      "unlicense",
      "apache-2.0",
      "gpl-3.0",
      "gpl-2.0",
      "epl-1.0",
      "cc0-1.0",
      "bsd-3-clause",
      "bsd-2-clause",
      "wtfpl",
      "artistic-2.0",
      "zlib",],
    },
    {
      type: 'input',
      name: 'Questions',
      message: 'What is your GitHub username?',
    },
    {
      type: 'input',
      name: 'Questions',
      message: 'What is your email address?',
    },
  ])

// function to write README file
function writeToFile(fileName, data) {}

//  function to initialize app
function init() {}

// Function call to initialize app
init();
