import { HistoryView } from '../../views/history';
import { Shell } from '../../shell';

export const clear = (view: HistoryView) => {
  Shell.clearHistory();
  view.refresh();
};
