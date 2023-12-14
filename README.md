# In-Memory File System

This project implements an in-memory file system with basic functionalities. The file system supports operations such as creating directories, navigating through directories, listing contents, creating files, moving, copying, and removing files or directories.

## Features

- `mkdir`: Create a new directory.
- `cd`: Change the current directory, supporting relative and absolute paths.
- `ls`: List the contents of the current or specified directory.
- `touch`: Create a new empty file.
- `echo`: Write text to a file.
- `mv`: Move a file or directory to another location.
- `cp`: Copy a file or directory to another location.
- `rm`: Remove a file or directory.

## Usage

### Example Usage

```javascript
// Import the FileSystem class
const FileSystem = require('./FileSystem');

// Create a new instance of the file system
const fileSystem = new FileSystem();

// Creating directories and files
fileSystem.mkdir('docs');
fileSystem.touch('file1.txt');
fileSystem.touch('file2.txt');

// Removing a directory and its contents
fileSystem.rm('/docs');
fileSystem.ls(); // Output: file1.txt file2.txt
```
Documentation
FileSystem Class
Constructor
javascript
Copy code
const fileSystem = new FileSystem();
Initializes a new instance of the FileSystem class with a root directory.

Methods
mkdir(name): Create a new directory.
cd(path): Change the current directory.
ls(path): List contents of the current or specified directory.
touch(name): Create a new empty file.
echo(text, fileName): Write text to a file.
mv(sourcePath, destinationPath): Move a file or directory.
cp(sourcePath, destinationPath): Copy a file or directory.
rm(path): Remove a file or directory.
Example Usage
javascript
Copy code
fileSystem.mkdir('docs');
fileSystem.cd('/docs');
fileSystem.touch('example.txt');
fileSystem.ls(); // Output: example.txt
fileSystem.rm('/docs/example.txt');
fileSystem.ls(); // Output: (empty)
