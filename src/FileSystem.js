const Directory = require("./Directory");
const File = require("./File");

class FileSystem {
  constructor() {
    this.root = new Directory("/");
    this.currentDir = this.root;
  }

  mkdir(name) {
    if (!this.isValidName(name)) {
      console.log("Invalid directory name");
      return;
    }

    const newDir = new Directory(name, this.currentDir);
    this.currentDir.content[name] = newDir;
  }

  cd(path) {
    const targetDir = this.navigateToPath(path, this.currentDir);
    if (targetDir && targetDir.type === "dir") {
      this.currentDir = targetDir;
    } else {
      console.log("Invalid directory path");
    }
  }

  ls(path = "") {
    let targetDir = this.currentDir;

    if (path && path !== ".") {
      targetDir = this.navigateToPath(path, this.currentDir);
    }

    if (targetDir && targetDir.type === "dir") {
      const content = Object.keys(targetDir.content);
      console.log(content.join(" "));
    } else {
      console.log("Invalid directory path");
    }
  }

  touch(name) {
    if (!this.isValidName(name)) {
      console.log("Invalid file name");
      return;
    }

    const newFile = new File(name);
    this.currentDir.content[name] = newFile;
  }

  echo(text, fileName) {
    if (!this.isValidName(fileName)) {
      console.log("Invalid file name");
      return;
    }

    if (this.currentDir.content[fileName]) {
      this.currentDir.content[fileName].content = text;
    } else {
      console.log("File not found");
    }
  }

  mv(sourcePath, destinationPath) {
    const source = this.navigateToPath(sourcePath, this.currentDir);
    const destinationDir = this.navigateToPath(
      destinationPath,
      this.currentDir
    );

    if (source && destinationDir) {
      const fileName = source.name;

      delete source.parent.content[fileName];

      destinationDir.content[fileName] = source;
      source.parent = destinationDir;
    } else {
      console.log("invalid source or destination");
    }
  }

  cp(sourcePath, destinationPath) {
    const source = this.navigateToPath(sourcePath, this.currentDir);
    const destinationDir = this.navigateToPath(
      destinationPath,
      this.currentDir
    );

    if (source && destinationDir && source.type !== "dir") {
      const fileName = source.name;

      // Copy the file
      const copiedFile = new File(fileName);
      copiedFile.content = source.content;

      // Add to the destination directory
      destinationDir.content[fileName] = copiedFile;
    } else {
      console.log("Invalid source or destination");
    }
  }

  rm(path) {
    const target = this.navigateToPath(path, this.currentDir);

    if (target && target.type !== "dir") {
      const fileName = target.name;

      // Remove from the parent directory
      delete target.parent.content[fileName];
    } else {
      console.log("Invalid file path");
    }
  }

  isValidName(name) {
    return typeof name === "string" && name.trim() !== "";
  }

  navigateToPath(path, startDir) {
    const parts = path.split("/").filter((part) => part !== "");

    let currentDir = startDir;

    for (const part of parts) {
      if (part === "..") {
        currentDir = currentDir.parent || currentDir;
      } else if (part === ".") {
        // Do nothing, stay in the current directory
      } else {
        const nextDir = currentDir.content[part];
        if (nextDir && nextDir.type === "dir") {
          currentDir = nextDir;
        } else {
          return null; // Invalid path
        }
      }
    }

    return currentDir;
  }
}

module.exports = FileSystem;
