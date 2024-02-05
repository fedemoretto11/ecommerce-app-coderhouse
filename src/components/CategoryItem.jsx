import { Text, StyleSheet, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";

import Card from "./Card";

import { setCategorySelected } from "../features/shopSlice";
import { COLORS } from "../const/colors";

const CategoryItem = ({ category, navigation }) => {
  const dispatch = useDispatch();

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("Productos", { category });
        dispatch(setCategorySelected(category));
      }}
    >
      <Card style={styles.cardContainer}>
        <Text style={styles.text}>{category}</Text>
      </Card>
    </TouchableOpacity>
  );
};

export default CategoryItem;

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: COLORS.third,
    padding: 20,
    margin: 10,
    marginHorizontal: 20
  },
  text: {
    textTransform: "capitalize",
    fontSize: 18,
    fontFamily: 'Raleway-Italic',
    color: COLORS.primary
  },
});
