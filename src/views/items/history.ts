import { ExtensionContext } from 'vscode';
import { BaseItem, BaseItemProps } from './base';

interface HistoryItemProps extends BaseItemProps {}

export class HistoryItem extends BaseItem implements HistoryItemProps {
  constructor(
    context: ExtensionContext,
    label: BaseItem['label'],
    icon?: BaseItem['iconPath'],
    description: BaseItem['description'] = '',
  ) {
    super(context, label, undefined, icon, description, true);
  }

  contextValue = 'process';
}
