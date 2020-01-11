import { HistoryItem } from './items';
import { BaseView } from './base';
import * as historyCommands from '../commands/history';
import { Command } from '../utils';
import { Shell } from '../shell';

export class HistoryView extends BaseView<HistoryItem> {
  registerCommands(): void {
    Object.keys(historyCommands).forEach((name: string) => {
      Command.register(this.context, `history.${name}`, args => historyCommands[name](this, args));
    });
  }

  async getChildren() {
    return Shell.getHistory().map(
      process =>
        new HistoryItem(this.context, Shell.findProcessId(process), {
          light: this.context.asAbsolutePath(`assets/icons/light/state/${process.state}.svg`),
          dark: this.context.asAbsolutePath(`assets/icons/dark/state/${process.state}.svg`),
        }),
    );
  }
}
