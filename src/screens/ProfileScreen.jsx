import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import { useSelector } from 'react-redux'

import { FontAwesome } from '@expo/vector-icons';

import { COLORS } from '../global/colors.js'
import { useGetUserDataQuery } from '../services/userService.js';
import { useEffect, useState } from 'react';



const ProfileScreen = ({ navigation }) => {

  const image = useSelector(state => state.authReducer.profilePicture)
  const localId = useSelector(state => state.authReducer.localId)

  const [userData, setUserData] = useState({})

  const {data, isLoading, error} = useGetUserDataQuery(localId)
  
  useEffect(() => {
    setUserData(data)
    console.log(userData)
  }, [data, isLoading])


  const renderImage = () => (
    <Pressable 
      onPress={() => navigation.navigate('Seleccionar Imagen')}
      style={styles.imageContainer}
    >
      {
        image 
        ? 
        <Image  source={{ uri: image }} style={styles.profilePicture} resizeMode='contain'/>
        : 
        <Image  source={require('../../assets/img/usuario.png')} style={styles.profilePicture} resizeMode='contain'/>
      }
    </Pressable>
  )

  const renderUserData = () => (
    <View style={styles.userDataContainer}>
      <Text style={styles.userTitle}>{userData?.nombre} {userData?.apellido}</Text>
      <Text style={styles.userData}>Nivel: 12</Text>
      <Text style={styles.userData}>Direccion: {userData?.direccion}</Text>
      <Text style={styles.userData}>Localidad: {userData?.localidad}</Text>
    </View>
  )


  
  return (
    <View style={styles.container}>
      <View>{renderImage()}</View>
      {renderUserData()}
      <View style={styles.pencil}>
        <Pressable
          onPress={() => navigation.navigate("Cargar Datos")}
        >
          <FontAwesome name="pencil-square-o" size={28} color={COLORS.primary} />
        </Pressable>
      </View>
    </View>
  )
}


export default ProfileScreen


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    margin: 20,
    gap: 20,
    alignItems: 'flex-start',
    justifyContent: "space-around"
  },
  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: 100
  },
  userDataContainer: {
    marginTop: 10
  },
  userTitle: {
    fontSize: 16
  },
  imageContainer: {
    borderRadius: 100
  },
  userData: {
    fontSize: 12
  }, 
  pencil: {
    
  }

})