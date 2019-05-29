import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import PreviewText from './PreviewText';
import ColorButton from './ColorButton';

export default ({
  previewText,
  bg,
  fg,
  changeFg,
  changeBg,
  ...props
}) => {
  return (
    <div
      style={{
        background: bg.hex,
        color: fg.hex
      }}
      className={css(styles.colorBox)}
      {...props}
    >
      <PreviewText
        styles={[
          styles.italic,
          styles.bold,
          styles.normal
        ]}
        text={previewText}
      />
      <section className={css(styles.buttonPanel)}>
        <ColorButton
          label="fg"
          color={fg}
          onClick={changeFg}
        />
        <ColorButton
          label="bg"
          color={bg}
          onClick={changeBg}
        />
      </section>
    </div>
  );
}

const styles = StyleSheet.create({
  colorBox: {
    display: 'grid',
    gridTemplateRows: '2fr 1fr',
    padding: '10px',
    maxHeight: '8em',
    minWidth: '10em'
  },

  buttonPanel: {
    display: 'flex'
  },

  previewText: {
    fontSize: '1.13em',
    margin: '0 20px',
    display: 'flex',
    justifyContent: 'space-evenly',
  },

  italic: {
    fontStyle: 'italic'
  },

  bold: {
    fontWeight: 'bold'
  },

  normal: {
    fontWeight: 'normal'
  },
});
