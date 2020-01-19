import { Process } from './process';

interface Processes {
  [id: string]: Process;
}

export class Shell {
  private static processes: Processes = {};
  private static history: Process[] = [];
  static execute(
    id: string,
    script: string,
    onExit: (...args: any) => void,
    onOutput: (...args: any) => void,
    onError: (...args: any) => void,
  ): void {
    Shell.add(id, new Process(script, onExit, onOutput, onError));
  }

  static exists(id: string): boolean {
    return Object.keys(this.processes).indexOf(id) !== -1;
  }

  static add(id: string, process: Process): void {
    this.processes[id] = process;
  }

  static findProcessId(process: Process): string {
    const index = Object.values(this.processes).indexOf(process);
    return index >= 0 ? Object.keys(this.processes)[index] : '';
  }

  static remove(targetProcess: Process): void {
    this.history.push(targetProcess);

    targetProcess.stop();
    delete this.processes[Shell.findProcessId(targetProcess)];
  }

  static clearHistory(): void {
    this.history = [];
  }

  static getHistory(): Process[] {
    return this.history;
  }

  static findProcesses(filter?: ((id: string, index: number) => boolean) | string[]): Process[] {
    if (!filter) {
      return Object.values(this.processes);
    }

    if (typeof filter === 'function') {
      return this.findProcesses(Object.keys(this.processes).filter(filter));
    }

    return filter.map((id: string) => this.processes[id]);
  }
}
