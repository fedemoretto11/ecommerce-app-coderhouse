import { FlatList, StyleSheet } from 'react-native'

// import categories_data from '../data/categories-data.json'
import CategoryItem from '../components/CategoryItem'
import { useSelector } from 'react-redux'

const CategoryScreen = ({ navigation }) => {

  const categories_data = useSelector(state => state.shopReducer.categories);

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