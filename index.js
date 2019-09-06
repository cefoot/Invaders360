import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  VrButton,
  Environment,
} from 'react-360';
import ModelView from './test3d';

export default class Invaders360 extends React.Component {
  state = {
    count: 0,
    rot: 0
  };
  _increment = () => {
    this.setState({ count: this.state.count + 1 });
  }
  _rotate = () => {
    this.setState({ rot: this.state.rot + 1 });
  }

  componentDidMount() {
    setInterval(this._rotate, 30);//autostart counter
  }

  render() {
    return (
      <View style={{
        left: this.state.rot,
        top: '600px',
        backgroundColor: 'rgba(50, 255, 50, 0.4)',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <VrButton onClick={this._increment}
          style={styles.box}>
          <Text style={styles.menuItem}>
            {`Push me`}
          </Text>
        </VrButton>
        <View style={{
          transform: [
            // { rotateZ: this.state.rot },
            { rotateY: 120 + this.state.rot * 2 },
            // { rotateX: 240 + this.state.rot },
          ]
        }}>
          <Text style={styles.menuItem}>
            {`Count: ${this.state.count}`}
          </Text>
        </View>
      </View>
    );
  }
}

export class InvaderComponent extends React.Component {
  state = {
    dummy: 1,
  };
  render() {
    return (
      <View style={styles.fillPanel}>
        <VrButton
          style={styles.box}>
          <Text style={styles.txt}>
            {`Lorema Ipsum`}
          </Text>
        </VrButton>
        <View style={styles.box} >
          <Text style={styles.txt}>
            {`BLABLA`}
          </Text>
        </View>
      </View>
    );
  }
}






const styles = StyleSheet.create({
  fillPanel: {
    // Fill the entire surface
    width: '4096',
    height: '800',
    backgroundColor: 'rgba(255, 120, 120, 0.4)',
    // justifyContent: 'center',
    // alignItems: 'center',
    // transform: [
    //   {rotateZ: 100},
    // ],
  },
  panel: {
    left: '100px',
    backgroundColor: 'rgba(50, 255, 50, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    padding: 10,
    backgroundColor: '#000000',
    borderColor: '#639dda',
    borderWidth: 2,
  },
  menuItem: {
    fontSize: 30,
  },
  txt: {
    fontSize: 30,
  },
});

AppRegistry.registerComponent('Invaders360', () => Invaders360);
AppRegistry.registerComponent('InvaderComponent', () => InvaderComponent);
AppRegistry.registerComponent('ModelView', () => ModelView);
