import {
  ConvertedImageDataType,
  ImagesDataType,
  convertImagesData,
} from './convertImagesData';

type ProductsDataType = {
  id: string;
  attributes: {
    price: string;
    compare_at_price: string;
    description: string;
    name: string;
  };
  relationships: {
    images: {
      data: {
        id: string;
        type: string;
      }[];
    };
  };
}[];

export type ConvertedProductType = {
  id: string;
  name: string;
  price: number;
  oldPrice: number;
  delivery: number;
  discount: number;
  tax: number;
  totalPrice: number;
  description: string;
  images: (ConvertedImageDataType & { id: string })[];
};

export type ConvertedProductsDataType = ConvertedProductType[];

export const convertProductsData = (
  products: ProductsDataType,
  imagesData: ImagesDataType,
): ConvertedProductsDataType => {
  return products.map(
    ({
      id,
      attributes: { name, price, compare_at_price, description },
      relationships,
    }) => {
      const images = relationships.images.data.map(({ id: imageId }) => {
        const { url_size_100x100, url_size_240x240, url_size_278x371 } =
          convertImagesData(imagesData)[imageId] || {};

        return {
          id: imageId,
          url_size_100x100,
          url_size_240x240,
          url_size_278x371,
        };
      });
      const delivery = Math.round(+price * 0.02);
      const discount = +compare_at_price - +price;
      const tax = Math.round(+price * 0.02);
      const totalPrice = +price + delivery + tax;

      return {
        id,
        name,
        price: +price,
        oldPrice: +compare_at_price,
        delivery,
        discount: discount > 0 ? discount : 0,
        tax,
        totalPrice,
        description,
        images,
      };
    },
  );
};
