import { window, commands, ExtensionContext, ViewColumn } from 'vscode';
import { Shell } from '../shell/shell';
import { Logger } from '../logger';
import { ProjectItem } from '../views/items';
import { ProjectsView } from '../views';

export class Command {
  static register(context: ExtensionContext, name: string, commandFn: (args?: any) => void): void {
    let disposable = commands.registerCommand(`scripter.commands.${name}`, commandFn);

    context.subscriptions.push(disposable);
  }
}
