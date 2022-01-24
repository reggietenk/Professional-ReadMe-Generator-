// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateReadMe = require('./src/page-setup')
const {writeFile, generateMarkdown} = require('./develop/utils/generateMarkdown')



const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'readMe',
            message: 'Enter project title',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('Please enter project title');
                    return false;
                }    
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter your GitHub Username (Required)',
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log('Please enter your GitHub username!');
                    return false;
                }
        
            }
        },
        {
            type: 'confirm',
            name: 'confirmAbout',
            message: 'Would you like to enter some information about your repository?',
            default: true
        },
        {
            type: 'input',
            name: 'about',
            message: 'Provide some information about repository',
            when: ({ confirmAbout }) => confirmAbout
        }
    

    ]); 
};
const writeToReadMe = fileContent => {
    if (!fileContent.inputs) {
    fileContent.inputs = [];
    }
return inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: 'What is the name of your project? (Required)',
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('You need to enter a project name!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'description',
        message: 'Provide a description of the project (Required)',
        validate: descriptionInput => {
          if (descriptionInput) {
            return true;
          } else {
            console.log('You need to enter a project description!');
            return false;
          }
        }
      },
    ])
    .then(fileData => {
        fileContent.inputs.push(fileData);
        if (fileData.confirmAddProject) {
            return writeToReadMe(fileContent);
        } else {
         return fileContent;
        }
    });
};
  

// TODO: Create an array of questions for user input
// const questions = [];

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}
// const writeToFile = fileContent => {


// }

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

promptUser()
.then(writeToReadMe)
.then(fileContent => {
    return writeToReadMe(fileContent);
})
