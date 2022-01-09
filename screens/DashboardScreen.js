import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
// map and scrollview
//flatlist
export default class Dashboard extends React.Component {
  constructor() {
    super();
    this.state = {
      workout: [],
    };
  }

  getData = () => {
    //     var resp = workouts.map((d)=>{
    //       return d.category
    //     })
    // this.setState({workout:resp})
  };
  componentDidMount() {
    this.getData();
  }
  render() {
    return (
      <View style={styles.container}>
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
                marginTop: '15%',
              }}>
              Trainings for any Difficulty Level
            </Text>
            <Image
              source={require('../assets/logo1.png')}
              style={{
                borderRadius: 20,
                width: 40,
                height: 40,
                marginTop: '5%',
              }}
            />
          </View> 
          <View
            style={styles.view}>
            <TouchableOpacity
              style={{ borderRadius: 20, width: 150, height: 150,borderColor: '#4700b3', borderWidth: 1 , backgroundColor:'rgba(13,13,13,0.1)'}}
              onPress={() => {
                this.props.navigation.navigate('Workout Category', {
                  selectedCategory: 'Leg Workout',
                });
              }}>
              <ImageBackground
                style={styles.backgroundImage}
                source={{
                  uri: 'https://firebasestorage.googleapis.com/v0/b/exercise-app-c0408.appspot.com/o/leg_workout.png?alt=media&token=f11e1815-b893-4103-8e74-fbbf0b261af3',
                }}>
                <Text style={styles.buttonText}>Leg</Text>
              </ImageBackground>
            </TouchableOpacity>  
            <TouchableOpacity
              style={{ borderRadius: 20, width: 150, height: 150,borderColor: '#4700b3', borderWidth: 1, backgroundColor:'rgba(13,13,13,0.1)' }}
              onPress={() => { 
                this.props.navigation.navigate('Workout Category', {  
                  selectedCategory: 'Arm Workout', 
                });
              }}>
              <ImageBackground 
                style={styles.backgroundImage}
                source={{
                  uri: 'https://firebasestorage.googleapis.com/v0/b/exercise-app-c0408.appspot.com/o/arm_workout.png?alt=media&token=f8903e79-362f-4ef4-b14a-cc366821d052',
                }}>
                <Text style={styles.buttonText}>Arm</Text> 
              </ImageBackground>
            </TouchableOpacity>
          </View>

          <View 
            style={styles.view}>
            <TouchableOpacity
              style={{ borderRadius: 20, width: 150, height: 150, borderColor: '#4700b3', borderWidth: 1, backgroundColor:'rgba(13,13,13,0.1)' }}
              onPress={() => {
                this.props.navigation.navigate('Workout Category', {
                  selectedCategory: 'Core Workout',
                });
              }}>
              <ImageBackground
                style={styles.backgroundImage}
                source={{
                  uri: 'https://firebasestorage.googleapis.com/v0/b/exercise-app-c0408.appspot.com/o/core_workout.png?alt=media&token=0358b109-b11c-44d9-8f55-298f5eef2ce5',
                }}>
                <Text style={styles.buttonText}>Core</Text>
              </ImageBackground>
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={()=>{this.props.navigation.navigate('CreateWorkout')}}>
          <Image
          source={require('../assets/1.png')}
          style={{ 
            marginTop: '15%',
            width: '90%',
            height: 200,
            borderRadius: 10,
            alignSelf: 'center',
          }}
        />
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{this.props.navigation.navigate('SuccessStories')}}>
          <Image
          source={require('../assets/2.png')}
          style={{ 
            marginTop: '15%',
            width: '90%',
            height: 200,
            borderRadius: 10,
            alignSelf: 'center',
          }}
        />
        </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    justifyContent: 'center',
    backgroundColor: 'lavender',
  },
  backgroundImage: {
    width: 150,
    height: 150,
    overflow: 'hidden',
    borderRadius: 20,
  },
  buttonText: {
    fontWeight: 'bold',
    fontFamily: 'Verdana',
    fontSize: 12,
    marginHorizontal: 5,
    marginTop: 10,
    color: 'black',
  },
  text: {
    color: '#4700b3',
    fontFamily: 'Verdana',
  },
  button: {
    borderRadius: 20,
    backgroundColor: '#e6ccff',
    padding: 5,
  },
  view: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 30,
  },
});
