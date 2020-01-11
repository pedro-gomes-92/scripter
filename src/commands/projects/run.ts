import { ProjectsView } from '../../views';
import { ProjectItem } from '../../views/items';
import { ProjectCommand } from './base';

export const runAll = (view: ProjectsView) =>
  view.getChildren().then((projects: ProjectItem[]) => ProjectCommand.runAll(view, projects, 'run'));

export const run = (view: ProjectsView, project: ProjectItem) => ProjectCommand.run(view, project, 'run');
