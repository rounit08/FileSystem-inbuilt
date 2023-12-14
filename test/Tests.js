const FileSystem = require("../FileSystem");

describe("FileSystem", () => {
  let fileSystem;

  beforeEach(() => {
    fileSystem = new FileSystem();
  });

  test("mkdir creates a new directory", () => {
    fileSystem.mkdir("testDir");
    expect(fileSystem.root.content.testDir).toBeDefined();
  });

  test("cd changes the current directory", () => {
    fileSystem.mkdir("testDir");
    fileSystem.cd("testDir");
    expect(fileSystem.currentDir.name).toBe("testDir");
  });

  test("ls lists contents of the current directory", () => {
    fileSystem.mkdir("testDir");
    fileSystem.touch("testFile.txt");
    const content = fileSystem.ls();
    expect(content).toContain("testDir");
    expect(content).toContain("testFile.txt");
  });

  test("touch creates a new empty file", () => {
    fileSystem.touch("testFile.txt");
    expect(fileSystem.root.content["testFile.txt"]).toBeDefined();
  });

  test("echo writes text to a file", () => {
    fileSystem.touch("testFile.txt");
    fileSystem.echo("Hello, World!", "testFile.txt");
    expect(fileSystem.root.content["testFile.txt"].content).toBe(
      "Hello, World!"
    );
  });

  test("mv moves a file to another location", () => {
    fileSystem.touch("testFile.txt");
    fileSystem.mkdir("testDir");
    fileSystem.mv("testFile.txt", "testDir");
    expect(fileSystem.root.content["testFile.txt"]).toBeUndefined();
    expect(
      fileSystem.root.content.testDir.content["testFile.txt"]
    ).toBeDefined();
  });

  test("cp copies a file to another location", () => {
    fileSystem.touch("testFile.txt");
    fileSystem.mkdir("testDir");
    fileSystem.cp("testFile.txt", "testDir");
    expect(
      fileSystem.root.content.testDir.content["testFile.txt"]
    ).toBeDefined();
  });

  test("rm removes a file", () => {
    fileSystem.touch("testFile.txt");
    fileSystem.rm("testFile.txt");
    expect(fileSystem.root.content["testFile.txt"]).toBeUndefined();
  });
});
