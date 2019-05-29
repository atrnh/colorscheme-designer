import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const TextHighlight = ({
  highlightGroup,
  children,
  isActive,
  className,
  ...props
}) => {
  return (
    <code
      {...props}
      className={
        css(isActive && styles.isActive, styles.codeHighlight) + className
      }
    >
      {children}
    </code>
  );
};

const styles = StyleSheet({
  isActive: {
    borderColor: 'pink'
  },
  codeHighlight: {
    padding: '2px',
    background: 'transparent'
  }
});

const hiLink = {
  number: [ 'boolean' ],
  function: [ 'character', 'include' ],
  error: [ 'errorMsg' ],
  special: [ 'debug' ],
  preProc: [ 'define', 'exception', 'macro', 'operator', 'preCondit' ],
  number: [ 'float' ],
  statement: [ 'label', 'repeat' ],
  special: [ 'specialChar', 'specialComment', 'tag' ],
  type: [ 'typeDef' ]
};

TextHighlight.defaultProps = {
  isActive: false
};

TextHighlight.propTypes = {
  highlightGroup: PropTypes.oneOf(Object.keys(hiLink)).isRequired,
  children: PropTypes.node.isRequired,
  isActive: PropTypes.boolean,
};

export default TextHighlight;
