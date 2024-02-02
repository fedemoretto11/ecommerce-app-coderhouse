import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import Input from "../components/Input";
import { useEffect, useState } from "react";
import { useSignUpMutation } from "../services/authService";
import { useDispatch } from "react-redux";
import { setUser } from "../features/authSlice";
import { COLORS } from "../global/colors";
import { signUpSchema } from "../validations/signUp";
import { usePostUserDataMutation } from "../services/userService";



// const RANDOM_NAMES = ["Gato", "Pelicano", "Chihuana", "Elefante", "Rinoceronte"]
// const RANDOM_LASTNAMES = ["Peludo", "Amarillo", "Chico", "Grande", "Lanudo"]
// const RANDOM_ADDRESS = ["Av Siempreviva 742", "Chacabuco 62", "Balcarce 50", "Cerrito 628", "Av Rivadavia 1864"]
// const RANDOM_CITIES = ["Maipu", "Buenos Aires", "Cordoba", "Holbaek", "El Cairo"]


const SignupScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [emailError, setEmailError] = useState("")
  const [passwordError, setPasswordError] = useState("")
  const [confirmPasswordError, setConfirmPasswordError] = useState("")

  const [triggerSignup, result] = useSignUpMutation();
  const [tiggerPostData, resultPostData] = usePostUserDataMutation()


  // const randomData = {
  //   nombre: RANDOM_NAMES[Math.floor(Math.random() * RANDOM_NAMES.length)],
  //   apellido: RANDOM_LASTNAMES[Math.floor(Math.random() * RANDOM_NAMES.length)],
  //   direccion: RANDOM_ADDRESS[Math.floor(Math.random() * RANDOM_NAMES.length)],
  //   localidad: RANDOM_CITIES[Math.floor(Math.random() * RANDOM_NAMES.length)]

  // }

  const onSubmit = () => {

    try {
      const validations = signUpSchema.validateSync({email, password, confirmPassword})
      triggerSignup({ email, password });
    } catch (error) {
      console.log("Error al registrar");
      switch(error.path) {
        case 'email':
          setEmailError(error.errors)
          break
        case 'password':
          setPasswordError(error.errors)
          break
        case 'confirmPassword':
          setConfirmPasswordError(error.errors)
          break
        default:
          break
      }
    }
  };

  const dispatch = useDispatch();

  useEffect(() => {
    if (result.data) {
      dispatch(setUser(result.data));
    }
  }, [result]);

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Image 
          source={require('../../assets/img/SuperMusicChanguitoLogo.png')}
          style={styles.img}
          resizeMode='cover'
        />
        <Text style={styles.titleText}>Super Music Changuito</Text>
      </View>
      <Input 
        label="Email:" 
        onChange={setEmail} 
        error={emailError}
        style={styles.input}
      />
      <Input 
        label="Contraseña:" 
        onChange={setPassword} 
        error={passwordError} 
        isSecureEntry={true}
        style={styles.input} />
      <Input
        label="Repetir contraseña:"
        onChange={setConfirmPassword}
        error={confirmPasswordError}
        isSecureEntry={true}
        style={styles.input}
      />
      <TouchableOpacity style={styles.btn} onPress={onSubmit}>
        <Text style={styles.btnText}>Registrarme</Text>
      </TouchableOpacity>
      <View style={styles.altContainer}>
        <Text style={styles.subtitle}>¿Ya tienes una cuenta?</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Login");
          }}
        >
          <Text style={styles.subtitleLink}>Ingresar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.primary,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    gap: 8,
  },
  titleContainer: {
    marginBottom: 22,
    gap: 16
  },
  titleText: {
    color: COLORS.white,
    fontFamily: "Raleway-Bold",
    fontSize: 28,
  },
  img: {
    width: 100,
    height: 100,
    borderRadius: 20,
    alignSelf: 'center'
  },
  input: {
    padding: 14,
    fontSize: 18,
  },
  btn: {
    padding: 14,
    backgroundColor: COLORS.secondary,
    borderRadius: 8,
    margin: 5,
  },
  btnText: {
    color: "#fff",
    fontFamily: "Raleway-Bold",
    fontSize: 18
  },
  altContainer: {
    flexDirection: "row",
    gap: 5,
    justifyContent: "center",
    alignItems: "center",
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
    textDecorationLine: "underline",
  },
});
