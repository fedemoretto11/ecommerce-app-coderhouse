import { ActivityIndicator, StyleSheet, View } from 'react-native'
import { COLORS } from '../const/colors'

const Loader = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size='large' color={COLORS.primary} />
    </View>
  )
}
export default Loader
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})