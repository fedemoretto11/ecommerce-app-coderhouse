import { 
  View, 
  Text, 
  StyleSheet, 
  Image
} from "react-native";
import { useDispatch } from "react-redux";

import Card from "./Card";

import { COLORS } from "../global/colors";

const OrderItemDetail = ({ item }) => {

  const dispatch = useDispatch()

  

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
          Cantidad: {item.quantity}, Total: ${item.price * item.quantity}
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
    marginBottom: 15,
  },
  imageOrderItem: {
    height: 50,
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
