import { StyleSheet, Text, Image, TouchableOpacity } from "react-native";

const ProductItem = ({ product, navigation }) => {
  return (
    <TouchableOpacity onPress={() => {navigation.navigate('Detalle de Producto', { product })}} style={styles.containerProductItem}>
      <Text style={styles.productTitle}>{product.title}</Text>
      <Image
        style={styles.productImage}
        resizeMode="cover"
        source={{ uri: product.thumbnail }}
      />
    </TouchableOpacity>
  );
};


export default ProductItem;

const styles = StyleSheet.create({
  containerProductItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    margin: 10,
  },
  productImage: {
    width: 60,
    height: 60,
  },
});
