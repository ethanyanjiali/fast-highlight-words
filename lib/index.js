'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Highlighter = function (_PureComponent) {
  _inherits(Highlighter, _PureComponent);

  function Highlighter() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Highlighter);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Highlighter.__proto__ || Object.getPrototypeOf(Highlighter)).call.apply(_ref, [this].concat(args))), _this), _this.findOccurrences = function (haystack, needle) {
      var _this$props$caseSensi = _this.props.caseSensitive,
          caseSensitive = _this$props$caseSensi === undefined ? false : _this$props$caseSensi;

      if (!caseSensitive) {
        haystack = haystack.toUpperCase();
        needle = needle.toUpperCase();
      }
      var indexes = [];
      var index = 0;
      if (!haystack || !needle || haystack.length === 0 || needle.length === 0) {
        return indexes;
      }
      while (index < haystack.length) {
        index = haystack.indexOf(needle, index);
        if (index === -1) {
          break;
        }
        indexes.push(index);
        index += 1;
      }
      return indexes;
    }, _this.buildChunks = function (occurrences) {
      var _this$props = _this.props,
          _this$props$text = _this$props.text,
          text = _this$props$text === undefined ? '' : _this$props$text,
          _this$props$highlight = _this$props.highlightText,
          highlightText = _this$props$highlight === undefined ? '' : _this$props$highlight,
          _this$props$highlight2 = _this$props.highlightClassName,
          highlightClassName = _this$props$highlight2 === undefined ? 'highlighted' : _this$props$highlight2,
          _this$props$highlight3 = _this$props.highlightTag,
          highlightTag = _this$props$highlight3 === undefined ? 'mark' : _this$props$highlight3;

      var textIndex = 0;
      var occurrencesIndex = 0;
      var result = [];
      var HighlighTag = highlightTag;
      while (textIndex < text.length && occurrencesIndex < occurrences.length) {
        result.push(_react2.default.createElement(
          'span',
          { key: 'plain' + occurrencesIndex },
          text.substring(textIndex, occurrences[occurrencesIndex])
        ));
        result.push(_react2.default.createElement(
          HighlighTag,
          { className: '' + highlightClassName, key: 'highlighted' + occurrencesIndex },
          text.substring(occurrences[occurrencesIndex], occurrences[occurrencesIndex] + highlightText.length)
        ));
        textIndex = occurrences[occurrencesIndex] + highlightText.length;
        occurrencesIndex += 1;
      }
      if (textIndex < text.length) {
        result.push(_react2.default.createElement(
          'span',
          { key: 'plain-ending' },
          text.substring(textIndex, text.length)
        ));
      }
      return result;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Highlighter, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          _props$text = _props.text,
          text = _props$text === undefined ? '' : _props$text,
          _props$highlightText = _props.highlightText,
          highlightText = _props$highlightText === undefined ? '' : _props$highlightText;

      var occurrences = this.findOccurrences(text, highlightText);
      if (occurrences.length === 0) {
        return _react2.default.createElement(
          'span',
          { className: className },
          text
        );
      }
      var chunks = this.buildChunks(occurrences);
      return _react2.default.createElement(
        'span',
        { className: className },
        chunks
      );
    }
  }]);

  return Highlighter;
}(_react.PureComponent);

Highlighter.defaultProps = {
  text: '',
  highlightText: '',
  highlightClassName: 'highlighted',
  caseSensitive: false,
  highlightTag: 'mark',
  className: undefined
};
Highlighter.propTypes = {
  /**
     * The full text to display
     * @default ""
     */
  text: _propTypes2.default.string,

  /**
    * The part of text that needs to be highlighted
    * @default ""
    * @type string
    */
  highlightText: _propTypes2.default.string,

  /**
    * CSS class name applied to highlighted text
    * @default "highlighted"
    */
  highlightClassName: _propTypes2.default.string,

  /**
    * Search should be case sensitive; defaults to false
    * @default false
    */
  caseSensitive: _propTypes2.default.string,

  /**
    * Type of tag to wrap around highlighted matches
    * @default mark
    */
  highlightTag: _propTypes2.default.string,

  /**
    * Custom class name to use on outer span
    * @default NULL
    */
  className: _propTypes2.default.string
};
exports.default = Highlighter;