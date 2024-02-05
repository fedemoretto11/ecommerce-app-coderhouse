import { 
  View, 
  Text, 
  StyleSheet, 
  Image
} from "react-native";
import { useDispatch } from "react-redux";

import Card from "./Card";

import { COLORS } from "../const/colors";

const OrderItemDetail = ({ item }) => {

  const dispatch = useDispatch()

  const total = item.price * item.quantity

  return (
    <View style={styles.orderItemContainer}>
      <Image
        style={styles.imageOrderItem}
        resizeMode="cover"
        source={{ uri: item.thumbnail }}
      />
      <View>
        <Text style={styles.orderTitle}>{item.title}</Text>
        <Text style={styles.orderLightText}>{item.brand}</Text>
        <Text style={styles.orderTotalPrice}>
          Cant: {item.quantity}, Total: ${total.toLocaleString('es-AR')}
        </Text>
      </View>
    </View>
  );
};

export default OrderItemDetail;

const styles = StyleSheet.create({
  orderItemContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 5,
    borderWidth: 2,
    borderColor: COLORS.primary,
    borderRadius: 10,
    marginHorizontal: 5,
    marginBottom: 15,
  },
  imageOrderItem: {
    height: 100,
    width: 50,
    marginRight: 10,
  },
  orderTitle: {
    fontFamily: "Raleway-Bold",
    textTransform: "capitalize",
    fontSize: 18,
  },
  orderLightText: {
    fontFamily: "Raleway-Regular",
    textTransform: "capitalize",
    fontSize: 15,
  },
  orderTotalPrice: {
    fontFamily: "Raleway-Bold",
    textTransform: "capitalize",
    fontSize: 16,
    color: COLORS.primary,
  },
});
