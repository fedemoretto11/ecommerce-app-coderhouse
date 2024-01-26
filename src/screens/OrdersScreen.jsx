import { 
  FlatList, Modal, StyleSheet, Text, TouchableOpacity, View 
} from 'react-native'

import OrderItem from '../components/OrderItem'

import { useGetOrdersQuery } from '../services/shopService'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { COLORS } from '../global/colors'

const OrdersScreen = () => {

  const localId = useSelector(state => state.authReducer.localId)

  const { data, isLoading, error} = useGetOrdersQuery(localId)
  const [ orderData, setOrderData ] = useState([])

  const [modalVisible, setModalVisible] = useState(false)
  const [orderId, setOrderId] = useState("")
  const [orderSelected, setOrderSelected] = useState({})

  
  useEffect(() => {
    if (data) {
      const orders = Object.values(data)
      setOrderData(orders)
    }
  }, [data, isLoading])

  useEffect(() => {
    const orderSelected = orderData.find(order => order.orderId === orderId)
    setOrderSelected(orderSelected)
  }, [orderId])

  const renderOrderItem = ({ item }) => {
    return (
      <OrderItem order={item} setModalVisible={setModalVisible} setOrderId={setOrderId} />
    )
  }
  
  return (
    <>
      <FlatList
        data={orderData}
        renderItem={renderOrderItem}
      />
      <Modal visible={modalVisible} animationType='fade'>
        <View style={styles.modal}>
          <View style={styles.innerModal}>
            <FlatList 
              data={orderSelected?.cartItems}
            />
            <Text style={styles.modalText}>{orderSelected?.total}</Text>
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
    marginTop: 30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.primary,
  },
  innerModal: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
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
    textAlign: "center"
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