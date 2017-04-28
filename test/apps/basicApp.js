var synapps = require('../../index');
var _ = require('lodash');

var firstApp = synapps();
firstApp.set('name', 'firstApp');
firstApp.set('ipcLocalPort', 8001);
firstApp.set('debug', 0);

firstApp.set('tls', {
  publicKey: '/home/dev/svn/synapse/atlbusiness/tls/domain.crt',
  privateKey: '/home/dev/svn/synapse/atlbusiness/tls/domain.key',
  trusted: ['/home/dev/svn/synapse/atlbusiness/tls/domain.crt'],
  port: 8100
});

firstApp.route('test', {
  ping: [
    {},
    function(req) {
      req.resolve({response: 'PONG'});
    }
  ],
  required: [
    {
      input: {
        required: {
          type: 'string',
          required: true
        },
        notRequired: {
          type: 'string'
        }
      }
    },
    function(req) {
      req.resolve({ok: true});
    }
  ]
});

firstApp.route('type', {
  string: [
    {
      input: {
        string: {
          type: 'string'
        }
      }
    },
    function(req) {
      if (!_.isString(req.data.string)) {
        return req.reject(req.data.string + ' should be a string');
      }
      if (req.data.string !== 'test string') {
        return req.reject(req.data.string + ' should equal "test string"');
      }

      req.resolve({ok: true});
    }
  ],
  boolean: [
    {
      input: {
        true: {
          type: 'boolean'
        },
        false: {
          type: 'boolean'
        }
      }
    },
    function(req) {
      if (!_.isBoolean(req.data.true) || !_.isBoolean(req.data.false)) {
        return req.reject('req.data.true `' + req.data.true + '` and req.data.false `' + req.data.false + '` should be booleans');
      }
      if (req.data.true !== true) {
        return req.reject('req.data.true `' + req.data.true + '` should be true');
      }
      if (req.data.false !== false) {
        return req.reject('req.data.false `' + req.data.false + '` should be false');
      }

      req.resolve({ok: true});
    }
  ],
  date: [
    {
      input: {
        date: {
          type: 'date'
        }
      }
    },
    function(req) {

      if (!_.isDate(req.data.date)) {
        return req.reject(req.data.date + ' should be a date');
      }

      if (req.data.date.toString() !== new Date(2009,07,11).toString()) {
        return req.reject(req.data.date + ' should equal `' + new Date(2009,07,11) + '`');
      }

      req.resolve({ok: true});
    }
  ],
  float: [
    {
      input: {
        float: {
          type: 'float'
        }
      }
    },
    function(req) {
      if (!_.isNumber(req.data.float)) {
        return req.reject(req.data.float + ' should be a number (float)');
      }
      if (req.data.float !== 4.2) {
        return req.reject(req.data.float + ' should equal 4.2');
      }

      req.resolve({ok: true});
    }
  ],
  integer: [
    {
      input: {
        integer: {
          type: 'integer'
        }
      }
    },
    function(req) {
      if (!_.isNumber(req.data.integer)) {
        return req.reject(req.data.integer + ' should be a number (integer)');
      }
      if (req.data.integer !== 10) {
        return req.reject(req.data.integer + ' should equal 10');
      }

      req.resolve({ok: true});
    }
  ],
  binary: [
    {
      input: {
        binary: {
          type: 'binary'
        }
      }
    },
    function(req) {
      if (!_.isBuffer(req.data.binary)) {
        return req.reject(req.data.binary + ' should be a buffer');
      }
      if (req.data.binary.toString() !== 'i am a buffer') {
        return req.reject('req.data.binary.toString() `' + req.data.binary.toString() + '` should equal "i am a buffer"');
      }

      req.resolve({ok: true});
    }
  ]
});

firstApp.route('get', {
  string: [
    {},
    function(req) {
      return req.resolve({response: 'wubba lubba dub dub !'});
    }
  ],
  float: [
    {},
    function(req) {
      return req.resolve({response: 7.32});
    }
  ],
  date: [
    {},
    function(req) {
      return req.resolve({response: new Date(1998,05,10)});
    }
  ],
  buffer: [
    {},
    function(req) {
      return req.resolve({response : new Buffer('I am a buffer and i love it!')});
    }
  ],
  boolean: [
    {},
    function(req) {
      return req.resolve({response: true});
    }
  ]
});

firstApp.listen(8050);