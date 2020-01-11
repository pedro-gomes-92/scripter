import { ProjectsView } from '../../views';
import { ProjectItem } from '../../views/items';
import { ProjectCommand } from './base';

export const installAll = (view: ProjectsView) =>
  view.getChildren().then((projects: ProjectItem[]) => ProjectCommand.runAll(view, projects, 'install'));

export const install = (view: ProjectsView, project: ProjectItem) => ProjectCommand.run(view, project, 'install');
