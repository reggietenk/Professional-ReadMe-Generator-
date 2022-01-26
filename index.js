// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const { template } = require('lodash');


 inquirer.prompt([
        {
            type: 'input',
            name: 'title',
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
        {
            type: 'input',
            name: 'installation',
            message:'What are the steps required to install your project? ',
            validate: installInput => {
                if (installInput) {
                return true;
                } else {
                console.log('Provide installation instructions');
                return false;
                }
            }
        },
        {
            type:'input',
            name:'usage',
            message:'How is your app used?',
                validate: usageInput => {
                    if (usageInput) {
                    return true;
                    } else {
                    console.log('Provide installation instructions');
                    return false;
                    }
                }
        },
        {
            type:'list',
            name:'license',
            message:'what license did you choose?(Required)',
            choices:['The MIT License', 'The GPL License', 'N/A'],
                validate: licenseInput => {
                    if (licenseInput) {
                    return true;
                    } else {
                    console.log('Please select license');
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
                type: 'input',
                name: 'email',
                message: 'Enter your E-mail (Required)',
                     validate: emailInput => {
                        if (emailInput) {
                        return true;
                        } else {
                        console.log('Please enter your GitHub username!');
                        return false;
                        }
                    }
        },

    ])
    .then(({
        title,
        description,
        installation,
        usage,
        contribution,
        license,
        github,
        email,
    })=>{
        const readMeTemplate = `# ${title}

        * [Description](#description)
        * [Installation](#installation)
        * [Usage](#usage)
        * [Contribution](#contribution)
        * [License](#license)
        
        # Description
        ${description}
        
        ## Installation
        ${installation}
        
        ## Usage
        ${usage}
        
        ## Contribution
        ${contribution}
        
        ## License
        ${license}
        
        # Contact
        * GitHub: ${github}
        * E-mail: ${email}`;
        
        newReadMe(title,readMeTemplate)
    }
    );

    function newReadMe(projectName,data){
        fs.writeFile(`./${projectName.toLowerCase().split('').join('')}.md`, data, err => { 
            if(err){
            console.log(err)
            }
            console.log('ReadMe Generated');
        })    
    };


    
