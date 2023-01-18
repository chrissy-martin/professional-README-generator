//  packages needed for this application

const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');


//  questions for user input

inquirer
  .prompt([
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
      name: 'contributing',
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
      choices: [ 'Apache', 'MIT', 'Mozilla-Public', 'GNU-General-Public', 'Common-Development-and Distribution', 'None'],
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
  ])

  

// function to write README file
//function writeToFile(fileName, data) {}
.then((data) => {
    const filename = data.title.replace(' ', "").toLowerCase()
    fs.writeFile(`${filename}.md`, generateMarkdown(data), (err) =>
        err ? console.error(err) : console.log('Your Professional README is generated!'))
})

//  function to initialize app
function init() {
  inquirer.prompt(questions)
  .then(function (userInput) {
      console.log(userInput)
      writeToFile("README.md", generateMarkdown(userInput));
  });
};


// Function call to initialize app
init();
