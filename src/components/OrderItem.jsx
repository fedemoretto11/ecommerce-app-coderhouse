import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Card from "./Card";
import { Feather } from "@expo/vector-icons";

const OrderItem = ({ order, setModalVisible, setOrderId }) => {
  return (
    <Card style={styles.cartItemContainer}>
      <View>
        <Text style={styles.createdAt}>
          Creada el {new Date(order.createdAt).toLocaleString()}
        </Text>
        <Text style={styles.total}>Total: ${order.total}</Text>
      </View>
      <TouchableOpacity 
        style={styles.searchIcon} 
        onPress={() => {
          setModalVisible(true)
          setOrderId(order.orderId)
        }}
      >
        <Feather name="search" size={24} color="black" />
      </TouchableOpacity>
    </Card>
  );
};

export default OrderItem;

const styles = StyleSheet.create({
  cartItemContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
  },
  searchIcon: {
    marginLeft: "auto",
  },
  createdAt: {
    fontFamily: "Raleway-Regular",
    marginBottom: 5,
  },
  total: {
    fontFamily: "Raleway-Bold",
    fontSize: 14,
  },
});
