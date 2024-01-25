import { 
  ActivityIndicator, 
  StatusBar, 
  StyleSheet 
} from 'react-native';
import { useFonts } from 'expo-font'
import { Provider } from 'react-redux';


import MainNavigator from './src/navigator/MainNavigator';

import { COLORS } from './src/global/colors';

import store from './src/store';
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
      <StatusBar style='auto' backgroundColor={COLORS.secondary}/>
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
