import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import ReadScreen from './screens/ReadScreen';
import WriteScreen from './screens/WriteScreen';
import {createAppContainer,createSwitchNavigator} from 'react-navigation';

export default class App extends React.Component{
  render(){
  return (
 <View>
   
<AppContainer/>

 </View>
   
  );
  }
}
var AppNavigator=createSwitchNavigator({
  HomeScreen:HomeScreen,
  ReadScreen:ReadScreen,
  WriteScreen:WriteScreen
})
const AppContainer=createAppContainer(AppNavigator)






