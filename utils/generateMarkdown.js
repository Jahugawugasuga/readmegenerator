function generateMarkdown(answers,response) {
  return `
![github avatar](${response.avatar_url})\n
![github badge](https://img.shields.io/badge/License-${response.license}-red)
 ## Application
 ${answers.title} 
### Project Description
${answers.description}
### How to Install
${answers.installation}
### How to Use this Application
${answers.usage}
### Techology Used
${answers.technology}
### Licenses
${answers.licenses}
### Project Contributers
${answers.contributers}
### Testing
${answers.tests}


`

}

module.exports = generateMarkdown;

