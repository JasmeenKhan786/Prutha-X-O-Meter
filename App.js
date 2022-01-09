import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import MainStack from './navigation/navigation'
 
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";

let customFonts = {
  "Verdana": require("./assets/verdana.ttf"),
};


export default class App extends React.Component {
  constructor(props) {
    super(props); 
    this.state = {
      fontsLoaded: false
    };
  }

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() { 
    this._loadFontsAsync();
  }


  render(){ 
    if(!this.state.fontsLoaded){
      return <AppLoading />;

    }
    else{
  return (
   <NavigationContainer>
        <MainStack/>  
   </NavigationContainer>
  ); 
    }
  }
} 
  