import "react-native-gesture-handler";
import React from "react";
import Transitioning from "react-native-reanimated"
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./src/screens/HomeScreen";
import DetailsScreen from "./src/screens/DetailsScreen";
import OnBoardScreen from "./src/screens/OnBoardScreen";
// import ChallengeOne from "./src/screens/ChallengeOne";
import ProductsScreen from "./src/screens/ProductsScreen";
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* <Stack.Screen name="ChallengeOne" component={ChallengeOne} /> */}
        <Stack.Screen name="Products Screen" component={ProductsScreen}/>
        <Stack.Screen name="OnBoardScreen" component={OnBoardScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
