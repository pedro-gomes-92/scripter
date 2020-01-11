import { window, ViewColumn } from 'vscode';
import { main } from '../../webviews';

export const open = () => {
  const panel = window.createWebviewPanel('scripter.views.home', 'scripter Manager', ViewColumn.One);
  panel.webview.html = main;
};
