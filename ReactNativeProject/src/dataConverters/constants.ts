export type SizeMapping = {
  100: 100;
  240: 240;
  278: 371;
};

type SizesType = {
  [key: string]: {
    height: SizeMapping[keyof SizeMapping];
    width: keyof SizeMapping;
    size: string;
  };
};

export const Sizes: SizesType = {
  s100x100: { height: 100, width: 100, size: '100x100' },
  s240x240: { height: 240, width: 240, size: '240x240' },
  s278x371: { height: 371, width: 278, size: '278x371' },
};
