import React, { useState } from 'react';
import { View, Image, SafeAreaView } from 'react-native';
import Carousel, { ICarouselInstance } from 'react-native-reanimated-carousel';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ArrowLeftIcon from '@assets/images/icons/arrow-left.svg';
import ArrowRightIcon from '@assets/images/icons/arrow-right.svg';
import { ConvertedImageDataType } from '@src/dataConverters/convertImagesData';
import { SizeMapping } from '@src/dataConverters/constants';
import { styles } from './styles';

type Props = {
  productId: string;
  images: (ConvertedImageDataType & { id: string })[];
  width: keyof SizeMapping;
  height: SizeMapping[keyof SizeMapping];
};

type RootStackParamList = {
  ProductImages: { productId: string };
};

export const Slider = ({
  productId,
  images,
  width,
  height,
}: Props): JSX.Element => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [currentIndex, setCurrentIndex] = useState(0);
  const ref = React.useRef<ICarouselInstance>(null);

  const onSnapToItem = (index: number) => {
    setCurrentIndex(index);
  };

  const showPrevSlide = () => {
    setCurrentIndex(prevIndex =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1,
    );
    ref.current?.prev();
  };

  const showNextSlide = () => {
    setCurrentIndex(prevIndex =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1,
    );
    ref.current?.next();
  };

  return (
    <SafeAreaView>
      <View style={styles.contentContainer}>
        <ArrowLeftIcon onPress={showPrevSlide} />
        <Carousel
          width={width}
          height={height}
          ref={ref}
          data={images}
          scrollAnimationDuration={1000}
          onSnapToItem={onSnapToItem}
          renderItem={({ index }) => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('ProductImages', { productId })
              }>
              <Image
                width={width}
                height={height}
                source={{
                  uri: `https://demo.spreecommerce.org${
                    images[index][
                      `url_size_${width}x${height}` as keyof ConvertedImageDataType
                    ]
                  }`,
                }}
              />
            </TouchableOpacity>
          )}
        />
        <ArrowRightIcon onPress={showNextSlide} />
      </View>
      <View style={styles.dots}>
        {images.map(({ id }, index) => (
          <View
            key={id}
            style={[styles.dot, currentIndex === index && styles.activeDot]}
          />
        ))}
      </View>
    </SafeAreaView>
  );
};
