import React from 'react';
import { StyleSheet, css } from 'aphrodite';

export default ({
  label,
  color,
  ...props
}) => {
  return (
    <button
      className={css( styles.btn )}
      {...props}
    >
      <div>
        {label}
      </div>

      <div
        onClick={() => navigator.clipboard.writeText(color.hex)}
        type="text"
        className={css(styles.colorCode)}
        style={{
          background: color.hex,
          color: color.hsl.l > 0.50 ? 'black' : 'white'
        }}
      >
        {color.hex}
      </div>
    </button>
  );
}

const styles = StyleSheet.create({
  btn: {
    borderStyle: 'solid',
    borderWidth: '1px 1px 5px 5px',
    display: 'flex',
    fontSize: '0.7rem',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '2px 0',
    background: '#eee',
    borderColor: 'white'
  },

  colorCode: {
    border: '1px solid #ccc',
    padding: '2px',
    width: '8em',
    fontSize: '10px',
    textAlign: 'center'
  },
})
