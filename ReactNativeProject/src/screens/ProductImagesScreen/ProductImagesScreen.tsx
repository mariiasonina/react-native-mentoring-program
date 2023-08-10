import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { Slider } from '@components/Slider/Slider';
import { ConvertedImageDataType } from '@src/dataConverters/convertImagesData';
import { Sizes } from '@src/dataConverters/constants';
import { useData } from '@src/context/DataContext/DataContext';
import { RootStackParamList } from '@src/navigation/StackNavigator';
import { styles } from './styles';

type ImagesDataType = (ConvertedImageDataType & { id: string })[];

type Props = {
  route: RouteProp<RootStackParamList, 'ProductImages'>;
};

export const ProductImagesScreen = ({ route }: Props): JSX.Element => {
  const { data } = useData();
  const [images, setImages] = useState<ImagesDataType>([]);
  const { productId } = route.params;

  useEffect(() => {
    if (data?.length) {
      const newProduct = data.find(({ id }) => id === productId);

      setImages(newProduct?.images || []);
    }
  }, [data, productId]);

  return (
    <View style={styles.productImages}>
      {!!images.length && (
        <Slider
          productId={productId}
          images={images.slice(0, 4)}
          width={Sizes.s278x371.width}
          height={Sizes.s278x371.height}
        />
      )}
    </View>
  );
};
