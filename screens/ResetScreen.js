import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  ImageBackground,
  ScrollView,
} from 'react-native';
import firebase from 'firebase';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons } from '@expo/vector-icons';

export default class Reset extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require('../assets/loginScreen.png')}
          style={styles.backgroundImage}>
          <ScrollView>
            <Text
              style={{
                fontSize: 24,
                fontWeight: 'bold',
                fontFamily: 'Verdana',
                marginTop: '15%',
                marginLeft: '10%',
              }}>
              Reset Password
            </Text>
            <View
              style={{
                flexDirection: 'row',
                borderBottomWidth: 1,
                borderBottomColor: '#4700b3',
                width: '80%',
                alignSelf: 'center',
                height: 40,
                alignItems: 'center',
                marginTop: 20,
              }}>
              <MaterialIcons name="email" size={24} color="#4700b3" />
              <TextInput
                style={{
                  width: '90%',
                  height: 40,
                  paddingLeft: 20,
                  fontFamily: 'Verdana',
                }}
                placeholder="enter email"
                onChangeText={(text) => {
                  this.setState({ email: text });
                }}
              />
            </View>

            <View
              style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
              <Text
                onPress={() => {
                  this.props.navigation.replace('Login');
                }}
                style={{
                  marginTop: 20,
                  marginLeft: '10%',
                  fontFamily: 'Verdana',
                  color: '#4700b3',
                  fontWeight: 'bold',
                }}>
                Back
              </Text> 
              <TouchableOpacity
                onPress={() => {
                  if(this.state.email){
                    firebase.auth().sendPasswordResetEmail(email)
                    .then(() => {
                      Alert.alert('password reset email sent!');

                    })
                    .catch((error) => {
                      var errorCode = error.code;
                      var errorMessage = error.message;
                    alert(errorMessage)
                      
                    });
                  } else {
                    alert('Please enter a valid email')
                  }
                }}
                style={{
                  borderRadius: 20,
                  backgroundColor: '#4700b3',
                  height: 40,
                  width: '40%',
                  justifyContent: 'center',
                  marginTop: 10,
                }}>
                <LinearGradient
                  colors={['#4700b3', '#c299ff']}
                  start={{ x: 0.5, y: 0.5 }}
                  style={{
                    flex: 1,
                    borderRadius: 20,
                    justifyContent: 'center',
                  }}>
                  <Text
                    style={{
                      color: 'white',
                      textAlign: 'center',
                      fontWeight: 'bold',
                      fontFamily: 'Verdana',
                    }}>
                    Send Reset Email
                  </Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    width: '80%',
    height: 40,
    borderRadius: 6,
    marginTop: 30,
    marginLeft: '10%',
    borderColor: '#4700b3',
    borderWidth: 2,
  },
  button: {
    width: '50%',
    height: 40,
    padding: 5,
    borderRadius: 5,
    marginTop: 20,
    marginLeft: 30,
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
  },
});
