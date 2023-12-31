import { useEffect, useState } from 'react'
import { ActivityIndicator, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { COLORS } from '../global/colors.js'
import { useSelector } from 'react-redux'


const ProductDetailScreen = () => {

  const [productSelected, setProductSelected] = useState({})
  // Para aplicar mas adelante 
  // const [isLoading, setIsLoading] = useState(true) 
  console.log(productSelected)

  const product = useSelector(state => state.shopReducer.productSelected)

  // Para chequear si es o no landascape
  // const [isPortrait, setIsPortrait] = useState(true)
  // const { height, width } = useWindowDimensions()
  // useEffect(() => {
  //     height < width ? setIsPortrait(false) : setIsPortrait(true)
  //   }, [height])

  useEffect(()=>{
    setProductSelected(product)
    // setIsLoading(false)
  }, [product])


  return (
    <>
      {
        !product
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
              <TouchableOpacity onPress={() => null}>
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