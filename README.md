# Scripter

Scripter is a vscode extension, where the developer can apply shortcuts to easily execute custom commands. Includes the ability to see the progress of each command and act according to his needs (e.g. stop, repeat, run).

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

To start the project, just run the command

```
npm start
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

To start the project unit tests, just run the command

```
npm run publish
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
