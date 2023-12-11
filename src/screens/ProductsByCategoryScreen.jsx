import { useEffect, useState } from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import products_data from '../data/products-data.json'
import ProductItem from '../components/ProductItem'
import Header from '../components/Header'
import Search from '../components/Search'

const ProductsByCategoryScreen = ({ category, onSelectCategoryEvent }) => {

  const [productsByCategory, setProductsByCategory] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    const productsFilterByCategory = products_data.filter(product => product.category === category)
    const productsFiltered = productsFilterByCategory.filter(product => product.title.toLowerCase().includes(search.toLowerCase()))
    setProductsByCategory(productsFiltered)
  },[category, search])

  const renderProductItem = ({ item }) => (
    <ProductItem product={item} />
  )

  const onSearch = (search) => {
    setSearch(search)
  }


  return (
    <>
      <Header title={category} isCategory={true} onSelectCategoryEvent={onSelectCategoryEvent} />
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