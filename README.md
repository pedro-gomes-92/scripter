![GitHub package.json version](https://img.shields.io/github/package-json/v/pedro-gomes-92/scripter)
![GitHub repo size](https://img.shields.io/github/repo-size/pedro-gomes-92/scripter)

# Scripter

Scripter is a vscode extension, where the developer can apply shortcuts to easily execute custom commands. Includes the ability to see the progress of each command and act according to his needs (e.g. stop, repeat, run).

## Usage

Follow these instructions to install Scripter and start using it.

### Prerequisites

Scripter only works with Visual Studio Code, so before using it, [download it](https://code.visualstudio.com/download). After that, just install Scripter from Visual Studio Marketplace, which you can do it from [here](https://marketplace.visualstudio.com/items?itemName=pedrogomes92.scripter).

### Configuration

To be able to recognize the shortcut commands on each project, you need to add the file `scripter.json` inside of your `.vscode` folder, with the following content

```
{
  "label": "<PROJECT_NAME>",
  "description": "<PROJECT_DESCRIPTION>",
  "commands": {
    "run": {
      "title": "<COMMAND_NAME_RUN>",
      "command": ["<SHELL_COMMANDS_RUN>"]
    },
    "test": {
      "title": "<COMMAND_NAME_TEST>",
      "command": ["<SHELL_COMMANDS_TEST>"]
    },
    "install": {
      "title": "<COMMAND_NAME_INSTALL>",
      "command": ["<SHELL_COMMANDS_INSTALL>"]
    },
    "debug": {
      "title": "<COMMAND_NAME_DEBUG>",
      "command": ["<SHELL_COMMANDS_DEBUG>"]
    }
  }
}
```

Scripter will, then, register the configuration to the VSCode sidebar, so that you can start running the commands for the specific project.

## Getting Started

Follow these instructions to run Scripter locally.

### Prerequisites

Scripter is a node project, which means you should have the latest version of [NodeJS](https://nodejs.org/en/download/) installed.

### Install Project

To install the project, just run the command

```
npm install
```

### Build Project

To build the project, just run the command

```
npm run build
```

### Run Project

To start the project, just open `debug` on the sidebar of the VSCode Editor and start

```
Run Extension (scripter)
```

### Run Tests

To start the project unit tests, just run the command

```
npm test
```

## Deployment

Scripter follows the publishing steps that Microsoft suggests.

### Prerequisites

Since Sripter is a VSCode extension, generate a personal access token, by following these [steps](https://code.visualstudio.com/api/working-with-extensions/publishing-extension#get-a-personal-access-token)

After that, create a file `env.local` inside of the folder `variables`, with the content

```
TOKEN=<YOUR_PERSONAL_ACCESS_TOKEN>
```

### Publish Project

To publish the project, just run the command

```
npm run publish
```

Don't forget to bump the version beforehand, by running the command

```
npm version [path|minor|major]
```

## Built With

- [VSCode](https://github.com/microsoft/vscode) - Provides the necessary tools and utilities to create a vscode extension
- [VSCe](https://github.com/microsoft/vscode-vsce) - Manages the extension (e.g. deplyoment)

## Contributing

Please read [CONTRIBUTING.md](https://github.com/pedro-gomes-92/scripter/blob/master/CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

For the versions available, see the [tags](https://github.com/pedro-gomes-92/scripter/tags) on this repository.

## Authors

- **[Pedro Gomes](https://github.com/pedro-gomes-92)** - _Owner_

See also the list of [contributors](https://github.com/pedro-gomes-92/scripter/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](https://github.com/pedro-gomes-92/scripter/blob/master/LICENSE) file for details.
