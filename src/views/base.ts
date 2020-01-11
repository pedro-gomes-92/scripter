import { TreeItem, TreeDataProvider, ExtensionContext, Event, EventEmitter, ProviderResult } from 'vscode';
import { BaseItem } from './items';

export abstract class BaseView<T extends BaseItem = BaseItem> implements TreeDataProvider<T> {
  private _onDidChangeTreeData: EventEmitter<T>;
  public onDidChangeTreeData: Event<T | undefined | null>;

  constructor(protected readonly context: ExtensionContext, readonly id: string, readonly children?: BaseView[]) {
    this.initialize();
  }

  abstract async getChildren(element?: T): Promise<T[]>;

  initialize(): void {
    this._onDidChangeTreeData = new EventEmitter();
    this.onDidChangeTreeData = this._onDidChangeTreeData.event;

    this.registerCommands();
  }

  refresh(): void {
    this._onDidChangeTreeData.fire();
    if (this.children) {
      this.children.forEach(childView => childView.refresh());
    }
  }

  getTreeItem(element: T): TreeItem {
    return element;
  }

  registerCommands(): void {}
}
