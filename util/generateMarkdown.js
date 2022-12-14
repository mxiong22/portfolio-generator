// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
// Added Badge to ReadMe
function generateMarkdown(data) {
  return `# ${data.title}
![badge](https://img.shields.io/github/last-commit/${data.name}/${data.repo})

  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contributions 
  ${data.contributions}

  ## License
  ${data.license}

  ## Features
  ${data.feature}

  ## Test
  ${data.test}

`;
}

module.exports = generateMarkdown;
