# VSCode Working Memory

__Plaintext productivity with a single file__

![Plaintext productivity with Working Memory scratch file](images/wm.jpeg)

Single file plaintext productivity - Access your Working Memory file from anywhere in VSCode.

It doen't matter if you are working on a project, reading documentation, or browsing the web. You can quickly capture your thoughts and ideas to a single file without the need to open it.

Fork of [VSCode Daily Notes](https://marketplace.visualstudio.com/items?itemName=Inaki.vscode-daily-notes) extension.

Icon created by [DALL-E](https://labs.openai.com/).

## Idea

The core of the idea is to use a single text file as a trusted capture mechanism.

If you spend a lot of time in VSCode during your workday, jumping from one workspace/project to another, you can leverage Working Memory to capture important information throughout your work day.

This extension allows you to easily open a single text or markdown file from anywhere or quickly capture something to this file without the need to open it.

The file itself does not have a specific structure. It starts with a second-level markdown header `## Capture` and contains several empty lines.

When you append lines to the file using `Alt+I`, the text will be inserted below the `## Capture` heading, surrounded by empty lines. This ensures that the captured text stands out when you revisit your Working Memory text file.


## Features

- Conveniently access your Working Memory with a shortcut: `Alt+M`
- Capture to Working Memory from anywhere with a shortcut: `Alt+I`
- Preview your Working Memory in VSCode with: `Ctrl+Shift+V`



## Installation

View in [VSCode Marketplace](https://marketplace.visualstudio.com/items?itemName=atomashevic.vscode-working-memory) for more info.

Launch VS Code Quick Open `(Ctrl+P)` and enter:

`ext install atomashevic.vscode-working-memory`

## Usage

There are 2 ways to open Working Memory:

1. **VSCode Command**: Press `Ctrl+Shift+P` or `F1`, then type `Working Memory: Open`
2. **Shortcut Key-bind**: Press `Alt+M`

If the Working Memory file is already open:

- Press `Ctrl+W` to close the file
- Press `Ctrl+S` to save the file

You have the flexibility to save your note file anywhere:

1. Create a new file `wm.md`
2. Copy the path of the file
3. Set the `workingmemory.filePath` in the configuration.

Using `Alt+M`, you can quickly insert a note without opening the Working Memory file by pressing `Alt+I`.

## Extension Settings

This extension contributes the following settings:

* `workingmemory.filePath`: The complete location of the file to be used. When empty the file will be created in the user's home directory.
  * Sample path for Windows: `c:/Users/John/wm.md`
  * Sample path for Mac or Linux: `Users/john/wm.md`

## Roadmap

General improvements: optional structuring of the Working Memory file and improvements to context-specific capture/append commands.

- [ ] Quickly insert code from other files as Markdown code blocks in Working Memory (in a separate section).
- [ ] Option to place Working Memory in the sidebar similar to [Sidebar Markdown Notes](https://github.com/AssisrMatheus/sidebar-markdown-notes)



## Contributing

- Pull requests are welcome for features and bug fixes
- Feel free to create issues when you encounter problems

## License

The extension is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).
