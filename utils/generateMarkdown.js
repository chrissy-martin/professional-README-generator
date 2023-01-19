// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "None") {
    return `![Badge](https://img.shields.io/badge/License-${license}-blue.svg)`
  }
  return ``;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'MIT':
      return 'https://opensource.org/licenses/MIT';
    case 'Apache':
      return 'https://opensource.org/licenses/Apache-2.0'
    case 'Mozilla-Public':
      return 'https://opensource.org/licenses/MPL-2.0'
      case 'GNU-GPL v3':
        return 'https://www.gnu.org/licenses/gpl-3.0'
      case 'ISC':
        return 'https://opensource.org/licenses/ISC'
    default:
      return '';
  }
  }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "None") {
    return `
    This application is covered by the ${license} license.`
  }
  return ``;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  #  ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}

## Table of Content
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Test](#Test)
- [Questions](#questions)


  ## Installation:
  ${data.installation}

  ## Usage:
  ${data.usage}

  ## License:
  ${renderLicenseLink(data.license)}
  ${renderLicenseSection(data.license)}

  ## Contribution:
  ${data.contributing}

  ## Testing:
  ${data.testing}

  ## Additional Info:
  - Github: [${data.username}](https://github.com/${data.username})
  - Email: ${data.email} `;

}

module.exports = generateMarkdown;
