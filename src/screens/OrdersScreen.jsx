import { 
  useEffect, 
  useState 
} from 'react'
import { 
  FlatList, Modal, StyleSheet, Text, TouchableOpacity, View 
} from 'react-native'

import { useGetOrdersQuery } from '../services/shopService'
import { useSelector } from 'react-redux'

import { COLORS } from '../const/colors'

import OrderItem from '../components/OrderItem'
import OrderItemDetail from '../components/OrderItemDetail'




const OrdersScreen = () => {

  const localId = useSelector(state => state.authReducer.localId)
  const localOrders = useSelector(state => state.orderReducer.orders)

  const { data, isLoading, error} = useGetOrdersQuery(localId)

  const [ orderData, setOrderData ] = useState([])

  const [modalVisible, setModalVisible] = useState(false)
  const [orderId, setOrderId] = useState("")
  const [orderSelected, setOrderSelected] = useState({})

  
  useEffect(() => {
    if (data) {
      const orders = Object.values(data)
      setOrderData([...orderData, ...orders])
    }
  }, [data])

  useEffect(() => {
    if (localOrders) {
      setOrderData([...orderData, ...localOrders])
    }
  }, [localOrders])

  useEffect(() => {
    const orderSelected = orderData.find(order => order.orderId === orderId)
    setOrderSelected(orderSelected)
  }, [orderId])

  const renderOrderItem = ({ item }) => {
    return (
      <OrderItem order={item} setModalVisible={setModalVisible} setOrderId={setOrderId} />
    )
  }

  const renderItem = ({ item }) => {
    return (
      <OrderItemDetail item={item}/>
    )
  }






  if (isLoading) {
    return <Text>Cargando</Text>

  }
  if (error) {
    return <Text>Error: {error.message}</Text>

  }

  
  return (
    <>
      <FlatList
        data={orderData}
        renderItem={renderOrderItem}
        keyExtractor={orderData?.orderId}
      />
      <Modal visible={modalVisible} animationType='fade' style={{ width: '100%' }}>
        <View style={styles.modal}>
          <View style={styles.innerModal}>
            <FlatList 
              data={orderSelected?.cartItems}
              renderItem={renderItem}
            />
            <Text style={styles.modalText}>$ {orderSelected?.total}</Text>
            <TouchableOpacity
              style={styles.modalBtn}
              onPress={() => {setModalVisible(false)}}
            >
              <Text style={styles.btnText}>Volver</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </>
  )
}
export default OrdersScreen

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.secondary,
  },
  innerModal: {
    width: '90%',
    margin: 20,
    backgroundColor: COLORS.white,
    borderRadius: 20,
    padding: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 20,
    textAlign: "center",
    fontFamily: "Raleway-Bold",
    fontSize: 25,
  },
  modalBtn: {
    width: 100,
    padding: 12,
    borderRadius: 10,
    elevation: 20,
    backgroundColor: COLORS.third,
  },
  btnText: {
    textAlign: "center",
    fontFamily: "Raleway-Bold",
    fontSize: 20,
    color: COLORS.secondary
  }
})