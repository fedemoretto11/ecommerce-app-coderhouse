import { useEffect, useState } from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import products_data from '../data/products-data.json'
import ProductItem from '../components/ProductItem'
import Search from '../components/Search'

const ProductsByCategoryScreen = ({ navigation, route }) => {

  const [productsByCategory, setProductsByCategory] = useState([])
  const [search, setSearch] = useState('')

  const { category } = route.params

  useEffect(() => {
    const productsFilterByCategory = products_data.filter(product => product.category === category)
    const productsFiltered = productsFilterByCategory.filter(product => product.title.toLowerCase().includes(search.toLowerCase()))
    setProductsByCategory(productsFiltered)
  },[category, search])

  const renderProductItem = ({ item }) => (
    <ProductItem product={item} navigation={navigation}/>
  )

  const onSearch = (search) => {
    setSearch(search)
  }


  return (
    <>
      <Search onSearchHandlerEvent={onSearch} />
      <FlatList 
        data={productsByCategory}
        renderItem={renderProductItem}
        keyExtractor={item => item.id}
      />
    </>
  )
}


export default ProductsByCategoryScreen


const styles = StyleSheet.create({

})