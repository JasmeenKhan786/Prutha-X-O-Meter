import React from 'react';
import { Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import category from '../category';
export default class WorkoutCategory extends React.Component {
  constructor() {
    super();
    this.state = {
      workout: [],
    };
  }
  componentDidMount() {
    var sc = this.props.route.params.selectedCategory;

    var w = category.filter((d) => {
      return d.category === sc;
    });
    this.setState({ workout: w });
  }
  render() {
    return (
      <View style={{backgroundColor: 'lavender', flex: 1}}>
      <ScrollView>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginHorizontal: '5%',
          }}>
          <Text
            style={{
              fontWeight: 'bold',
              fontFamily: 'Verdana', 
              fontSize: 20,
              marginTop: '18%'
            }}>
            Workouts
          </Text>
          <Image
            source={require('../assets/logo.png')}
            style={{ borderRadius: 25, width: 50, height: 50, marginTop: '15%' }}
          />
        </View>
        {this.state.workout.map((d) => {
          return (
            <TouchableOpacity
            key={d.name}
              onPress={() => {
                this.props.navigation.navigate('Detail', {
                  selectedCategory: d.category, 
                  workoutName: d.name,
                });
              }}
              style={{
                width: 300,
                height: 150,
                backgroundColor: '#e6ccff',
                marginTop: 30,
                alignSelf: 'center',
                borderRadius: 20,
              }}>
              <View>
                <Text style={{fontFamily: 'Verdana', fontSize: 15, fontWeight: 'bold', color: '#4700b3', textAlign: 'center',}}>{d.name}</Text>
                <Image
                  source={{
                    uri: d.image1,
                  }}
                  style={{ width: 100, height: 100, resizeMode: 'contain', alignSelf: 'center'}}
                />
              </View>
            </TouchableOpacity>
          );
        })}
        </ScrollView>
      </View>
    );
  }
}
