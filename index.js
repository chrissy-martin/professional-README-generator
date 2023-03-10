//  packages needed for this application

const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');


//  questions for user input

const questions = [
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Add a description of your project.',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'What are the installation instructions for your project?',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Provide instructions and examples for use. Include screenshots as needed.',
    },
    {
      type: 'input',
      name: 'contribution',
      message: 'Do you have any contribution guidelines?',
    },
    {
      type: 'input',
      name: 'testing',
      message: 'Add testing instructions for your project.',  
    },
    {
      type: 'list',
      name: 'license',
      message: 'Did you use any of the following licenses on your project?',
      choices: [ 'Apache', 'MIT', 'Mozilla-Public', 'GNU-GPL v3', 'ISC', 'None'],
    },
    {
      type: 'input',
      name: 'username',
      message: 'What is your GitHub username?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email address?',
    },
  ];

  

// function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(`${fileName}.md`, generateMarkdown(data), "utf8", function (error) {
      if (error) {
          console.log(error);
      } else {
          console.log(`Congratulations! Your README has been saved to ${fileName}.md.`);
      }
  });
}

//  function to initialize app
function init() {
  inquirer
      .prompt(questions)
      .then((response) => {
          writeToFile(response.title, response);
      })
      .catch((error) => {
          console.log(error);
      })
}


// Function call to initialize app
init();
