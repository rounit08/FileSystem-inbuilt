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
## Installation

To set up the project locally, follow these steps:

1. **Clone the Repository:**

    ```bash
    git clone https://github.com/your-username/in-memory-file-system.git
    cd in-memory-file-system
    ```

2. **Install Dependencies:**

    ```bash
    npm install
    ```

    This command installs the required dependencies, including Jest for testing.


## Testing

This project uses Jest for testing. To run the tests, use the following command:

```bash
npm test
