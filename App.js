import { ActivityIndicator, StyleSheet } from 'react-native';
import CategoryScreen from './src/screens/CategoryScreen';
import { useFonts } from 'expo-font'
import { useState } from 'react';
import ProductsByCategoryScreen from './src/screens/ProductsByCategoryScreen';

export default function App() {

  const [categorySelected, setCategorySelected] = useState('')

  const [fontLoaded] = useFonts({
    'Raleway-Bold': require('./assets/fonts/Raleway-Bold.ttf'),
    'Raleway-Italic': require('./assets/fonts/Raleway-Italic.ttf'),
    'Raleway-Light': require('./assets/fonts/Raleway-Light.ttf'),
    'Raleway-Regular': require('./assets/fonts/Raleway-Regular.ttf'),
  })

  if (!fontLoaded) return <ActivityIndicator />

  const onSelectCategory = (category) => {
    setCategorySelected(category)
  }


  return (
    <>
      {
        categorySelected 
        ?
        <ProductsByCategoryScreen category={categorySelected} onSelectCategoryEvent={onSelectCategory}/> 
        :
        <CategoryScreen onSelectCategoryEvent={onSelectCategory}/>

      }
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
