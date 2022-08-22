# VSCode Working Memory

__Plaintext productivity with a single file__

Single file plaintext productivity - Access Working Memory file from anywhere in VSCode.

Fork of [VSCode Daily Notes](https://marketplace.visualstudio.com/items?itemName=Inaki.vscode-daily-notes) extension.

Icon created by [DALL-E](https://labs.openai.com/).

## Idea

Extension is inspired by Cal Newport's idea about `WorkingMemory.txt` file. See *Deep Questions* podcast episode for more details.

[![Deep Questions Podcast](images/dq.png)](https://www.youtube.com/watch?v=3-MOxvedJXM&t=0s)

The core of the idea is to use a single text file as a trusted capture mechanism.

> WorkingMemory.txt is a simple text file where you constantly add stuff to it. Always look at it. Let it grow. Clean things off. 

If you spend a lot of time in VSCode during your workday, jumping from one workspace/project to another, you can use Working Memory to capture bits and pieces of information throughout your work day.

This extension enables you to open a single text or markdown file from anywhere or to quickly capture something to this file without opening it. 

The file itself has no specific structure. It begins with a second-level markdown header `## Capture` and has several empty lines.

Appending lines to the file 



## Features

* Access your Working Memory conveniently with a shortcut: `Alt+M`
* Capture to Working Memory from anywhere with a shortcut: `Alt+I`
* Made in Markdown format so VSCode preview is possible with: `Ctrl+Shift+V`

## Usage

There are 2 ways to open Woking Memory:

* VSCode Command: `Ctrl+Shift+P` or `F1`, then type `Working Memory: Open`
* Shortcut Key-bind: Press `Alt+M`

If the Daily Notes file is already open:

* Press `Ctrl+W` to close the file
* Press `Ctrl+S` to save the file

You may save your note file anywhere:

* Create a new file `wm.md`, copy the path and set the `workingmemory.filePath` in config.

Using `Alt+M`

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
