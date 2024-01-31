import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Input from '../components/Input'
import { COLORS } from '../global/colors'


const DataScreen = () => {
  return (
    <View style={styles.container}>
      <Input 
        label="Nombre: "
        style={styles.input}
      />
      <Input 
        label="Apellido: "
        style={styles.input}
      />
      <Input 
        label="Direccion: "
        style={styles.input}
      />
      <Input 
        label="Localidad: "
        style={styles.input}
      />
      <TouchableOpacity 
        style={styles.btn}
        onPress={""}
      >
        <Text style={styles.btnText}>Cargar Datos</Text>
      </TouchableOpacity>
    </View>
  )
}
export default DataScreen
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.primary,
    flex: 1
  },
  input: {
    color: COLORS.error
  },
  btn: {
    padding: 14,
    backgroundColor: COLORS.third,
    borderRadius: 8,
    margin: 5,
    marginTop: 50
  },
  btnText: {
    color: COLORS.primary
  }

})