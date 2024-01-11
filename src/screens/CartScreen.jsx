import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import CartItem from "../components/Cartitem";
import { COLORS } from "../global/colors";
import { useSelector } from "react-redux";

const CartScreen = () => {
  
  const cartItems = useSelector(state => state.cartReducer.value.items)
  const total = useSelector(state => state.cartReducer.value.total)
  
  

  const renderCartItem = ({ item }) => <CartItem item={item} />;

  return (
    <View style={styles.cartContainer}>
      <FlatList
        data={cartItems}
        renderItem={renderCartItem}
        keyExtractor={(item) => item.id}
      />
      <View style={styles.cartConfirm}>
        <Text style={styles.totalPrice}>Total: USD {total}</Text>
        <TouchableOpacity style={styles.confirmButton} onPress={null}>
          <Text style={styles.textConfirm}>Confirmar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  cartContainer: {
    flex: 1,
  },
  cartConfirm: {
    marginBottom: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 25,
  },
  totalPrice: {
    fontSize: 16,
    fontFamily: 'Raleway-Bold'
  },
  confirmButton:{
    backgroundColor: COLORS.secondary,
    padding:10,
    borderRadius:10,
  },
  textConfirm:{
    fontFamily:'Raleway-Bold',
    fontSize:16,
    color: '#fff'
  }  
})
