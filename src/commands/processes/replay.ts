import { ProjectsView } from '../../views';
import { ProcessItem } from '../../views/items';
import { stop } from './stop';
import { run } from '../projects';

export const replay = (view: ProjectsView, process: ProcessItem) => {
  stop(view, process);
};
