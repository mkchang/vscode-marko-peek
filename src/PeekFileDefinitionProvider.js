'use strict';
const vscode = require('vscode');
module.exports = class PeekFileDefinitionProvider {

    /**
     * @param {string[]} targetFileExtensions
     */
    constructor(targetFileExtensions = []) {
        this.targetFileExtensions = targetFileExtensions;
    }

    /**
     * @param {vscode.Position} position
     * @returns {string} component name as selected text
     */
    getComponentName(position) {
        const doc = vscode.window.activeTextEditor.document;
        const selection = doc.getWordRangeAtPosition(position, /[a-zA-Z](?:[\-a-zA-Z]*[a-zA-Z])?/);
        const selectedText = doc.getText(selection);
        return selectedText;
    }

    /**
     * @param {string} fileName
     * @returns {Thenable} vscode.Uri[] 
     */
    searchFilePath(fileName) {
        return vscode.workspace.findFiles(`**/${fileName}/*.marko`); // Returns promise
    }

    /**
     * @param {vscode.TextDocument} document
     * @param {vscode.Position} position
     * @param {vscode.CancellationToken} token
     * @returns {Promise} vscode.Location | vscode.Location[] 
     */
    provideDefinition(document, position, token) {
        let filePaths;
        const componentName = this.getComponentName(position);
        const searchPathAction = this.searchFilePath(componentName);
        const searchPromise = Promise.resolve(searchPathAction); // pass array of promises

        return searchPromise.then(path => {
            filePaths = [].concat.apply([], path);
            if (filePaths.length) {
                let allPaths = [];
                filePaths.forEach(filePath => {
                    allPaths.push(new vscode.Location(vscode.Uri.file(`${filePath.path}`), new vscode.Position(0, 1)))
                });
                return allPaths;
            } else {
                return undefined;
            }
        }, (reason) => {
            return undefined;
        });
    }
}