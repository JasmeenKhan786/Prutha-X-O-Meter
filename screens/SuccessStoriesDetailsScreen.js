import React from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default class SuccessStoriesDetails extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'lavender' }}>
      <ScrollView contentContainerStyle={{flex:1}}>

          <Image
            source={{ uri: this.props.route.params.story.image }}
            style={{ width: '100%', height: 250, resizeMode: 'cover' }}
          />


          <View
            style={{
              flex: 1,
              position: 'absolute',
              alignSelf: 'center',
            }}>

            <TouchableOpacity
              style={{
                backgroundColor: 'rgba(185,185,185,0.5)',
                width: 50,
                height: 50,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 10,
                left: '5%',
                marginTop: '10%',
              }}
              onPress={() => {
                this.props.navigation.navigate('Success Stories');
              }}>
              <AntDesign name="back" size={24} color="black" />
            </TouchableOpacity>
            <ScrollView>

            <View
              style={{
                backgroundColor: 'white', 
                width: '90%',
                marginVertical: '20%',
                flex:1,
                alignSelf: 'center',
                borderRadius: 20,
                padding: 10,
              }}>
              <Text
                style={{ fontSize: 22, fontWeight: 'bold', marginLeft: '5%' }}>
                {this.props.route.params.story.title}
              </Text>

              <Text  style={{ marginLeft: '5%', fontSize: 16, marginBottom:20 }}
                >
                {this.props.route.params.story.description}
              </Text>
            </View>
            </ScrollView>

          </View>
        </ScrollView>

      </View>

    );
  }
}
