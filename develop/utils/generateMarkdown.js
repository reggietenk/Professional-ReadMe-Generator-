const fs = require('fs')


// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
// function renderLicenseBadge(license) {}

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {}


const renderGitHubLink = (userId) => {
    return (userId) + '(https://github.com/'+userId+')'
}

// generate content for readMe
function generateMarkdown(projectData) {
  return `
# ${projectData.title}

## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contribution](#contribution)
  * [License](#license)
      
# Description
    ${projectData.description}
      
## Installation
    ${projectData.installation}
      
## Usage
    ${projectData.usage}

## Test
    ${projectData.test}
        
## Contribution
    ${projectData.contribution}
      
## License
    ${projectData.license}
      

# Questions

  * [GitHub]: ${renderGitHubLink(projectData.github)}
  * [E-mail]: ${projectData.email};
      
  

`;
}

const writeReadMe = (fileContent) => {
  return new Promise((resolve, reject) => {
    fs.writeFile('./dist/readMe.md', fileContent, err => {
      if (err) {
        reject(err);
        return;
      }

      resolve({
        ok: true,
        message: 'ReadMe File created!'
      });
      console.log(resolve)
    });
  });
};    
  


module.exports = {generateMarkdown, writeReadMe}