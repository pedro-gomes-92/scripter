import { Channel } from './channel';

export class Logger {
  private static channels: {
    [id: string]: Channel;
  } = {};

  private static sectionHeader = '\n------------------------------------\n';
  private static sectionFooter = '\n------------------------------------\n';

  static log(id: string, text: string) {
    if (!this.exists(id)) {
      this.add(id, new Channel(id));
    }

    this.channels[id].log(text);
  }

  static logSection(id, text: string) {
    this.log(id, `${this.sectionHeader}${text}${this.sectionFooter}`);
  }

  static exists(id: string): boolean {
    return Object.keys(this.channels).indexOf(id) !== -1;
  }
  static add(id: string, channel: Channel): void {
    this.channels[id] = channel;
  }
}
