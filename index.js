const inquirer = require('inquirer');
const {writeReadMe, generateMarkdown} = require('./develop/utils/generateMarkdown')

// prompt questions for ReadMe
const promptUser = choiceData => {
    console.log(choiceData)

 return inquirer.prompt([
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
            message:'What license did you choose?(Required)',
            choices:['The MIT License', 'The GPL License', 'N/A',],
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
                type:'input',
                name:'test',
                message:'Explain the testing process for your project (Required)',
                validate: testInput => {
                    if (testInput) {
                    return true;
                    } else {
                    console.log('Please enter your GitHub username!');
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
// return to generateMarkdown to generate readMe 
.then(choiceData => {
    return generateMarkdown(choiceData)
})
.then(readMe => {
    return writeReadMe(readMe);
})

.catch(err => {
    console.log(err);
  });

}




promptUser()


