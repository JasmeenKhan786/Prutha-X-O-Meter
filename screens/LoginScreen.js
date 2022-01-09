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
import { Feather } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

export default class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
  }
  login = (email, password) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        alert('successfully logged in');
        this.props.navigation.replace('Dashboard')
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        return Alert.alert(errorMessage);
      });
  };
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
              Login
            </Text>

            <View
              style={{
                width: '80%',
                paddingVertical: 30,
                backgroundColor: 'white',
                borderRadius: 10,
                alignSelf: 'center',
                marginTop: 80,
                elevation: 10,
                shadowOffset: {
                  width: 2,
                  height: 2,
                },
                shadowOpacity: 0.5,
                shadowRadius: 4,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  borderBottomWidth: 1,
                  borderBottomColor: '#4700b3',
                  width: '80%',
                  alignSelf: 'center',
                  height: 40,
                  alignItems: 'center',
                }}>
                <Feather name="user" size={24} color="#4700b3" />
                <TextInput
                  style={{
                    width: '90%',
                    height: 40,
                    paddingLeft: 20,
                    fontFamily: 'Verdana',
                  }}
                  placeholder="Email"
                  onChangeText={(text) => {
                    this.setState({ email: text });
                  }}
                />
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  borderBottomWidth: 1,
                  borderBottomColor: '#4700b3',
                  width: '80%',
                  alignSelf: 'center',
                  marginTop: 20,
                  height: 40,
                  alignItems: 'center',
                }}>
                <Entypo name="key" size={24} color="#4700b3" />
                <TextInput
                  style={{
                    width: '90%',
                    height: 40,
                    paddingLeft: 20,
                    fontFamily: 'Verdana',
                  }}
                  placeholder="Password"
                  secureTextEntry={true}
                  onChangeText={(text) => {
                    this.setState({ password: text });
                  }}
                />
              </View>
            </View>

            <View
              style={{
                flexDirection: 'row',
                width: '100%',
                marginTop: 30,
                justifyContent: 'space-around'
              }}>
              <Text style={{ marginTop: 20, marginLeft: '10%', fontFamily: 'Verdana', color: '#4700b3', fontWeight: 'bold' }} onPress={()=>{
              this.props.navigation.replace('Reset')
            }}>
                Forgot Password?
              </Text>
              <TouchableOpacity
                onPress={() => {
                  if (this.state.email && this.state.password) {
                    this.login(this.state.email, this.state.password);
                  } else {
                    alert('Please fill all the details!');
                  }
                }}
                style={{
                  borderRadius: 20,
                  backgroundColor: '#4700b3',
                  height: 40,
                  width: '40%',
                  justifyContent: 'center',
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
                    }}>
                    LOGIN
                  </Text>
                </LinearGradient>
              </TouchableOpacity> 
            </View>

            <Text
            onPress={()=>{
              this.props.navigation.replace('SignUp')
            }}
              style={{
                fontSize: 25,
                fontWeight: 'bold',
                alignSelf: 'flex-end',
                marginRight: '10%',
                marginTop: 150,
                fontFamily: 'Verdana'
              }}>
              Sign Up
            </Text>
          </ScrollView>
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
  textInput: {
    width: 250,
    height: 40,
    borderColor: '#000099',
    borderWidth: 2,
    borderRadius: 20,
    textAlign: 'center',
  },
  button: {
    width: 250,
    height: 40,
    borderColor: '#000099',
    borderWidth: 2,
    borderRadius: 20,
    backgroundColor: '#000080',
    marginTop: 30,
    alignSelf: 'center',
  },
  buttonText: {
    color: 'black',
    textAlign: 'center',
    padding: 9,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
});
