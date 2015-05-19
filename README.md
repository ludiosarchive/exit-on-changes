exit-on-changes
===

[![NPM version][npm-image]][npm-url]
[![Build status][travis-image]][travis-url]

exit-on-changes quits your node/io.js program when changes to source
files are detected, leaving the parent process or shell to actually
start it again.  This avoids some of the problems with other solutions
that must spawn two io.js processes or prevent you from using your
shell aliases.  exit-on-changes is particularly useful (vs. the
alternatives) in Cygwin environments, but works elsewhere too.


Install
---

In your project, run:

```
npm install exit-on-changes --save
```

or install from the GitHub repo:

```
npm install ludios/exit-on-changes --save
```


API
---
Somewhere in your program:

```js
require('exit-on-changes');
```

Then start your program with the environmental variable `EXIT_ON_CHANGES_ENABLED=1`.

This will exit on changes to source files in the current directory.  To actually
have the program restart in a loop, use this
[`restarter()`](https://github.com/ludios/uSanity/blob/master/files/etc/zsh/zshrc-cont#L107)
function for zsh, or write a similar loop.

Example:

```zsh
restarter EXIT_ON_CHANGES_ENABLED=1 iojs app.js
```


[npm-image]: https://img.shields.io/npm/v/exit-on-changes.svg
[npm-url]: https://npmjs.org/package/exit-on-changes
[travis-image]: https://img.shields.io/travis/ludios/exit-on-changes.svg
[travis-url]: https://travis-ci.org/ludios/exit-on-changes
