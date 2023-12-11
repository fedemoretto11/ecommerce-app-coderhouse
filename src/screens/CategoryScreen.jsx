import { FlatList, StyleSheet, Text, View } from 'react-native'
import Header from '../components/Header'
import categories_data from '../data/categories-data.json'
import CategoryItem from '../components/CategoryItem'

const CategoryScreen = ({ onSelectCategoryEvent }) => {

  const renderCategoryItem = ({item}) => (
    <CategoryItem category={item} onSelectCategoryEvent={onSelectCategoryEvent} />
  )

  return (
    <>
      <Header title='Categorias' isCategory={false}/>
      <FlatList 
        data={categories_data}
        renderItem={renderCategoryItem}
        keyExtractor={item=>item}
      />
    </>
  )
}

export default CategoryScreen
const styles = StyleSheet.create({

})