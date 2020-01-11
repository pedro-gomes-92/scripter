import { ChildProcess, spawn } from 'child_process';
import * as terminate from 'terminate';

export type State = 'none' | 'success' | 'error' | 'warning';

export class Process {
  executable: ChildProcess;
  state: State;

  public constructor(
    script: string,
    onExit: (state: State) => void,
    onOutput: (output: string) => void,
    onError: (err: string) => void,
  ) {
    this.executable = spawn(script, { shell: true });

    this.executable.on('exit', (code, signal) => {
      if (code) {
        this.state = 'error';
      } else {
        this.state = 'success';
        if (signal === 'SIGKILL') {
          this.state = 'warning';
        }
      }

      onExit(this.state);
    });

    this.executable.stderr.on('data', onError);
    this.executable.stdout.on('data', onOutput);

    this.state = 'none';
  }

  stop(): void {
    terminate(this.executable.pid);
  }
}
