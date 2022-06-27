// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = response => {
  var badge;

  if (response.license == "Apache 2.0 License") {
    badge = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  }
  else if (response.license == "Boost Software License 1.0") {
    badge = "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
  }
  else if (response.license == "Eclipse Public License 1.0") {
    badge = "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)";
  }
  else if (response.license == "The Hippocratic License 2.1") {
    badge = "[![License: Hippocratic 2.1](https://img.shields.io/badge/License-Hippocratic_2.1-lightgrey.svg)](https://firstdonoharm.dev)";
  }
  else if (response.license == "The Hippocratic License 3.0") {
    badge = "[![License: Hippocratic 3.0](https://img.shields.io/badge/License-Hippocratic_3.0-lightgrey.svg)](https://firstdonoharm.dev)";
  }
  else if (response.license == "IBM Public License Version 1.0") {
    badge = "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)";
  }
  else if (response.license == "ISC License (ISC)") {
    badge = "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)";
  }
  else if (response.license == "MIT License") {
    badge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  }
  else if (response.license == "The Unlicense") {
    badge = "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)";
  }
  else if (response.license == null) {
    badge = "";
  }
  return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
module.exports = generateMarkdown => {
  const { data } = generateMarkdown;
  return `# ${generateMarkdown.title}
  ${renderLicenseBadge(generateMarkdown)}
  ## Description 
  ${generateMarkdown.description}
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [Tests](#tests)
  - [License](#license)
  - [Questions](#questions)
  ## Installation
  ${generateMarkdown.installation}
  ## Usage
  ${generateMarkdown.usage}
  ## Credits
  ${generateMarkdown.credits}
  ## Tests
  ${generateMarkdown.tests}
  ## License
  This project is using the ${generateMarkdown.license} license. For further information, please visit [here](https://choosealicense.com/licenses/).
  ## Questions
  If you have any questions or general comments, please feel free to contact me!
  Here are some ways to get in touch with me:
  GitHub: [${generateMarkdown.github}](https://github.com/${generateMarkdown.github})
  Email: <${generateMarkdown.email}>


`;
};

