import { 
  useEffect, 
  useState 
} from 'react'
import { 
  ActivityIndicator, 
  Image, 
  ScrollView, 
  StyleSheet, 
  Text, 
  TouchableOpacity, 
  View 
} from 'react-native'
import { 
  useDispatch, 
  useSelector 
} from 'react-redux'

import { COLORS } from '../global/colors.js'
import { addItem } from '../features/cartSlice.js'
import { useGetProductByIdQuery } from '../services/shopService.js'


const ProductDetailScreen = () => {

  const dispatch = useDispatch()
  const [productSelected, setProductSelected] = useState({})

  const productId = useSelector(state => state.shopReducer.productIdSelected)

  const {data: productById, isLoading, error } = useGetProductByIdQuery(productId)

  useEffect(()=>{
    if (!isLoading) {
      const productValue = Object.values(productById)
      setProductSelected(productValue[0])
    }
  }, [isLoading, productById])
  
  const onAddToCart = () => {
    dispatch(addItem({...product, quantity: 1}))
    console.log("Comprar")
  }


  return (
    <>
      {
        !productSelected
        ?
        <ActivityIndicator />
        :
        <>
          <ScrollView >
            <Image
              style={styles.imageProduct}
              resizeMode='cover'
              source={{uri: productSelected.thumbnail }}
            />
            <View style={styles.detailContainer}>
              <Text style={styles.title}>{productSelected.title}</Text>
              <Text style={styles.description}>{productSelected.description}</Text>
              <Text style={styles.price}>$ {productSelected.price}</Text>
              <TouchableOpacity style={styles.buyButton} onPress={onAddToCart}>
                <Text style={styles.buyText}>Comprar</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </>
      }
    </>
  )
}



export default ProductDetailScreen


const styles = StyleSheet.create({
  imageProduct: {
    minWidth: 300,
    width: '100%',
    height: 400,

  },
  imageProductLandscape: {
    width: 200,
    height: 200,
  },
  detailContainer: {
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Raleway-Bold',
    fontSize: 32,
  },
  description: {
    fontFamily: 'Raleway-Regular',
    fontSize: 20,
  },
  price: {
    fontFamily: 'Raleway-Bold',
    fontSize: 32,
    color: COLORS.secondary
  },
  buyButton: {
    marginTop: 10,
    width: 200,
    padding: 10,
    alignItems: 'center',
    backgroundColor: 'green',
    borderRadius: 10,
  },
  buyText: {
    color: '#000'
  },
  buyAlt: {
    marginTop: 10,
    width: 200,
    padding: 10,
    alignItems: 'center',
    backgroundColor: COLORS.primary,
    borderRadius: 10,
  }
})