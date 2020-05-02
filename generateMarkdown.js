function generateMarkdown(answers,data) {
  return `
![github avatar](${data.avatar_url})\n
![github badge](https://img.shields.io/badge/License-${data.license}-red)
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
###
${answers.contributers}
### Testing
${answers.tests}


`

}

module.exports = generateMarkdown;

