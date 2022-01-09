import React from 'react';
import {  Text, View , Image, TouchableOpacity,ScrollView} from 'react-native';
import workout from '../workout'
import Timeline from 'react-native-timeline-flatlist';
import { AntDesign } from '@expo/vector-icons';

export default class Detail extends React.Component {
  constructor(){
    super()
    this.state={
      workout:[]
    }
  }
  componentDidMount(){
    var sc = this.props.route.params.selectedCategory; 
    var name = this.props.route.params.workoutName;
 

    var w = workout.filter((d)=>{
      return d.category === sc && d.name === name
    })
    this.setState({workout:w})
  }
  render() {
    return (
      <View style={{flex:1, backgroundColor: 'lavender'}}>
      <ScrollView>
        {this.state.workout.map((a)=>{
          return(
            <View>
            <TouchableOpacity style={{backgroundColor: 'rgba(185,185,185,0.5)', width:50, height: 50, justifyContent: 'center', alignItems: 'center', borderRadius: 10, left: '5%', marginTop: '10%'}} onPress={()=>{this.props.navigation.navigate('Workout Category')}}>
        <AntDesign name="back" size={24} color="black" />
        </TouchableOpacity>
            <Image style={{width:'100%', height:150, resizeMode:'contain' }} source={{uri:a.image1}}/>
            <Text style={{fontFamily: 'Verdana', color: '#4700b3', marginTop: '10%', textAlign: 'center', fontWeight: 'bold', fontSize: 20}}>{a.category}</Text>
            <Text style={{fontFamily: 'Verdana', color: '#4700b3', marginTop: '10%', textAlign: 'center', fontWeight: 'bold', fontSize: 15}}>{a.name}</Text>
               <Timeline data={a.description}
        circleSize={20}
        circleColor='rgb(45,156,219)' lineColor='rgb(45,156,219)'
        timeContainerStyle={{ minWidth: 52, marginTop: 10 }}
        titleStyle={{color:'green', fontFamily: 'Verdana'}}
        timeStyle= 
        {{
          textAlign: 'center',
          backgroundColor: '#4d4dff',
          color: '#4d4dff',
          padding: 5,
          borderRadius: 13,
        }}
        descriptionStyle={{ color: '#4700b3', fontFamily: 'Verdana' }}
        options=
        {{
          style: { paddingTop: 5},
        }}
        innerCircle={'dot'}
       />

            </View>
          )

        })}
        </ScrollView>    

      </View>
    );
  }
}
