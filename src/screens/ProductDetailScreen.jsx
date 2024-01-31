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

  console.log(productSelected)



  useEffect(()=>{
    if (!isLoading) {
      const productValue = Object.values(productById)
      setProductSelected(productValue[0])
    }
  }, [isLoading, productById])


  
  const onAddToCart = () => {
    dispatch(addItem({...productSelected, quantity: 1}))
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
          <ScrollView>
            <Image
              style={styles.imageProduct}
              resizeMode='cover'
              source={{uri: productSelected.thumbnail }}
            />
            <View style={styles.detailContainer}>
              <Text style={styles.title}>{productSelected.title}</Text>
              <Text style={styles.description}>{productSelected.description}</Text>
              <Text style={styles.price}>$ {productSelected.price}</Text>
              <Text style={styles.stock}>Stock: {productSelected.stock} unidades</Text>
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
    height: 350,

  },
  detailContainer: {
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Raleway-Bold',
    fontSize: 30,
    color: COLORS.secondary,
    textAlign: 'center'

  },
  description: {
    fontFamily: 'Raleway-Italic',
    fontSize: 20,
    paddingHorizontal: 10,
    color: COLORS.primary

  },
  stock: {
    fontFamily: 'Raleway-Italic',
    color: COLORS.secondary

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
    backgroundColor: COLORS.confirm,
    borderRadius: 10,
  },
  buyText: {
    fontFamily: 'Raleway-Bold',
    color: COLORS.primary,
    fontSize: 18,
    paddingVertical: 3
  }
})