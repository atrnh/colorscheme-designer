import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { SketchPicker } from 'react-color';

export default ({
  prevText,
  onPrevTextChange,
  color,
  onColorChange,
  onAddBox,
  ...props
}) => (
  <aside
    className={css([ styles.sidebar ])}
    {...props}
  >
    <section className={css(styles.section)}>
      <fieldset className={css(styles.inputGroup)}>
        <button
          className={css([ styles.customInput, styles.inputText ])}
          onClick={onAddBox}
        >
          {`✨`} add color
        </button>
      </fieldset>

      <fieldset className={css(styles.inputGroup)}>
        <label className={css(styles.inputText)} htmlFor="dText">
          Edit preview text
        </label>
        <input
          id="dText"
          className={css(styles.customInput)}
          type="text"
          value={prevText}
          onChange={onPrevTextChange}
        />
      </fieldset>

      <fieldset className={css(styles.inputGroup)}>
        <SketchPicker
          color={color}
          onChange={onColorChange}
        />
      </fieldset>
    </section>
  </aside>
);

const styles = StyleSheet.create({
  sidebar: {
    margin: '1rem',
    display: 'flex',
    fontSize: '0.9rem',
    paddingBottom: '5px',
    alignItems: 'baseline',
    flexDirection: 'column'
  },

  section: {
    margin: '0 10px',
    minWidth: '100%'
  },

  inputGroup: {
    display: 'flex',
    flexDirection: 'column',
    margin: '20px 0'
  },

  customInput: {
    borderWidth: '2px 2px 5px 5px',
    borderColor: 'black',
    borderStyle: 'solid',
    background: 'transparent',
    padding: '5px'
  },

  inputText: {
    color: '#ff00a2'
  }
});
