import { Sizes } from './constants';
export type ImagesDataType = {
  id: string;
  type: string;
  attributes: {
    transformed_url: string;
    styles: { url: string; size: string; width: string; height: string }[];
  };
  position: number;
  alt: string;
  original_url: string;
}[];

export type ConvertedImageDataType = {
  url_size_100x100: string;
  url_size_240x240: string;
  url_size_278x371: string;
};

type ConvertedImagesDataType = {
  [key: string]: ConvertedImageDataType;
};

export const convertImagesData = (
  data: ImagesDataType,
): ConvertedImagesDataType =>
  data.reduce(
    (acc, { id, attributes }) => ({
      ...acc,
      [id]: {
        url_size_100x100: attributes.styles.find(style =>
          style.size.includes(Sizes.s100x100.size),
        )?.url,
        url_size_240x240: attributes.styles.find(style =>
          style.size.includes(Sizes.s240x240.size),
        )?.url,
        url_size_278x371: attributes.styles.find(style =>
          style.size.includes(Sizes.s278x371.size),
        )?.url,
      },
    }),
    {},
  );
