import { ProjectsView } from '../../views';
import { ProjectItem } from '../../views/items';
import { ProjectCommand } from './base';

export const testAll = (view: ProjectsView) =>
  view.getChildren().then((projects: ProjectItem[]) => ProjectCommand.runAll(view, projects, 'test'));

export const test = (view: ProjectsView, project: ProjectItem) => ProjectCommand.run(view, project, 'test');
