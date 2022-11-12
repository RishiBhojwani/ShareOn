import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SignUpScreen from './src/screens/SignUp';
import HomeScreen from './src/screens/Home';
import ProjectionScreen from './src/screens/Projections';
import RecommendationScreen from './src/screens/Recommendation';
import RiskScreen from './src/screens/Risk';


const Stack = createStackNavigator();

const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Sign Up">
      <Stack.Screen
            name={"Sign Up"}
            component={SignUpScreen}
            options={{
              headerShown: false,
            }}
          />
      <Stack.Screen
            name={"Home"}
            component={HomeScreen}
            options={{
              headerShown: false,
            }}
          />
      <Stack.Screen
            name={"Risk"}
            component={RiskScreen}
            options={{
              headerShown: false,
            }}
          />
      <Stack.Screen
            name={"Projection"}
            component={ProjectionScreen}
            options={{
              headerShown: false,
            }}
          />   
      <Stack.Screen
            name={"Recommendation"}
            component={RecommendationScreen}
            options={{
              headerShown: false,
            }}
          />                
    </Stack.Navigator>
    </NavigationContainer>
  );

};

export default App;