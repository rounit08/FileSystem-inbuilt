const FileSystem = require("./FileSystem");

// Example usage of the FileSystem class
const fileSystem = new FileSystem();

// Creating directories
fileSystem.mkdir("home");
fileSystem.mkdir("home/user");
fileSystem.mkdir("documents");

// Changing directory
fileSystem.cd("/home/user");
console.log("Current Directory:", fileSystem.currentDir.name); // Output: Current Directory: user

// Creating files
fileSystem.touch("file1.txt");
fileSystem.touch("file2.txt");

// Listing contents
fileSystem.ls(); // Output: file1.txt file2.txt

// Writing text to a file
fileSystem.echo("I am 'Finding' difficult to write this to file", "file1.txt");

// Displaying file contents
fileSystem.cat("file1.txt"); // Output: I am 'Finding' difficult to write this to file

// Moving files
fileSystem.mv("/home/user/file1.txt", "/documents/file1.txt");
fileSystem.ls("/documents"); // Output: file1.txt

// Copying files
fileSystem.cp("/documents/file1.txt", "/home/user/file1_copy.txt");
fileSystem.ls("/home/user"); // Output: file1.txt file1_copy.txt

// Removing files
fileSystem.rm("/home/user/file1.txt");
fileSystem.ls("/home/user"); // Output: file1_copy.txt
