import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import { useSelector } from 'react-redux'

import user_data from '../data/user-data.json'


const ProfileScreen = ({ navigation }) => {

  const image = useSelector(state => state.authReducer.profilePicture)

  return (
    <View style={styles.container}>
      <View>
        <Pressable 
          onPress={() => navigation.navigate('Seleccionar Imagen')}
          style={styles.imageContainer}
        >
          {
            image 
            ? 
            <Image 
              source={{ uri: image }}
              style={styles.profilePicture}
              resizeMode='contain'
            />
            : 
            <Image 
              source={require('../../assets/img/usuario.png')}
              style={styles.profilePicture}
              resizeMode='contain'
            />
          }
        </Pressable>
      </View>
      <View style={styles.userDataContainer}>
        <Text style={styles.userTitle}>{user_data.name}</Text>
        <Text style={styles.userData}>{user_data.role}</Text>
        <Text style={styles.userData}>Nivel: {user_data.level}</Text>
        <Text style={styles.userData}>Direccion: {user_data.address}</Text>
        <Text style={styles.userData}>{user_data.city}</Text>
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
    alignItems: 'flex-start'
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
  }

})