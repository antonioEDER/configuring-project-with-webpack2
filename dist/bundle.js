/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Message = function () {
  function Message() {
    var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var created = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Date.now();

    _classCallCheck(this, Message);

    this.text = text;
    this.created = created;
  }

  _createClass(Message, [{
    key: 'toString',
    value: function toString() {
      var created = this.created,
          text = this.text;

      return 'Message created at: ' + created + ' - Text: ' + text;
    }
  }, {
    key: 'created',
    get: function get() {
      return this._created;
    },
    set: function set(created) {
      if (typeof created === 'undefined' || isNaN(created)) {
        throw new Error('Invalid created');
      }
      if (Message.hasOwnProperty.call(this, '_created')) {
        throw new Error('Created already defined');
      }
      this._created = created;
    }
  }], [{
    key: 'newEmptyMessage',
    value: function newEmptyMessage() {
      return new Message();
    }
  }]);

  return Message;
}();

module.exports = Message;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 2 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 3 */
/***/ (function(module, exports) {


    function __html_es6_template_loader__() {
      return "<li class=\"List__Item\">\n    <div class=\"List__Item__Text\">" + this.text + "</div>\n    <div class=\"List__Item__Created\">" + this.created + "</div>\n</li>";
    }
    module.exports = function(context) {
      return __html_es6_template_loader__.call(context, context);
    }
  

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _message = __webpack_require__(0);

var _message2 = _interopRequireDefault(_message);

var _messages = __webpack_require__(3);

var _messages2 = _interopRequireDefault(_messages);

__webpack_require__(1);

__webpack_require__(2);

var _webpack = __webpack_require__(4);

var _webpack2 = _interopRequireDefault(_webpack);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint no-undef: 0 */
document.getElementById('send').onclick = function () {
  var newMessage = document.getElementById('message').value;
  var m = new _message2.default(newMessage);
  document.getElementById('messages').innerHTML += (0, _messages2.default)(m);
};

/* eslint no-undef: 0 */
document.getElementById('logo').src = _webpack2.default;

if (module && module.hot) {
  module.hot.accept();
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)(module)))

/***/ })
/******/ ]);