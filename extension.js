const vscode = require("vscode");
const fsp = require("fs").promises;
const existsSync = require("fs").existsSync;
const firstline = require("firstline");
const moment = require("moment");
const homedir = require("os").homedir();

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
  let openCommand = vscode.commands.registerCommand(
    "workingmemory.open",
    async function () {
      await prepareFile();
      const filePath = getFilePath();

      vscode.workspace.openTextDocument(filePath).then((doc) => {
        vscode.window.showTextDocument(doc);
      });
    }
  );

  let insertCommand = vscode.commands.registerCommand(
    "workingmemory.insert",
    function () {
      vscode.window
        .showInputBox({
          ignoreFocusOut: true,
          prompt: `Enter text to add to notes 📘`,
        })
        .then(async (text) => {
          if (!text) {
            // canceled
            return;
          }

          try {
            await prepareFile();
            const filePath = getFilePath();
            await appendToFileAtLine(filePath, text, 1);
          } catch (error) {
            console.error(error);
            return vscode.window.showErrorMessage(
              "Cannot edit Working Memory File."
            );
          }
        });
    }
  );

  async function prepareFile() {
    const filePath = getFilePath();

    if (existsSync(filePath)) {
    } else {
      await createNewNote(filePath);
    }
  }

  function getFilePath() {
    const configFilePath = vscode.workspace
      .getConfiguration()
      .get("workingmemory.filePath")
      .replace("~/", homedir.concat("/"));

    if (configFilePath) {
      return configFilePath;
    } else {
      return homedir + "/wm.md";
    }
  }

  function wmHeader() {
    // const today = new Date();
    // const configDateFormat = vscode.workspace
    //   .getConfiguration()
    //   .get("dailyNotes.dateFormat");

    // if (configDateFormat) {
    //   return "## " + moment(today).format(configDateFormat) + "\r\n\r\n\r\n";
    // } else {
    //   return "## " + today.toDateString() + "\r\n\r\n\r\n";
    // }
    return "## Capture" + "\r\n\r\n\r\n"
  }

  async function prependFile(filePath, content) {
    try {
      const result = await fsp.readFile(filePath, "utf8");

      if (result) {
        content = content + "\n" + result;
      }

      await fsp.writeFile(filePath, content);
    } catch (error) {
      if (error && error.code !== "ENOENT") {
        console.error(error);
        vscode.window.showErrorMessage("Cannot edit Working Memory File.");
      }
    }
  }

  async function appendToFileAtLine(filePath, content, lineNumber) {
    try {
      const result = await fsp.readFile(filePath, "utf8");

      var lines = result.toString().split("\n");
      lines.splice(lineNumber, 0, content);
      content = lines.join("\n");

      await fsp.writeFile(filePath, content);
    } catch (error) {
      if (error && error.code !== "ENOENT") {
        console.error(error);
        vscode.window.showErrorMessage("Cannot edit Working Memory.");
      }
    }
  }

  async function createNewNote(filePath) {
    try {
      await fsp.writeFile(filePath, wmHeader());
    } catch (error) {
      console.error(error);
      return vscode.window.showErrorMessage(
        `Cannot edit Working Memory File in "${filePath}". Make sure the directory is present.`
      );
    }
  }

  context.subscriptions.push(openCommand, insertCommand);
}
exports.activate = activate;

function deactivate() {}

module.exports = {
  activate,
  deactivate,
};
