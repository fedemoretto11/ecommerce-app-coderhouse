import { FlatList, StyleSheet } from 'react-native'

import CategoryItem from '../components/CategoryItem'

import { useGetCategoriesQuery } from '../services/shopService'

const CategoryScreen = ({ navigation }) => {

  const { data, error, isLoading } = useGetCategoriesQuery()

  const renderCategoryItem = ({item}) => (
    <CategoryItem category={item} navigation={navigation} />
  )

  return (
    <FlatList 
      data={data}
      renderItem={renderCategoryItem}
      keyExtractor={item=>item}
    />
  )
}

export default CategoryScreen
const styles = StyleSheet.create({

})