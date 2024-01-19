import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Header from "../components/Header";
import ProfileScreen from "../screens/ProfileScreen";
import { StyleSheet } from "react-native";


const ProfileNavigator = () => {

  const Stack = createNativeStackNavigator();

  return (
  
    <Stack.Navigator
      initialRouteName="Perfil"
      screenOptions={
        ({ navigation, route}) => ({
          header: () => <Header title={route.name} navigation={navigation} />
        })
      }
    >

      <Stack.Screen 
        name="Perfil"
        component={ProfileScreen}
      />


    </Stack.Navigator>
  
    )

}


export default ProfileNavigator

const styles = StyleSheet.create({})