require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"react-summernote":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _summernote = require('summernote');

var _summernote2 = _interopRequireDefault(_summernote);

var _classname = require('classname');

var _classname2 = _interopRequireDefault(_classname);

var Summernote = (function (_React$Component) {
    _inherits(Summernote, _React$Component);

    function Summernote() {
        _classCallCheck(this, Summernote);

        _get(Object.getPrototypeOf(Summernote.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(Summernote, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            this.setState({ id: new Date().getTime() });
            (0, _jquery2['default'])(this.state.id).summernote();
        }
    }, {
        key: 'componentWillUnMount',
        value: function componentWillUnMount() {
            (0, _jquery2['default'])(this.state.id).summernote('destroy');
        }
    }, {
        key: 'render',
        value: function render() {
            var id = this.state.id;

            return _react2['default'].createElement('div', { className: (0, _classname2['default'])('summernote', id, 'summernote-' + id) });
        }
    }]);

    return Summernote;
})(_react2['default'].Component);

exports['default'] = Summernote;
module.exports = exports['default'];

},{"classname":undefined,"jquery":undefined,"react":undefined,"react-dom":undefined,"summernote":undefined}]},{},[])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvbW9yZ2FuaGVpbWJlY2svRG9jdW1lbnRzL1Zpc3VhbF9TdHVkaW9fMjAxNS9mb3Jrcy9yZWFjdC1zdW1tZXJub3RlL3NyYy9SZWFjdC1TdW1tZXJub3RlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztxQkNBa0IsT0FBTzs7Ozt3QkFDSixXQUFXOzs7O3NCQUNsQixRQUFROzs7OzBCQUNILFlBQVk7Ozs7eUJBQ2hCLFdBQVc7Ozs7SUFFTCxVQUFVO2NBQVYsVUFBVTs7YUFBVixVQUFVOzhCQUFWLFVBQVU7O21DQUFWLFVBQVU7OztpQkFBVixVQUFVOztlQUNULDhCQUFHO0FBQ2pCLGdCQUFJLENBQUMsUUFBUSxDQUFDLEVBQUMsRUFBRSxFQUFFLEFBQUMsSUFBSSxJQUFJLEVBQUEsQ0FBRSxPQUFPLEVBQUUsRUFBQyxDQUFDLENBQUE7QUFDekMscUNBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxVQUFVLEVBQUUsQ0FBQztTQUNqQzs7O2VBQ21CLGdDQUFHO0FBQ25CLHFDQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQzFDOzs7ZUFDSyxrQkFBRztnQkFDRSxFQUFFLEdBQUksSUFBSSxDQUFDLEtBQUssQ0FBaEIsRUFBRTs7QUFDVCxtQkFBUSwwQ0FBSyxTQUFTLEVBQUUsNEJBQUcsWUFBWSxFQUFDLEVBQUUsRUFBQyxhQUFhLEdBQUMsRUFBRSxDQUFDLEFBQUMsR0FBTyxDQUFFO1NBQ3pFOzs7V0FYZ0IsVUFBVTtHQUFTLG1CQUFNLFNBQVM7O3FCQUFsQyxVQUFVIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgU3VtbWVyIGZyb20gJ3N1bW1lcm5vdGUnO1xuaW1wb3J0IGN4IGZyb20gJ2NsYXNzbmFtZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN1bW1lcm5vdGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7aWQ6IChuZXcgRGF0ZSkuZ2V0VGltZSgpfSlcbiAgICAgICAgJCh0aGlzLnN0YXRlLmlkKS5zdW1tZXJub3RlKCk7XG4gICAgfVxuICAgIGNvbXBvbmVudFdpbGxVbk1vdW50KCkge1xuICAgICAgICAkKHRoaXMuc3RhdGUuaWQpLnN1bW1lcm5vdGUoJ2Rlc3Ryb3knKTtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7aWR9ID0gdGhpcy5zdGF0ZTtcbiAgICAgICAgcmV0dXJuICg8ZGl2IGNsYXNzTmFtZT17Y3goJ3N1bW1lcm5vdGUnLGlkLCdzdW1tZXJub3RlLScraWQpfT48L2Rpdj4pO1xuICAgIH1cbn1cbiJdfQ==
