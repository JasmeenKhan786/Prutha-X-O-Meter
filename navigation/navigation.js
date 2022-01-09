import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import Login from '../screens/LoginScreen'
import SignUp from '../screens/SignUpScreen'
import Dashboard from '../screens/DashboardScreen'
import Loading from '../screens/LoadingScreen'
import Profile from '../screens/ProfileScreen'
import Reset from '../screens/ResetScreen'
import CreateWorkout from '../screens/CreateWorkoutScreen'
import Detail from '../screens/DetailScreen'
import SuccessStories from '../screens/SuccessStoriesScreen'
import WorkoutCategory from '../screens/WorkoutCategoryScreen'
import SuccessStoriesDetails from '../screens/SuccessStoriesDetailsScreen'
import { AntDesign } from '@expo/vector-icons';

const screens ={
  Loading:{screen:Loading}, 
  Login:{screen:Login},
  SignUp:{screen:SignUp},
  Dashboard:{screen:Dashboard},
  Profile:{screen:Profile},
  Reset:{screen:Reset},
}

const Stack1 = createStackNavigator();

const WorkoutStack = () => {
  return (
    <Stack1.Navigator screenOptions={{ headerShown: false }}>
      <Stack1.Screen name="Dashboard" component={Dashboard} />
      <Stack1.Screen name="Workout Category" component={WorkoutCategory} />
      <Stack1.Screen name="Detail" component={Detail} />
    </Stack1.Navigator>
  );
}; 
const Stack2 = createStackNavigator();

const SuccessStoryStack = () => {
  return (
    <Stack2.Navigator screenOptions={{ headerShown: false }}>
      <Stack2.Screen name="Success Stories" component={SuccessStories} />
      <Stack2.Screen name="Success Stories Details" component={SuccessStoriesDetails} />
    </Stack2.Navigator>
  );
}; 

const Tab = createMaterialBottomTabNavigator();

const TabContent = () => {
  return (
    <Tab.Navigator
    initialRouteName="Dashboard" 
  activeColor="#4700b3"
  inactiveColor="#bf80ff" 
  labeled={true}
  barStyle={{ backgroundColor: 'lavender', }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName; 

          if (route.name === 'Dashboard') {
            // iconName = focused ? 'home' : 'home-outline';
            return <Ionicons name={'home'} size={20} color={color} />;
          } else if (route.name === 'CreateWorkout') {
            // iconName = focused ? 'information' : 'information-outline'; 
            return <Ionicons name="create" size={20} color={color} />
          } else if (route.name === 'Profile') { 
            // iconName = focused ? 'person-circle' : 'person-circle-outline';
            return <AntDesign name="user" size={20} color={color} />
          } else if (route.name === 'SuccessStories') {
            // iconName = focused ? 'list' : 'list-outline';
            return <MaterialIcons name="auto-stories" size={20} color={color} />
          }

          
        }
      })}>
      <Tab.Screen
        name="Dashboard"
        component={WorkoutStack}
      />
      <Tab.Screen
        name="CreateWorkout" 
        component={CreateWorkout}
      />
      <Tab.Screen
        name="SuccessStories"
        component={SuccessStoryStack}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
      />
    </Tab.Navigator>
  );
};

const Stack = createStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Loading"
        component={Loading}
        options={{ headerShown: false }}
      /> 
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen 
        name="Reset"
        component={Reset}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{ headerShown: false }}
      />
      <Stack.Screen 
        name="Dashboard"
        component={TabContent}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default MainStack;