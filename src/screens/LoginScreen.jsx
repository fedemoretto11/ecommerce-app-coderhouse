import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import Input from '../components/Input'
import { COLORS } from '../global/colors'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { setUser } from '../features/authSlice'
import { useLoginMutation } from '../services/authService'
import { insertSession } from '../db'

const LoginScreen = ({ navigation }) => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [triggerLogin, result] = useLoginMutation();

    const dispatch = useDispatch()


    const onSubmit = () => {
      triggerLogin({ email, password })
      console.log(result)
      if (result.isError){
        console.log(result.error)
      }
    }

    useEffect(()=>{
      if(result?.data){
        console.log(result.data)
        dispatch(setUser(result.data))
        insertSession({
          email: result.data.email,
          token: result.data.idToken,
          localId: result.data.localId
        })
          .then(result => console.log(result))
          .catch(error => console.log(error.message))
      }
    }, [result])

    return (
        <View style={styles.container}>
            <Input
                label="Email:"
                onChange={setEmail}
            />
            <Input
                label="Contraseña:"
                onChange={setPassword}
                isSecureEntry={true}
            />
            <TouchableOpacity style={styles.btn} onPress={onSubmit}>
                <Text style={styles.btnText}>Ingresar</Text>
            </TouchableOpacity>
            <View style={styles.altContainer}>
                <Text style={styles.subtitle}>¿No tienes una cuenta?</Text>
                <TouchableOpacity onPress={() => { navigation.navigate("Signup") }}>
                    <Text style={styles.subtitleLink}>Crear una</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
      backgroundColor: COLORS.primary,
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
      gap: 16,
    },
    btn: {
      padding: 14,
      backgroundColor: COLORS.secondary,
      borderRadius: 8,
      margin: 8,
    },
    btnText: {
      color: "#fff",
      fontFamily: "Raleway-Bold",
      fontSize: 18
    },
    altContainer: {
      flexDirection: 'row',
      gap: 5,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 50,
    },
    subtitle: {
      color: "#fff",
      fontFamily: "Raleway-Bold",
      fontSize: 16,
    },
    subtitleLink: {
      fontFamily: "Raleway-Light",
      color: "#fff",
      fontSize: 16,
      textDecorationLine: 'underline'
    }
  })