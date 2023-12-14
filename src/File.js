class File {
  constructor(name, content = "") {
    this.type = "file";
    this.name = name;
    this.content = content;
  }
}

module.exports = File;
