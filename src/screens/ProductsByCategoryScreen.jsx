import { useEffect, useState } from 'react'
import { FlatList, StyleSheet, Text } from 'react-native'
import ProductItem from '../components/ProductItem'
import Search from '../components/Search'
import { useSelector } from 'react-redux'
import { useGetProductsByCategoryQuery } from '../services/shopService'

const ProductsByCategoryScreen = ({ navigation }) => {

  const [productsByCategory, setProductsByCategory] = useState([])
  const [search, setSearch] = useState('')

  const category = useSelector(state => state.shopReducer.categorySelected)
  const { data: productsFilteredByCategory, isLoading, error } = useGetProductsByCategoryQuery(category)




  useEffect(() => {
    if (!isLoading) {
      const productsValues = Object.values(productsFilteredByCategory)
      const productsFiltered = productsValues.filter(product => product.title.toLowerCase().includes(search.toLowerCase()))
      setProductsByCategory(productsFiltered)
    }
  },[isLoading, category, search])

  const renderProductItem = ({ item }) => (
    <ProductItem product={item} navigation={navigation}/>
  )

  const onSearch = (search) => {
    setSearch(search)
  }


  return (
    <>
      {
        isLoading 
        ?
        <Text>Loading</Text> 
        : 
        <>
          <Search onSearchHandlerEvent={onSearch} />
          <FlatList 
            data={productsByCategory}
            renderItem={renderProductItem}
            keyExtractor={item => item.id}
          />
        </>
      }
    </>
  )
}


export default ProductsByCategoryScreen


const styles = StyleSheet.create({

})