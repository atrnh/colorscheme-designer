import React from 'react';
import { StyleSheet, css } from 'aphrodite';

class ColorButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      colorText: props.color.hex
    };

    this.copyColor = this.copyColor.bind(this);
  }

  copyColor(text) {
    navigator.clipboard.writeText(text)
      .then(() => {
        this.setState({ colorText: 'copied!' });
        setTimeout(
          () => this.setState({ colorText: this.props.color.hex }),
          800
        );
      });
  }

  render() {
    const { label, color, ...props } = this.props;
    const { colorText } = this.state;

    return (
      <button
        className={css( styles.btn )}
        {...props}
      >
        <div>
          {label}
        </div>

        <div
          onClick={() => this.copyColor(color.hex)}
          type="text"
          className={css(styles.colorCode)}
          style={{
            background: color.hex,
            color: color.hsl.l > 0.75 ? 'black' : 'white'
          }}
        >
          {colorText}
        </div>
      </button>
    );
  }
}

const styles = StyleSheet.create({
  btn: {
    borderStyle: 'solid',
    borderWidth: '1px',
    display: 'flex',
    fontSize: '0.7rem',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '2px',
    padding: '2px',
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

export default ColorButton;
