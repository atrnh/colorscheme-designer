import React from 'react';
import { StyleSheet, css } from 'aphrodite';

export default ({ styles, text, ...props }) => (
  <section
    className={css(sectionStyle.prev)}
    {...props}
  >
    {styles.map((style, i) => (
      <p
        key={i}
        className={css(style)}
      >
        {text}
      </p>
    ))}
  </section>
);

const sectionStyle = StyleSheet.create({
  prev: {
    margin: '0 1.25em',
  }
})
