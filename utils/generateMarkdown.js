// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## ![badges](https://img.shields.io/badge/license-${data.license}-green)
## Title
${data.title}

### Description
${data.description}

## Table of Contents (Optional)

## Installation
${data.installation}

## Usage
${data.usage}

## Contributors
${data.contributors}

## Tests
${data.tests}

## Email
${data.email}

## Github
${data.github}

## License 
${data.license}

`;
}

module.exports = generateMarkdown;


