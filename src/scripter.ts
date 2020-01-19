import { ExtensionContext, window } from 'vscode';
import * as genericCommands from './commands/generic';
import { ProjectsView, BaseView } from './views';
import { Command } from './utils';

export const activate = (context: ExtensionContext) => {
  // const historyView = new HistoryView(context, 'scripter.views.history');
  const projectsView = new ProjectsView(context, 'scripter.views.projects');
  registerView(projectsView);
  // registerView(historyView);

  Object.keys(genericCommands).forEach((name: string) => {
    Command.register(context, name, genericCommands[name]);
  });
};

const registerView = (view: BaseView) => {
  window.registerTreeDataProvider(view.id, view);
};

export const deactivate = () => {};
