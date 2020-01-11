import { TreeItem, TreeItemCollapsibleState, ExtensionContext } from 'vscode';

export interface BaseItemProps {
  readonly context: ExtensionContext;
  readonly info?: string;
}

export class BaseItem extends TreeItem implements BaseItemProps {
  constructor(
    readonly context: ExtensionContext,
    label: TreeItem['label'],
    readonly parent?: BaseItem,
    iconPath?: TreeItem['iconPath'],
    readonly description?: string,
    isLeaf?: boolean,
  ) {
    super(label, isLeaf ? TreeItemCollapsibleState.None : TreeItemCollapsibleState.Collapsed);
    this.iconPath = iconPath;
  }

  tooltip = `${this.label}${this.description ? `-${this.description}` : ''}`;
}
