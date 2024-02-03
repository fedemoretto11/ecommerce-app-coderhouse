import { 
  FlatList, 
  StyleSheet, 
  Text, 
  TouchableOpacity, 
  View 
} from "react-native";
import { 
  useDispatch, 
  useSelector 
} from "react-redux";

import { usePostOrderMutation } from "../services/shopService";

import { cleanCart } from "../features/cartSlice";
import { addOrder } from "../features/orderSlice";

import CartItem from "../components/Cartitem";
import { COLORS } from "../global/colors";

const CartScreen = () => {

  const dispatch = useDispatch()
  
  const cartItems = useSelector(state => state.cartReducer.value.items)
  const total = useSelector(state => state.cartReducer.value.total)
  const localId = useSelector(state => state.authReducer.localId)


  const [triggerPost, result ] = usePostOrderMutation()


  const confirmCart = () => {
    const date = Date.now()
    const order = { total, cartItems, localId: localId, createdAt: date, orderId: Math.ceil(Math.random(1,10)*1000) }
    dispatch(addOrder(order))
    triggerPost(order)
      .then((result) => {
        console.log('Order Result:', result);
        dispatch(cleanCart());
      })
      .catch((error) => {
        console.error('Error posting order:', error);
      });
  }
  


  const onCleanCart = () => {
    dispatch(cleanCart())
  }
  

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
        <TouchableOpacity style={styles.cleanButton} onPress={onCleanCart}>
          <Text style={styles.textConfirm}>Limpiar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.confirmButton} onPress={confirmCart}>
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
  cleanButton: {
    backgroundColor: COLORS.third,
    padding: 10,
    borderRadius: 10
  },  
  textConfirm:{
    fontFamily:'Raleway-Bold',
    fontSize:16,
    color: '#fff'
  }  
})
