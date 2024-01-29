import { StyleSheet, Text, View } from 'react-native'
import Input from '../components/Input'
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
    </View>
  )
}
export default DataScreen
const styles = StyleSheet.create({})