import { accessSync } from 'fs-extra';
import { resolve as pathResolve } from 'path';

export class Path {
  static exists(p: string): boolean {
    try {
      accessSync(p);
    } catch (err) {
      return false;
    }

    return true;
  }

  static resolve(...p: string[]): string {
    return pathResolve(...p);
  }
}
