function generateMarkdown(answers) {
  return `
  ![Github user](${response.avatar_url})
# ${answers.title}
###${answers.description}
###${answers.installation}
###${answers.usage}
###${answers.technology}
###${answers.licenses}
###${answers.contributers}
###${answers.tests}
###${answers.questions}
`;
}

module.exports = generateMarkdown;
