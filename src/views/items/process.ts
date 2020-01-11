import { ExtensionContext } from 'vscode';
import { BaseItem, BaseItemProps } from './base';
import { ProjectItem } from './project';

export type ProcessType = 'install' | 'run' | 'debug' | 'test';

interface ProcessItemProps extends BaseItemProps {
  type: ProcessType;
}

export class ProcessItem extends BaseItem implements ProcessItemProps {
  constructor(
    context: ExtensionContext,
    readonly type: ProcessType,
    label: BaseItem['label'],
    readonly parent: ProjectItem,
    icon?: BaseItem['iconPath'],
    description: BaseItem['description'] = '',
  ) {
    super(context, label, parent, icon, description, true);
  }

  contextValue = 'process';
}
