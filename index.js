import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  VrButton,
} from 'react-360';

// export default class Invaders360 extends React.Component {
//   render() {
//     return (
//       <View style={styles.panel}>
//         <View style={styles.greetingBox}>
//           <Text style={styles.greeting}>
//             Welcome to React 360
//           </Text>
//         </View>
//       </View>
//     );
//   }
// };

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
      <View style={styles.panel}>
        <VrButton onClick={this._increment}
          style={styles.greetingBox}>
          <Text style={styles.greeting}>
            {`Push me`}
          </Text>
        </VrButton>
        <View style={styles.greetingBox} style={{transform: [
            {rotateZ : this.state.rot},
            {rotateY : 120 + this.state.rot},
            {rotateX : 240 + this.state.rot},
            ]}}>
          <Text style={styles.greeting}>
            {`Count: ${this.state.count}`}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  panel: {
    // Fill the entire surface
    width: 1000,
    height: 600,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
    // transform: [
    //   {rotateZ: 100},
    // ],
  },
  greetingBox: {
    padding: 20,
    backgroundColor: '#000000',
    borderColor: '#639dda',
    borderWidth: 2,
  },
  greeting: {
    fontSize: 30,
  },
});

AppRegistry.registerComponent('Invaders360', () => Invaders360);
