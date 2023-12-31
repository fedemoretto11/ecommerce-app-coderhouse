import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { COLORS } from "../global/colors";
import { AntDesign } from "@expo/vector-icons";

const Header = ({ title, navigation }) => {


  return (
        <View style={styles.headerContainer}>
          {
            navigation.canGoBack()
            ?
            <TouchableOpacity onPress={navigation.goBack}>
                <AntDesign name="caretleft" size={20} color="white" />
            </TouchableOpacity>
            :
            <View /> // Forma provisoria
          }
          
          <Text style={styles.headerTitle}>{title}</Text>
        </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    height: 100,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    alignItems: 'center',
    backgroundColor: COLORS.secondary,
  },
  headerTitle: {
    color: "#FFF",
    fontFamily: "Raleway-Bold",
    fontSize: 25,
    textTransform: 'capitalize'
  }
});
