// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  let compileAndRunDisposable = vscode.commands.registerCommand("extension.compileAndRun", () => {
    vscode.commands.executeCommand("terminator.run", "xmake and run 1010");
  });
  context.subscriptions.push(compileAndRunDisposable);

  let renameDisposable = vscode.commands.registerCommand("extension.renaming", () => {
    // Simulate pressing the F2 key
    vscode.commands.executeCommand("editor.action.rename");
  });
  context.subscriptions.push(renameDisposable);
}

// This method is called when your extension is deactivated
export function deactivate() {}
