import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView
} from 'react-native';

import { Avatar } from 'react-native-elements';
import { Entypo } from '@expo/vector-icons';

import firebase from 'firebase';
import db from '../config';
export default class Profile extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      account: '',
      country: '',
      state: '',
      image: '',
      email: firebase.auth().currentUser.email,
      id: '',
    };
  }
  getProfile = async () => {
    var temp = await db
      .collection('users')
      .where('email', '==', this.state.email)
      .get();

    temp.docs.map((doc) => {
      var obj = doc.data();
      this.setState({
        name: obj.name,
        country: obj.country,
        state: obj.state,
        phoneNumber: obj.phoneNumber,
        id: doc.id,
      });
    });
  };

  componentDidMount = () => {
    this.getProfile();
  };
  onSubmit = () => {
    db.collection('users').doc(this.state.id).update({
      name: this.state.name,
      country: this.state.country,
      phoneNumber: this.state.phoneNumber,
      state: this.state.state,
    });
    alert('Change is updated')
  };

  render() {
    return (
      <View style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Profile</Text>
          <TouchableOpacity
            onPress={() => {
              firebase
                .auth()
                .signOut()
                .then(() => {
                  this.props.navigation.replace('Login')
                })
                .catch((error) => {
                  alert('Something went wrong. Please try again later.')
                });
            }}>
            <Entypo name="log-out" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            margin: 10,
          }}>
          <Avatar rounded size="large" source={require('../assets/logo1.png')} />
        </View>
        <Text style={{ paddingLeft: 40, fontWeight: 'bold', color: '#4700b3' }}>
          Name
        </Text>
        <TextInput
          style={{
            borderWidth: 2,
            borderRadius: 10,
            width: '80%',
            alignSelf: 'center',
            height: 30,
            borderColor: '#4700b3',
            paddingLeft: 10,
          }}
          placeholder="Name"
          value={this.state.name}
          onChangeText={(val) => {
            this.setState({ name: val });
          }}
        />

        <Text
          style={{
            paddingLeft: 40,
            fontWeight: 'bold',
            marginTop: 20,
            color: '#4700b3',
          }}>
          Phone Number
        </Text>
        <TextInput
          style={{
            borderWidth: 2,
            borderRadius: 10,
            width: '80%',
            alignSelf: 'center',
            height: 30,
            borderColor: '#4700b3',
            paddingLeft: 10,
          }}
          value={this.state.phoneNumber}
          placeholder="+1 650 879 6758"
          onChangeText={(val) => {
            this.setState({ phoneNumber: val });
          }}
        />

        <Text
          style={{
            paddingLeft: 40,
            fontWeight: 'bold',
            marginTop: 20,
            color: '#4700b3',
          }}>
          Email
        </Text>
        <TextInput
          editable={false}
          style={{
            borderWidth: 2,
            borderRadius: 10,
            width: '80%',
            alignSelf: 'center',
            height: 30,
            borderColor: '#4700b3',
            paddingLeft: 10,
          }}
          value={this.state.email}
          placeholder="johndoe@gmail.com"
        />
        <Text
          style={{
            paddingLeft: 40,
            fontWeight: 'bold',
            marginTop: 20,
            color: '#4700b3',
          }}>
          State
        </Text>
        <TextInput
          style={{
            borderWidth: 2,
            borderRadius: 10,
            width: '80%',
            alignSelf: 'center',
            height: 30,
            borderColor: '#4700b3',
            paddingLeft: 10,
          }}
          value={this.state.state}
          placeholder="California"
          onChangeText={(val) => {
            this.setState({ state: val });
          }}
        />
        <Text
          style={{
            paddingLeft: 40,
            fontWeight: 'bold',
            marginTop: 20,
            color: '#4700b3',
          }}>
          Country
        </Text>
        <TextInput
          style={{
            borderWidth: 2,
            borderRadius: 10,
            width: '80%',
            alignSelf: 'center',
            height: 30,
            borderColor: '#4700b3',
            paddingLeft: 10,
          }}
          value={this.state.country}
          placeholder="United States"
          onChangeText={(val) => {
            this.setState({ country: val });
          }}
        />

        <TouchableOpacity
          style={{
            alignSelf: 'center',
            marginTop: 40,
            borderColor: '#4700b3',
            borderWidth: 2,
            borderRadius: 5,
            width: '40%',
            backgroundColor: '#4700b3',
            padding: 6,
          }}
          onPress={this.onSubmit}>
          <Text
            style={{
              textAlign: 'center',
              color: 'white',
              fontFamily: 'Verdana',
              fontWeight: 'bold',
            }}>
            Confirm
          </Text>
        </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lavender',
  },
  header: {
    width: '100%',
    height: 60,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: '20%',
  },
  headerTitle: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Verdana',
  },
});
