# VSCode Working Memory

__Plaintext productivity with a single file__

A simple text-based extension for Visual Studio Code.

Fork of [VSCode Daily Notes](https://marketplace.visualstudio.com/items?itemName=Inaki.vscode-daily-notes) extension.

## Features

* Access your Working Memory conveniently with a shortcut: `Alt+m`
* Insert a note anywhere with a shortcut: `Alt+i`
* Made in Markdown format so VSCode preview is possible with: `Ctrl+Shift+v`

## Usage

There are 2 ways to open Woking Memory:

* VSCode Command: `Ctrl+Shift+P` or `F1`, then type `Working Memory: Open`
* Shortcut Key-bind: Press `Alt+M`

If the Daily Notes file is already open:

* Press `Ctrl+W` to close the file
* Press `Ctrl+S` to save the file

You may save your note file anywhere:

* Create a new file `wm.md`, copy the path and set the `workingmemory.filePath` in config.

You can can insert a quick note without opening the Daily Notes File: Press `Alt+I`

## Extension Settings

This extension contributes the following settings:

* `workingmemory.filePath`: The complete location of the file to be used. When empty the file will be created in user's home directory.
  * Sample path for Windows: `c:/Users/John/daily-notes.md`
  * Sample path for Mac or Linux: `Users/john/daily-notes.md`

* `editor.tokenColorCustomizations.textMateRules`: You can customize tag colors here.

## Known Issues

* If you are using remote Windows Subsystem for Linux a.k.a WSL for VSCode, the file path format from Windows may not work.
This can be solved easily by using the file path from WSL e.g. `/mnt/c/projects`.

## Contributing
- Pull requests are welcome for features and bug fixes
- Feel free to create issues when you encounter problems

## License
The extension is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).
