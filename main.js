import Exponent from 'exponent';
import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
} from 'react-native';

// This needs to be imported in main.js, or wherever you call
// Exponent.registerRootComponent. It adds a hook at the top
// level of your app so it can show the modal above everything.
import Modal from 'react-native-root-modal';

class LoadingOverlay extends React.Component {
  render() {
    return (
      <Modal style={modalStyles.container} visible={this.props.isVisible}>
        <ActivityIndicator size="large" color="#fff" />
      </Modal>
    );
  }
}

const modalStyles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    bottom: 0,
    justifyContent: 'center',
    left: 0,
    right: 0,
    top: 0,
  },
});

class App extends React.Component {
  state = {
    modalIsVisible: false,
  }

  _showModal = () => {
    this.setState({modalIsVisible: true});
    setTimeout(() => {
      this.setState({modalIsVisible: false});
    }, 2000);
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          onPress={this._showModal}>
          <Text>Open up modal!</Text>
        </TouchableOpacity>

        <LoadingOverlay isVisible={this.state.modalIsVisible} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    padding: 15,
    backgroundColor: '#eee',
  }
});

Exponent.registerRootComponent(App);
