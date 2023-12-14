class Directory {
  constructor(name, parent = null) {
    this.type = "dir";
    this.name = name;
    this.content = {};
    this.parent = parent;
  }
}

module.exports = Directory;
