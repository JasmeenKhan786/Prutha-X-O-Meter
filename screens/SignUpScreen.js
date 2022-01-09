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
import db from '../config';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

export default class SignUp extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      pwd: '',
      confirmPwd: '',
      state: '',
      country: '',
      phoneNumber: '',
      name: '',
    };
  }
  signup = (emailId, password) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(emailId, password)
      .then((response) => {
        var user = response.user;

        db.collection('users').add({
          email: emailId,
          name: this.state.name,
          state: this.state.state,
          country: this.state.country,
          phoneNumber: this.state.phoneNumber,
        });

        this.props.navigation.replace('Login');
      })
      .catch(function (error) {
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
              Sign Up
            </Text>
            <View
              style={{
                width: '80%',
                paddingVertical: 30,
                backgroundColor: 'white',
                borderRadius: 10,
                alignSelf: 'center',
                marginTop: 40,
                elevation: 10,
                shadowOffset: {
                  width: 2,
                  height: 2,
                },
                shadowOpacity: 0.5,
                shadowRadius: 4,
              }}>
              <View style={styles.view}>
                <Feather name="user" size={24} color="#4700b3" />
                <TextInput
                  style={styles.textInput}
                  placeholder="Email"
                  onChangeText={(text) => {
                    this.setState({ email: text });
                  }}
                />
              </View>

              <View style={styles.view}>
                <MaterialIcons name="verified-user" size={24} color="#4700b3" />
                <TextInput
                  style={styles.textInput}
                  placeholder="Name"
                  onChangeText={(text) => {
                    this.setState({ name: text });
                  }}
                />
              </View>

              <View style={styles.view}>
                <Entypo name="key" size={24} color="#4700b3" />
                <TextInput
                  style={styles.textInput}
                  placeholder="Password"
                  secureTextEntry={true}
                  onChangeText={(text) => {
                    this.setState({ pwd: text });
                  }}
                />
              </View>
              <View style={styles.view}>
                <FontAwesome name="lock" size={24} color="#4700b3" />
                <TextInput
                  style={styles.textInput}
                  placeholder="Confirm Password"
                  secureTextEntry={true}
                  onChangeText={(text) => {
                    this.setState({ confirmPwd: text });
                  }}
                />
              </View>
              <View style={styles.view}>
                <Feather name="map-pin" size={24} color="#4700b3" />
                <TextInput
                  style={styles.textInput}
                  placeholder="State (optional)"
                  onChangeText={(text) => {
                    this.setState({ state: text });
                  }}
                />
              </View>
              <View style={styles.view}>
                <FontAwesome name="map" size={24} color="#4700b3" />
                <TextInput
                  style={styles.textInput}
                  placeholder="Country (optional)"
                  onChangeText={(text) => {
                    this.setState({ country: text });
                  }}
                />
              </View>
              <View style={styles.view}>
                <FontAwesome name="phone" size={24} color="#4700b3" />
                <TextInput
                  style={styles.textInput}
                  placeholder="Phone Number"
                  onChangeText={(text) => {
                    this.setState({ phoneNumber: text });
                  }}
                />
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                width: '100%',
                marginTop: 30,
                justifyContent: 'space-around',
              }}>
              <Text
                style={{
                  marginTop: 20,
                  marginLeft: '10%',
                  fontFamily: 'Verdana',
                  color: '#4700b3',
                  fontWeight: 'bold',
                }}
                onPress={() => {
                  this.props.navigation.replace('Login');
                }}> 
                Back
              </Text>
              <TouchableOpacity
                onPress={() => {
                  if (this.state.email && this.state.pwd && this.state.name && this.state.confirmPwd && this.state.phoneNumber) {
                    if(this.state.pwd===this.state.confirmPwd){
                    this.signup(this.state.email, this.state.pwd);
                    } else{
                      alert("Your passwords don't match")
                    }
                  } else {
                    alert('Please fill all the mandatory details!');
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
                    SIGN UP
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
    flex: 1,
    marginTop: 30,
    justifyContent: 'center',
  },
  textInput: {
    width: '90%',
    height: 40,
    paddingLeft: 20,
    fontFamily: 'Verdana',
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
    color: 'white',
    textAlign: 'center',
    padding: 9,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  view: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#4700b3',
    width: '80%',
    alignSelf: 'center',
    marginTop: 20,
    height: 40,
    alignItems: 'center',
  },
});
