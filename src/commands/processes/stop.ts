import { ProjectsView } from '../../views';
import { ProcessItem } from '../../views/items';
import { Shell } from '../../shell';

export const stop = (view: ProjectsView, process: ProcessItem) => {
  const shellProcesses = Shell.findProcesses((id: string) => id.startsWith(`${process.parent.id}/${process.type}`));
  shellProcesses.forEach(shellProcess => Shell.remove(shellProcess));
  view.refresh();
};
