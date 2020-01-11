import { BaseItem, BaseItemProps } from './base';
import { ExtensionContext } from 'vscode';

export interface Command {
  title: string;
  command: string[];
}

export interface Commands {
  [name: string]: Command;
}

export interface ProjectItemProps extends BaseItemProps {
  readonly rootPath?: string;
  readonly commands?: Commands;
}

export class ProjectItem extends BaseItem implements ProjectItemProps {
  constructor(
    context: ExtensionContext,
    readonly id: string,
    label: BaseItem['label'],
    icon: BaseItem['iconPath'] = {
      light: context.asAbsolutePath('assets/icons/light/application.svg'),
      dark: context.asAbsolutePath('assets/icons/dark/application.svg'),
    },
    description: BaseItem['description'] = '',
    readonly rootPath?: string,
    readonly commands?: Commands,
  ) {
    super(context, label, undefined, icon, description);
  }

  contextValue = 'project';
}
