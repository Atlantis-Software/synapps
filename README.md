# synapps
synapps is a web framework for Node.js

[![npm version](https://badge.fury.io/js/%40synapps%2Fcore.svg)](https://badge.fury.io/js/%40synapps%2Fcore)
[![Linux Build](https://travis-ci.org/Atlantis-Software/synapps.svg?branch=master)](https://travis-ci.org/Atlantis-Software/synapps)
[![Windows Build](https://ci.appveyor.com/api/projects/status/xt5nrvra2o4xh4al?svg=true)](https://ci.appveyor.com/project/atiertant/synapps)
[![Coverage Status](https://coveralls.io/repos/github/Atlantis-Software/synapps/badge.svg?branch=master)](https://coveralls.io/github/Atlantis-Software/synapps?branch=master)
[![Dependencies Status](https://david-dm.org/Atlantis-Software/synapps.svg)](https://david-dm.org/Atlantis-Software/synapps)

```js
var synapps = require('@synapps/core');
var app = synapps();

app.route('/', function(req) {
  req.resolve('hello world');
});

app.listen(3000);
```

```bash
$ curl http://127.0.0.1:3000
hello world
```

## Installation

This is a [Node.js](https://nodejs.org/en/) module available through the
[npm registry](https://www.npmjs.com/).

Before installing, [download and install Node.js](https://nodejs.org/en/download/).
Node.js 6 or higher is required.

Installation is done using the
[`npm install` command](https://docs.npmjs.com/getting-started/installing-npm-packages-locally):

```bash
$ npm install @synapps/core
```

## Docs

Visit the [Wiki](https://github.com/Atlantis-Software/synapps/wiki)

## Examples

  To view the examples, clone the Synapps repo and install the dependencies:

```bash
$ git clone git://github.com/Atlantis-Software/synapps.git
$ cd synapps/
$ npm install
```

  Then install the dependencies and run whichever example you want:

```bash
$ cd examples/auth
$ npm install
$ node index
```

## Tests

  To run the test suite, first install the dependencies, generate ssl key, then run `npm test`:

```bash
$ git clone git://github.com/Atlantis-Software/synapps.git
$ cd synapps/
$ npm install
$ npm test
```


## License

  [MIT](LICENSE.md)
