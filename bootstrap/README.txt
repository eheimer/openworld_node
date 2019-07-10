Files in this directory will be run in order by the bootstrap process.

To be included, a file name must follow the regex: /^(\d+(\.\d+)?_.*)\.js$/

In other words, it must be a number which optionally contains a decimal, followed by `_`, followed by anything,
and ending in `.js`.
Examples:
001_first-file.js
001.0_description.js
001.5_description.js

Each file will be read in and processed one at a time, in directory sort order (by name)

By default, the run mode is 'alter'.  It will only be 'drop' if user specifies --drop on the command line.
in 'alter' mode, we only want each file to run once, but in 'drop' mode, we want to run ALL files.

Simplest module:

module.exports = async function () {
  // do stuff in here
};

If your module throws an error, subsequent modules will not be run.

Each module that runs successfully will cause the sequence to be updated so that the file will not be run again.

Sorting
=================================================
For example, you have three files: 001_file1.js, 002_file2.js, 003_file3.js
and you decide you need a new file to run in between 002 and 003.  Sorting is dependent on your operating system's
filename sorting.
On linux, you cannot simply create the file 002.5_file4.js or 0025_file4.js or 002-5_file4.js
as in all three cases linux sorts those files BEFORE 002_file2.js.  One workaround is to rename 002_file2.js to
002.0_file1.js and create the new file 002.5_file4.js.  This will sort the files properly as:
001_file1.js
002.0_file2.js
002.5_file4.js
003_file3.js
The rest of your numbering can remain the same.  This is not ideal, but the alternative is to name all of your files
with .0 from the beginning.
10s, leaving room to insert files into the sorting as needed.