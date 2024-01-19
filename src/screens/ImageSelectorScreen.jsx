import { useState } from 'react'
import { MaterialIcons} from '@expo/vector-icons'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { COLORS } from '../global/colors'

const ImageSelectorScreen = () => {

  const [image, setImage] = useState("")

  const verifyCameraPermision = async () => {}
  const pickImage = async () => {}
  const confirmImage = () => {}




  return (
    <View style={styles.container}>
      {
        image 
        ? 
        <View style={imageContainer}>
          <Image 
            src={{ uri: image }}
            style={styles.image}
            resizeMode='cover'
          />
          <View style={styles.btnContainer}>
            <TouchableOpacity style={styles.btn} onPress={pickImage}>
              <Text style={styles.textBtn}>Tomar Otra</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ ...styles.btn, ...styles.btnConfirm }} onPress={confirmImage}>
              <Text style={styles.textBtn}>Confirmar</Text>
            </TouchableOpacity>
          </View>
        </View>
        :
        <View style={styles.noImageContainer}>
          <MaterialIcons 
            name='no-photography' 
            size={200} 
            color='#ccc' 
          />
          <TouchableOpacity style={styles.btn} onPress={pickImage}>
            <Text style={styles.textBtn}>Abrir Camara</Text>
          </TouchableOpacity>
        </View>
      }  
    </View>
  )
}

export default ImageSelectorScreen

const styles = StyleSheet.create({
  noImageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100
  },
  btn: {
    backgroundColor: COLORS.primary,
    padding: 10,
    borderRadius: 5,
    marginTop: 50
  },
  textBtn: {
    color: "#FFF"
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100
  },
  image: {
    width: 250,
    height: 250,
    borderRadius: 250
  },
  btnContainer: {
    flexDirection: 'row',
    gap: 10
  },
  btnConfirm: {
    backgroundColor: '#00FF00',
    paddingHorizontal: 50
  }
})