import { View, Text, StyleSheet } from "react-native";
import { COLORS } from "../global/colors";
import { AntDesign } from "@expo/vector-icons";

const Header = ({ title, isCategory, onSelectCategoryEvent }) => {
  const backEvent = () => {
    onSelectCategoryEvent("");
  };

  return (
    <>
      {isCategory ? (
        <View style={styles.headerContainerTrue}>
          <AntDesign
            name="arrowleft"
            size={44}
            color="white"
            onPress={backEvent}
          />
          <Text style={styles.headerTitle}>{title}</Text>
        </View>
      ) : (
        <View style={styles.headerContainer}>
          <Text style={styles.headerTitle}>{title}</Text>
        </View>
      )}
    </>
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
  headerContainerTrue: {
    height: 100,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    backgroundColor: COLORS.secondary,
  },
  headerTitle: {
    color: "#FFF",
    fontFamily: "Raleway-Bold",
    fontSize: 25,
  },
});
