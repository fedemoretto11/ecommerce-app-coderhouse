import { 
  FlatList 
} from 'react-native'

import OrderItem from '../components/OrderItem'

import { useGetOrdersQuery } from '../services/shopService'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'

const OrdersScreen = () => {

  const localId = useSelector(state => state.authReducer.localId)

  const { data, isLoading, error} = useGetOrdersQuery(localId)
  const [ orderData, setOrderData ] = useState([])

  console.log(localId)
  
  useEffect(() => {
    if (data) {
      const orders = Object.values(data)
      setOrderData(orders)
    }
  }, [data, isLoading])

  const renderOrderItem = ({ item }) => {
    return (
      <OrderItem order={item} />
    )
  }
  
  return (
    <FlatList
      data={orderData}
      renderItem={renderOrderItem}
    />
  )
}
export default OrdersScreen