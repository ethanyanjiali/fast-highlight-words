import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class Highlighter extends PureComponent {
  static defaultProps = {
    text: '',
    highlightText: '',
    highlightClassName: 'highlighted',
    caseSensitive: false,
    highlightTag: 'mark',
    className: undefined,
  }

  static propTypes = {
    /**
       * The full text to display
       * @default ""
       */
    text: PropTypes.string,

    /**
      * The part of text that needs to be highlighted
      * @default ""
      * @type string
      */
    highlightText: PropTypes.string,

    /**
      * CSS class name applied to highlighted text
      * @default "highlighted"
      */
    highlightClassName: PropTypes.string,

    /**
      * Search should be case sensitive; defaults to false
      * @default false
      */
    caseSensitive: PropTypes.bool,

    /**
      * Type of tag to wrap around highlighted matches
      * @default mark
      */
    highlightTag: PropTypes.string,

    /**
      * Custom class name to use on outer span
      * @default NULL
      */
    className: PropTypes.string,
  }

  findOccurrences = (haystack, needle) => {
    const { caseSensitive = false } = this.props;
    if (!caseSensitive) {
      haystack = haystack.toUpperCase();
      needle = needle.toUpperCase();
    }
    const indexes = [];
    let index = 0;
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
  };

  buildChunks = (occurrences) => {
    const {
      text = '', highlightText = '', highlightClassName = 'highlighted', highlightTag = 'mark',
    } = this.props;
    let textIndex = 0;
    let occurrencesIndex = 0;
    const result = [];
    const HighlighTag = highlightTag;
    while (textIndex < text.length && occurrencesIndex < occurrences.length) {
      result.push(<span key={`plain${occurrencesIndex}`}>{text.substring(textIndex, occurrences[occurrencesIndex])}</span>);
      result.push(
        <HighlighTag className={`${highlightClassName}`} key={`highlighted${occurrencesIndex}`}>
          {text.substring(
            occurrences[occurrencesIndex],
            occurrences[occurrencesIndex] + highlightText.length,
          )}
        </HighlighTag>,
      );
      textIndex = occurrences[occurrencesIndex] + highlightText.length;
      occurrencesIndex += 1;
    }
    if (textIndex < text.length) {
      result.push(<span key="plain-ending">{text.substring(textIndex, text.length)}</span>);
    }
    return result;
  };

  render() {
    const { className, text = '', highlightText = '' } = this.props;
    const occurrences = this.findOccurrences(text, highlightText);
    if (occurrences.length === 0) {
      return <span className={className}>{text}</span>;
    }
    const chunks = this.buildChunks(occurrences);
    return <span className={className}>{chunks}</span>;
  }
}
