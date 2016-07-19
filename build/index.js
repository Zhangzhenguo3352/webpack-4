webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(33);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _index = __webpack_require__(172);

	var _index2 = _interopRequireDefault(_index);

	var _prac = __webpack_require__(173);

	var _prac2 = _interopRequireDefault(_prac);

	var _propsDom = __webpack_require__(174);

	var _propsDom2 = _interopRequireDefault(_propsDom);

	var _es5Props = __webpack_require__(175);

	var _es5Props2 = _interopRequireDefault(_es5Props);

	var _es6Props = __webpack_require__(176);

	var _es6Props2 = _interopRequireDefault(_es6Props);

	var _propTypes = __webpack_require__(177);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _ComponentThis = __webpack_require__(178);

	var _ComponentThis2 = _interopRequireDefault(_ComponentThis);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var MyStyle = function (_Component) {
	    _inherits(MyStyle, _Component);

	    function MyStyle() {
	        _classCallCheck(this, MyStyle);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(MyStyle).apply(this, arguments));
	    }

	    _createClass(MyStyle, [{
	        key: 'render',
	        value: function render() {
	            var MyComponentStyle = {
	                color: 'red'
	            };
	            return _react2.default.createElement(
	                'div',
	                { style: MyComponentStyle },
	                'zhang， 文字添加颜色,',
	                _react2.default.createElement(_index2.default, null),
	                ' 这点文字是从：',
	                this.props.aaa,
	                ' ==和 ',
	                this.props.bbb,
	                ' 还用 ',
	                this.props.ccc,
	                _react2.default.createElement(_prac2.default, null),
	                _react2.default.createElement(_propsDom2.default, null),
	                _react2.default.createElement(_es5Props2.default, null),
	                _react2.default.createElement(_es6Props2.default, { title: '第二种，调用组件的时候传递props' }),
	                _react2.default.createElement(_propTypes2.default, { data: true })
	            );
	        }
	    }]);

	    return MyStyle;
	}(_react.Component);

	var obj = {
	    aaa: 111,
	    bbb: 2222,
	    ccc: 3333
	};

		(0, _reactDom.render)(_react2.default.createElement(MyStyle, obj), document.getElementById('app'));

/***/ },

/***/ 172:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var GetOut = function (_Component) {
	    _inherits(GetOut, _Component);

	    function GetOut() {
	        _classCallCheck(this, GetOut);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(GetOut).apply(this, arguments));
	    }

	    _createClass(GetOut, [{
	        key: 'render',
	        value: function render() {
	            var MyStyle = {
	                color: '#399',
	                fontSize: '20px'
	            };
	            return _react2.default.createElement(
	                'div',
	                { style: MyStyle },
	                '从组件过来的文字'
	            );
	        }
	    }]);

	    return GetOut;
	}(_react.Component);

		exports.default = GetOut;

/***/ },

/***/ 173:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var PracState = function (_Component) {
	    _inherits(PracState, _Component);

	    // state 可以写在 constructor(){}

	    function PracState() {
	        _classCallCheck(this, PracState);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(PracState).call(this));

	        {
	            console.log(_this);
	        }
	        _this.state = {
	            setNumber: 2
	        };

	        return _this;
	    }

	    //组件真实 渲染到 浏览器


	    _createClass(PracState, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                null,
	                '练习从 props 传递过来的 被 state 处理的方法，组件',
	                _react2.default.createElement(
	                    'p',
	                    null,
	                    '事件 加加加 ',
	                    this.state.setNumber
	                )
	            );
	        }
	    }]);

	    return PracState;
	}(_react.Component);

		exports.default = PracState;

/***/ },

/***/ 174:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	// 这节对 props练习  (es6)

	var PropsState2 = function (_Component) {
	    _inherits(PropsState2, _Component);

	    function PropsState2() {
	        _classCallCheck(this, PropsState2);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(PropsState2).call(this));

	        {
	            console.log(_this);
	        }
	        _this.state = {
	            setNumber: 2
	        };

	        return _this;
	    }

	    //组件真实 渲染到 浏览器
	    //state = {setNumber:0}

	    _createClass(PropsState2, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                null,
	                '练习从 props 传递过来的 被 state 处理的方法，组件',
	                _react2.default.createElement(
	                    'p',
	                    null,
	                    '模仿父组件的数据传过来的 ： ',
	                    this.props.status
	                ),
	                _react2.default.createElement(
	                    'p',
	                    null,
	                    '数据 ： ',
	                    this.props.status
	                )
	            );
	        }
	    }]);

	    return PropsState2;
	}(_react.Component);

	// 这节对 props练习


	PropsState2.defaultProps = { status: '第一种：初始化的props的设置' };

	exports.default = PropsState2;

/***/ },

/***/ 175:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(1);

	//es5 的写法 props
	var CertificateConnect = React.createClass({
	    displayName: 'CertificateConnect',

	    getDefaultProps: function getDefaultProps() {
	        return {
	            status: 'es5 getDefaultProps:function(){}'
	        };
	    },
	    render: function render() {
	        return React.createElement(
	            'div',
	            null,
	            this.props.status
	        );
	    }

	});

		module.exports = CertificateConnect;

/***/ },

/***/ 176:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var es6Prope2 = function (_Component) {
	    _inherits(es6Prope2, _Component);

	    function es6Prope2(e) {
	        _classCallCheck(this, es6Prope2);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(es6Prope2).call(this, e));

	        console.log(e); // {title: "标题aa2"}
	        _this.state = {
	            title: ''
	        };
	        return _this;
	    }

	    _createClass(es6Prope2, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                null,
	                'es6props2:',
	                this.props.title
	            );
	        }
	    }]);

	    return es6Prope2;
	}(_react.Component);

		exports.default = es6Prope2;

/***/ },

/***/ 177:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	//这页是 为了 效验 propTypes 的属性值得类型，效验可提升开发者体验，用于约定统一的接口规范

	var PropTypes3 = function (_Component) {
	    _inherits(PropTypes3, _Component);

	    function PropTypes3() {
	        _classCallCheck(this, PropTypes3);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(PropTypes3).apply(this, arguments));
	    }

	    _createClass(PropTypes3, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                null,
	                '布尔类型：',
	                this.props.data
	            );
	        }
	    }]);

	    return PropTypes3;
	}(_react.Component);

	PropTypes3.propType = { data: _react2.default.PropTypes.string };
	exports.default = PropTypes3;

/***/ },

/***/ 178:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	//这页是 为了 效验 propTypes 的属性值得类型，效验可提升开发者体验，用于约定统一的接口规范

	var PropTypes4 = function (_Component) {
	    _inherits(PropTypes4, _Component);

	    function PropTypes4() {
	        _classCallCheck(this, PropTypes4);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(PropTypes4).apply(this, arguments));
	    }

	    _createClass(PropTypes4, [{
	        key: 'render',
	        value: function render() {
	            console.log(this);
	            return _react2.default.createElement(
	                'div',
	                null,
	                '布尔类型：',
	                this.props.data
	            );
	        }
	    }]);

	    return PropTypes4;
	}(_react.Component);

		exports.default = PropTypes4;

/***/ }

});
//# sourceMappingURL=index.js.map