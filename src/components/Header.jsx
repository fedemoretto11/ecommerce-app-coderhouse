import { View, Text, StyleSheet } from "react-native";
import { COLORS } from "../global/colors";
// import { AntDesign } from "@expo/vector-icons";

const Header = ({ title }) => {

  return (
        <View style={styles.headerContainer}>
          <Text style={styles.headerTitle}>{title}</Text>
        </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.secondary,
  },
  headerTitle: {
    color: "#FFF",
    fontFamily: "Raleway-Bold",
    fontSize: 25,
  }
});
