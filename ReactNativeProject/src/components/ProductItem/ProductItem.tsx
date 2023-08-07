import React from 'react';
import { Image, Pressable } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { ProductMainInfo } from '@components/ProductMainInfo/ProductMainInfo';
import { effects } from '@styles/effects';
import { ConvertedProductType } from '@src/dataConverters/convertProductsData';
import { styles } from './styles';

type Props = {
  product: ConvertedProductType;
};

type RootStackParamList = {
  ProductDetails: { productId: string };
};

export const ProductItem = ({ product }: Props): JSX.Element => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const { name, price, oldPrice, images, id } = product;

  return (
    <Pressable
      style={[styles.product, effects.shadow]}
      onPress={() => navigation.navigate('ProductDetails', { productId: id })}>
      <Image
        style={styles.productImage}
        source={{
          uri: `https://demo.spreecommerce.org${images[0].url_size_100x100}`,
        }}
      />
      <ProductMainInfo name={name} newPrice={price} oldPrice={oldPrice} />
    </Pressable>
  );
};
