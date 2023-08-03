import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  RefreshControl,
  ActivityIndicator,
  Button,
} from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { useData } from '@src/context/DataContext';
import { Slider } from '@components/Slider/Slider';
import { ProductMainInfo } from '@components/ProductMainInfo/ProductMainInfo';
import { effects } from '@styles/effects';
import { Sizes } from '@src/dataConverters/constants';
import { ConvertedProductType } from '@src/dataConverters/convertProductsData';
import { styles } from './styles';
import { RootStackParamList } from '@src/navigation/StackNavigator';

type Props = {
  route: RouteProp<RootStackParamList, 'ProductDetails'>;
};

export const ProductDetailsScreen = ({ route }: Props): JSX.Element => {
  const { data, onRefresh, refreshing } = useData();
  const [product, setProduct] = useState<ConvertedProductType | null>(null);
  const { productId } = route.params;

  useEffect(() => {
    if (data?.length) {
      const newProduct = data.find(({ id }) => id === productId);

      setProduct(newProduct || null);
    }
  }, [data, productId]);

  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
      <View style={styles.productDetailsContainer}>
        {product ? (
          <>
            <Slider
              productId={product.id}
              images={product.images.slice(0, 4)}
              width={Sizes.s240x240.width}
              height={Sizes.s240x240.height}
            />
            <View style={styles.infoContainer}>
              <View style={styles.bottomLine}>
                <ProductMainInfo
                  name={product.name}
                  newPrice={product.price}
                  oldPrice={product.oldPrice}
                />
              </View>
              <View style={styles.bottomLine}>
                <Text style={styles.infoTitle}>Select Color</Text>
                <View style={styles.infoValue}>
                  <Text>Blue</Text>
                </View>
              </View>
              <View>
                <Text style={styles.infoTitle}>Description</Text>
                <Text style={styles.descriptionText}>
                  {product.description}
                </Text>
              </View>
            </View>
            <View style={[styles.button, effects.shadow]}>
              <Button title="Add to cart" color="#008ACE" />
            </View>
          </>
        ) : (
          <ActivityIndicator size="large" color="#008ACE" />
        )}
      </View>
    </ScrollView>
  );
};
