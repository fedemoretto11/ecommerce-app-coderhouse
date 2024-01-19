import { useState } from 'react'
import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import { useSelector } from 'react-redux'

const user_data = {
  name: "Federico",
  role: "Crack",
  level: 5,
  address: "H Irigoyen 146",
  city: "Maipu"
}


const ProfileScreen = ({ navigation }) => {

  const image = useSelector(state => state.authReducer.profilePicture)

  return (
    <View style={styles.container}>
      <View>
        <Pressable 
          onPress={() => navigation.navigate('ImageSelector')}
          style={({ pressed }) => [
            {
              backgroundColor: pressed ? "#DCDCDC" : "#E8E8E8",
            },
            styles.imageContainer
          ]}
        >
          {
            image 
            ? 
            null 
            : 
            <Image 
              source={{ uri: image }}
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
    height: 100
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