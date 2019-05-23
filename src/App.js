import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import ColorBox from './components/ColorBox';
import Sidebar from './components/Sidebar';

const layout = StyleSheet.create({
  grid: {
    display: 'grid',
    gridTemplateColumns: '30% 1fr',
    minHeight: '100%'
  },
});

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%'
  },

  colorBoxes: {
    display: 'flex',
    flexWrap: 'wrap'
  },

  ctlText: {
    padding: '5px',
  },
});

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      displayText: 'hi',
      colors: [
        {
          fg: {
            hex: 'white',
            hsl: {
              h: 0,
              s: 0,
              l: 1.0
            }
          },
          bg: {
            hex: 'black',
            hsl: {
              h: 0,
              s: 0,
              l: 0
            }
          }
        }
      ],
      active: {
        key: 0,
        prop: 'fg'
      }
    };

    this.addBox = this.addBox.bind(this);
    this.changeText = this.changeText.bind(this);
    this.activateColor = this.activateColor.bind(this);
    this.onColorChange = this.onColorChange.bind(this);
  }

  addBox() {
    this.setState(({ colors }) => {
      const latest = { ...colors[colors.length - 1] };
      return { colors: [...colors, latest ] };
    });
  }

  changeText(e) {
    this.setState({ displayText: e.target.value });
  }

  activateColor(key, prop) {
    console.log(key, prop);
    this.setState({ active: { key, prop } });
  }

  onColorChange(color, e) {
    this.setState((prevState) => ({
      colors: prevState.colors.map((c, i) => (
        i === prevState.active.key
          ? { ...c, [prevState.active.prop]: color }
          : { ...c }
      ))
    }));
  }

  render() {
    const { displayText, colors, active } = this.state;

    return (
      <div className={css([ layout.grid, styles.bodyFont ])}>
        <Sidebar
          prevText={displayText}
          color={colors[active.key][active.prop]}
          onPrevTextChange={this.changeText}
          onAddBox={this.addBox}
          onColorChange={this.onColorChange}
        />
        <section className={css(layout.section)}>
          <div className={css(styles.colorBoxes)}>
            {this.state.colors.map((color, i) => (
              <ColorBox
                key={i}
                bg={color.bg}
                fg={color.fg}
                previewText={this.state.displayText}
                changeFg={() => this.activateColor(i, 'fg')}
                changeBg={() => this.activateColor(i, 'bg')}
              />
            ))}
          </div>

        </section>
      </div>
    );
  }
}

export default App;
