import { window, workspace } from 'vscode';
import { readJsonSync } from 'fs-extra';

import { Path } from '../utils';
import { ProjectItem, ProcessItem, Command as ProjectCommand, ProcessType } from './items';
import { BaseView } from './base';
import * as projectCommands from '../commands/projects';
import * as processCommands from '../commands/processes';
import { Command } from '../utils';
import { Shell } from '../shell';
import { Process } from '../shell/process';

export class ProjectsView extends BaseView<ProjectItem> {
  registerCommands(): void {
    Object.keys(projectCommands).forEach((name: string) => {
      Command.register(this.context, `projects.${name}`, args => projectCommands[name](this, args));
    });

    Object.keys(processCommands).forEach((name: string) => {
      Command.register(this.context, `processes.${name}`, args => processCommands[name](this, args));
    });
  }

  async getChildren(element?: ProjectItem) {
    if (!workspace.workspaceFolders || workspace.workspaceFolders.length === 0) {
      window.showErrorMessage('No Projects in your current workspace.');
      return Promise.resolve([]);
    }

    if (element) {
      const processes = Shell.findProcesses((id: string) => id.startsWith(element.id));
      return Promise.resolve(processes.map(process => this.getProcess(element, process)));
    }

    return workspace
      .findFiles('**/.vscode/scripter.json', '**/node_modules/**', workspace.workspaceFolders.length)
      .then(files => files.map(file => this.getProject(file.path)));
  }

  private getProject(path: string): ProjectItem {
    if (Path.exists(path)) {
      const { label, icon, description, commands } = readJsonSync(path);
      const projectPath = Path.resolve(path, '../..');
      return new ProjectItem(
        this.context,
        projectPath.replace(/.+\/(.+)$/g, '$1'),
        label,
        icon,
        description,
        projectPath,
        commands,
      );
    }
  }

  private getProcess(parent: ProjectItem, process: Process): ProcessItem {
    const names = Shell.findProcessId(process).split('/');
    const type = names[1] as ProcessType;
    return new ProcessItem(
      this.context,
      type,
      parent.commands[type].title,
      parent,
      {
        light: this.context.asAbsolutePath(`assets/icons/light/${type}.svg`),
        dark: this.context.asAbsolutePath(`assets/icons/dark/${type}.svg`),
      },
      undefined,
    );
  }
}
