import { window, OutputChannel } from 'vscode';

export class Channel {
  private output: OutputChannel;

  public constructor(private readonly id: string) {
    this.output = window.createOutputChannel(`Manager (${this.id})`);
  }

  log(text: string): void {
    this.output.appendLine(text);
    this.output.show(true);
  }
}
