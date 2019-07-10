# openworld

a [Sails v1](https://sailsjs.com) application

### Typescript

As of Wed Feb 27 2018, this app requires typescript compilation. Use the start script or be sure to run tsc in the root of the project to generate the server-side .js files.  In development, you can run the tsc watch job using `<CTRL><SHIFT>B` and selecting `tsc: watch - tsconfig.json` to achieve "compile-on-save" functionality.  Be sure to edit the .ts files, not the compiled .js files.

To get sails to ignore the .ts files I was forced to make a number of additions to the `node_modules/sails/lib/hooks/moduleloader/index.js` file.  I had to add the exception for .ts files in several of the methods.  So if you are installing a fresh copy and getting strange errors, this is probably why.  Look for lines like:
    `filter: /^(.+)\.(?:(?!md|txt).)+$/,`
and change to:
    `filter: /^(.+)\.(?:(?!md|txt|ts).)+$/,`

### Version info

This app was originally generated on Thu Oct 18 2018 16:47:21 GMT-0500 (Central Daylight Time) using Sails v1.0.2.

<!-- Internally, Sails used [`sails-generate@1.15.28`](https://github.com/balderdashy/sails-generate/tree/v1.15.28/lib/core-generators/new). -->


This project's boilerplate is based on an expanded seed app provided by the [Sails core team](https://sailsjs.com/about) to make it easier for you to build on top of ready-made features like authentication, enrollment, email verification, and billing.  For more information, [drop us a line](https://sailsjs.com/support).


<!--
Note:  Generators are usually run using the globally-installed `sails` CLI (command-line interface).  This CLI version is _environment-specific_ rather than app-specific, thus over time, as a project's dependencies are upgraded or the project is worked on by different developers on different computers using different versions of Node.js, the Sails dependency in its package.json file may differ from the globally-installed Sails CLI release it was originally generated with.  (Be sure to always check out the relevant [upgrading guides](https://sailsjs.com/upgrading) before upgrading the version of Sails used by your app.  If you're stuck, [get help here](https://sailsjs.com/support).)
-->

