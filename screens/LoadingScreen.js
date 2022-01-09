import React from 'react';
import {
  StyleSheet, 
  View, 
  ActivityIndicator,
  ImageBackground, 
} from 'react-native';
import firebase from 'firebase';

export default class Loading extends React.Component {
  checkIfLoggedIn = () => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.props.navigation.replace('Dashboard');
      } else {
        this.props.navigation.replace('Login');
      }
    });
  };  
  componentDidMount = () => {
    this.checkIfLoggedIn();
  };
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require('../assets/loginScreen.png')}
          style={styles.backgroundImage}>
          <ActivityIndicator size="large" />
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    justifyContent: 'center',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
});
