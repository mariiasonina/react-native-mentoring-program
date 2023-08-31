import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  RefreshControl,
  ActivityIndicator,
  Button,
} from 'react-native';
import { NavigationProp, RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '@src/navigation/StackNavigator';
import { useData } from '@src/context/DataContext/DataContext';
import { Slider } from '@components/Slider/Slider';
import { ProductMainInfo } from '@components/ProductMainInfo/ProductMainInfo';
import { effects } from '@styles/effects';
import { Sizes } from '@src/dataConverters/constants';
import { ConvertedProductType } from '@src/dataConverters/convertProductsData';
import { useAppData } from '@src/context/AppContext/AppContext';
import { useAuth } from '@src/context/AuthContext/AuthContext';
import { styles } from './styles';

type Props = {
  route: RouteProp<RootStackParamList, 'ProductDetails'>;
  navigation: NavigationProp<RootStackParamList>;
};

export const ProductDetailsScreen = ({ route, navigation }: Props) => {
  const { filteredData, data, onRefresh, refreshing } = useData();
  const { addProductToCart } = useAppData();
  const { isSignedIn } = useAuth();
  const [product, setProduct] = useState<ConvertedProductType | null>(null);
  const [isOptionSelected, setIsOptionSelected] = useState<boolean>(false);
  const { productId } = route.params;

  useEffect(() => {
    if (data?.length) {
      const targetProduct = data.find(({ id }) => id === productId);

      if (!targetProduct) {
        const targetFilteredProduct = filteredData.find(
          ({ id }) => id === productId,
        );

        setProduct(targetFilteredProduct || null);
      } else {
        setProduct(targetProduct || null);
      }
    }
  }, [data, filteredData, productId]);

  const onPressOption = () => setIsOptionSelected(!isOptionSelected);
  const onAddProductToCart = () => {
    if (!isSignedIn) {
      navigation.navigate('Modal', { modalType: 'LOGIN' });
    } else if (isOptionSelected) {
      navigation.navigate('Modal', { modalType: 'SUCCESS' });
      addProductToCart(product);
    } else {
      navigation.navigate('Modal', { modalType: 'SELECT_OPTION' });
    }
  };

  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
      contentContainerStyle={styles.productDetailsContainer}>
      {product ? (
        <>
          <Slider
            productId={product.id}
            images={product.images.slice(0, 4)}
            width={Sizes.s240x240.width}
            height={Sizes.s240x240.height}
          />
          <ProductMainInfo
            name={product.name}
            newPrice={product.price}
            oldPrice={product.oldPrice}
            discount={product.discount}
          />
          <View style={effects.divider} />
          <Text style={styles.infoTitle}>Select Color</Text>
          <Text
            style={[
              styles.optionValue,
              isOptionSelected && styles.optionValueSelected,
            ]}
            onPress={onPressOption}>
            Blue
          </Text>
          <View style={effects.divider} />
          <View>
            <Text style={styles.infoTitle}>Description</Text>
            <Text style={styles.descriptionText}>{product.description}</Text>
          </View>
          <View style={[styles.button, effects.shadow]}>
            <Button
              title="Add to cart"
              color="#008ACE"
              onPress={onAddProductToCart}
            />
          </View>
        </>
      ) : (
        <ActivityIndicator size="large" color="#008ACE" />
      )}
    </ScrollView>
  );
};
