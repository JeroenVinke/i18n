define(['exports', 'aurelia-dependency-injection'], function (exports, _aureliaDependencyInjection) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var extend = function extend(destination, source) {
    for (var property in source) {
      destination[property] = source[property];
    }return destination;
  };

  exports.extend = extend;
  var assignObjectToKeys = function assignObjectToKeys(root, obj) {
    if (obj === undefined || obj === null) {
      return obj;
    }

    var opts = {};

    Object.keys(obj).map(function (key) {
      if (typeof obj[key] === 'object') {
        extend(opts, assignObjectToKeys(key, obj[key]));
      } else {
        opts[root !== '' ? root + '.' + key : key] = obj[key];
      }
    });

    return opts;
  };

  exports.assignObjectToKeys = assignObjectToKeys;

  var LazyOptional = (function () {
    function LazyOptional(key) {
      _classCallCheck(this, _LazyOptional);

      this.key = key;
    }

    _createClass(LazyOptional, [{
      key: 'get',
      value: function get(container) {
        var _this = this;

        return function () {
          if (container.hasResolver(_this.key, false)) {
            return container.get(_this.key);
          }
          return null;
        };
      }
    }], [{
      key: 'of',
      value: function of(key) {
        return new LazyOptional(key);
      }
    }]);

    var _LazyOptional = LazyOptional;
    LazyOptional = (0, _aureliaDependencyInjection.resolver)()(LazyOptional) || LazyOptional;
    return LazyOptional;
  })();

  exports.LazyOptional = LazyOptional;
});