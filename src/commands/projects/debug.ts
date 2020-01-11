import { ProjectsView } from '../../views';
import { ProjectItem } from '../../views/items';
import { ProjectCommand } from './base';

export const debugAll = (view: ProjectsView) =>
  view.getChildren().then((projects: ProjectItem[]) => ProjectCommand.runAll(view, projects, 'debug'));

export const debug = (view: ProjectsView, project: ProjectItem) => ProjectCommand.run(view, project, 'debug');
