// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return '';
  }
  else if (license === 'Apache 2.0 License') {
    return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  } else if (license === 'Boost Software License 1.0') {
    return `[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`
  } else if (license === 'BSD 3-Clause License') {
    return `[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`
  } else if (license === 'Eclipse Public License 1.0') {
    return `[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)`
  } else if (license === 'GNU GPL v3') {
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
  } else if (license === 'The MIT License') {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  } else if (license === 'Open Database License (ODbL)') {
    return `[![License: ODbL](https://img.shields.io/badge/License-ODbL-brightgreen.svg)](https://opendatacommons.org/licenses/odbl/)`
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {
//   if (!license) {
//     return '';
//   }
//   else if (license === 'Apache 2.0 License') {
//     return 'https://opensource.org/licenses/Apache-2.0'
//   } else if (license === 'Boost Software License 1.0') {
//     return 'https://www.boost.org/LICENSE_1_0.txt'
//   } else if (license === 'BSD 3-Clause License') {
//     return 'https://opensource.org/licenses/BSD-3-Clause'
//   } else if (license === 'Eclipse Public License 1.0') {
//     return 'https://opensource.org/licenses/EPL-1.0'
//   } else if (license === 'GNU GPL v3') {
//     return 'https://www.gnu.org/licenses/gpl-3.0'
//   } else if (license === 'The MIT License') {
//     return 'https://opensource.org/licenses/MIT'
//   } else if (license === 'Open Database License (ODbL)') {
//     return 'https://opendatacommons.org/licenses/odbl/'
//   }
// }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contributing
  ${data.credits}

  ## License
  ${data.license}

  ## Tests
  ${data.tests}

  ## Questions

  Feel free to reach out to me on GitHub: [${data.username}](https://github.com/${data.username}).

  You can also reach me via email: ${data.email}

`;
}

module.exports = generateMarkdown;
