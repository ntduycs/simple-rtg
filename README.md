# Simple RTG - React Typescript Generator

===================

[![npm Package](https://img.shields.io/npm/v/simple-rtg.svg?style=flat-square)](https://www.npmjs.org/package/simple-rtg)

## :cloud: Quick Start
The quickest way to get started is use npx and pass in the name of the project you want to create. If you don't specify a project name, the default `simple-rtg` will be used instead. If you want to use yarn instead of npm, pass the option `--useYarn`.

```shell
npx simple-rtg [--dest=<project-name>] [--useYarn]
```

Example:
```shell
npx simple-rtg --dest=my-project --useYarn
npm simple-rtg -d my-project -y
```

The process will take about 1-2 minutes. After that, your project is in ready-to-start. Start your React app in development mode by using:

```shell
cd "<project-name>" && npm run start
```

Example:
```shell
# Using npm
cd my-project && npm run start
# Using yarn
cd my-project && yarn start
```

## :clipboard: Available Commands

- `start` - Run the server in development mode
- `build` - Bundle the project using webpack
- `serve` - Run the server in production mode
- `lint` - Run linters (`prettier` and `eslint`) sequentially and autofix fixable errors if any
- `lint:check` - Run linters (`prettier` and `eslint`) sequentially and reports errors if any


Thanks! :heart: