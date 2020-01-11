import { ProjectsView } from '../../views';
import { ProjectItem, ProcessType } from '../../views/items';
import { window } from 'vscode';
import { Logger } from '../../logger';
import { Shell } from '../../shell';
import { State } from '../../shell/process';

export class ProjectCommand {
  static run(view: ProjectsView, item: ProjectItem, type: ProcessType): void {
    const commands = item.commands;
    if (commands) {
      const command = commands[type];
      if (command) {
        const id = `${item.id}/${type}`;
        if (Shell.findProcesses(pId => pId.startsWith(id)).length > 0) {
          window.showErrorMessage(`${item.label}: ${command.title} already executing!`);
          return;
        }

        window.showInformationMessage(`${item.label}: Executing ${command.title}...`);

        // Execute command on terminal
        command.command.forEach((script: string, index: number) => {
          this.execute(view, item, index === 0 ? id : `${id}/${index + 1}`, `cd ${item.rootPath}; ${script}`);
        });

        view.refresh();
        return;
      }
    }

    window.showErrorMessage(`${item.label}: Command ${type} not configured!`);
  }

  static execute(view: ProjectsView, project: ProjectItem, id: string, script: string): void {
    Logger.logSection(project.id, `${project.label}: Process ${id} started`);
    Logger.log(project.id, `$ ${script}`);
    Shell.execute(
      id,
      script,
      (state: State) => {
        Logger.logSection(project.id, `${project.label}: Process ${id} stopped`);
        if (state === 'error') {
          window.showErrorMessage(
            `${project.label}: Process ${id} finished with errors. Check output for more details...`,
          );
        } else {
          window.showInformationMessage(`${project.label}: Process ${id} finished successfuly.`);
        }

        Shell.findProcesses(pId => pId.startsWith(id)).forEach(process => Shell.remove(process));
        view.refresh();
      },
      (stdout: string) => {
        Logger.log(project.id, stdout);
      },
      (err: string) => {
        Logger.log(project.id, err);
      },
    );
  }

  static runAll(view: ProjectsView, items: ProjectItem[], type: ProcessType): void {
    items.forEach(item => this.run(view, item, type));
  }
}
