const path = require('path');
const childProcess = require('child_process');
const ncp = require('ncp').ncp;
const editJsonFile = require('edit-json-file');

async function generate(dest, useYarn) {
  try {
    await copyProjectFiles(dest);
    renameProject(dest);
    installDependencies(dest, getDependencies(), useYarn);
  } catch (err) {
    console.error(err);
  }
}

function copyProjectFiles(dest) {
  const projectDir = './project';
  const src = path.join(__dirname, projectDir);

  return new Promise((resolve, reject) => {
    ncp.limit = 16;
    ncp(src, dest, err => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
}

function renameProject(dest) {
  const file = editJsonFile(dest + '/package.json', {
    autosave: true
  });
  file.set('name', path.basename(dest));
}

function getDependencies() {
  const dependencies = [
    '@reduxjs/toolkit',
    '@types/node',
    '@types/react',
    '@types/react-dom',
    '@types/react-redux',
    'query-string',
    'react',
    'react-dom',
    'react-redux',
    'react-router-dom',
    'react-scripts',
    'sass',
    'uuid',
    'typescript'
  ];
  const devDependencies = [
    '@types/query-string',
    '@types/react-router-dom',
    'npm-run-all',
    '@types/uuid',
    '@typescript-eslint/eslint-plugin',
    '@typescript-eslint/parser',
    'eslint',
    'eslint-config-prettier',
    'eslint-plugin-prettier',
    'prettier',
    'react-app-rewired'
  ];

  return {
    dependencies: dependencies.join(' '),
    devDependencies: devDependencies.join(' ')
  };
}

function installDependencies(dest, dependencyStrings, useYarn) {
  const options = {
    cwd: dest
  };

  let downloadLibCmd, downloadDevLibCmd;
  if (useYarn) {
    downloadLibCmd = `yarn add ${dependencyStrings.dependencies}`;
    downloadDevLibCmd = `yarn add -D ${dependencyStrings.devDependencies}`;
  } else {
    downloadLibCmd = `npm i -s ${dependencyStrings.dependencies}`;
    downloadDevLibCmd = `npm i -D ${dependencyStrings.devDependencies}`;
  }

  console.log('\nInstalling dependencies...\n');
  childProcess.execSync(downloadLibCmd, options);
  childProcess.execSync(downloadDevLibCmd, options);
}

module.exports = generate;