import { FlatList, StyleSheet } from 'react-native'

import categories_data from '../data/categories-data.json'
import CategoryItem from '../components/CategoryItem'

const CategoryScreen = ({ navigation }) => {

  const renderCategoryItem = ({item}) => (
    <CategoryItem category={item} navigation={navigation} />
  )

  return (
    <FlatList 
      data={categories_data}
      renderItem={renderCategoryItem}
      keyExtractor={item=>item}
    />
  )
}

export default CategoryScreen
const styles = StyleSheet.create({

})