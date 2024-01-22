import { ActivityIndicator, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font'

import { Provider } from 'react-redux';
import store from './src/store';
import MainNavigator from './src/navigator/MainNavigator';
import { init } from './src/db';


export default function App() {

  init()
    .then(() => console.log("Databe inicializada"))
    .catch(() => console.log("Error al inicializar", error.message))


  const [fontLoaded] = useFonts({
    'Raleway-Bold': require('./assets/fonts/Raleway-Bold.ttf'),
    'Raleway-Italic': require('./assets/fonts/Raleway-Italic.ttf'),
    'Raleway-Light': require('./assets/fonts/Raleway-Light.ttf'),
    'Raleway-Regular': require('./assets/fonts/Raleway-Regular.ttf'),
  })

  if (!fontLoaded) return <ActivityIndicator />



  return (
    <Provider store={store}>
      <MainNavigator />
    </Provider>
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
