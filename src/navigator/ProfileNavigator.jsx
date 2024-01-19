import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { StyleSheet } from "react-native";

import Header from "../components/Header";
import ProfileScreen from "../screens/ProfileScreen";
import ImageSelectorScreen from "../screens/ImageSelectorScreen";


const ProfileNavigator = () => {

  const Stack = createNativeStackNavigator();

  return (
  
    <Stack.Navigator
      initialRouteName="Profile"
      screenOptions={
        ({ navigation, route}) => ({
          header: () => <Header title={route.name} navigation={navigation} />
        })
      }
    >

      <Stack.Screen 
        name="Profile"
        component={ProfileScreen}
      />

      <Stack.Screen 
        name="ImageSelector"
        component={ImageSelectorScreen}
      />


    </Stack.Navigator>
  
    )

}


export default ProfileNavigator

const styles = StyleSheet.create({})