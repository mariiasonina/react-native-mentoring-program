import { ImagesDataType, convertImagesData } from './convertImagesData';

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
	description: string;
	images: {
		id: string;
		url_size_100: string;
		url_size_240: string;
	}[];
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
				const { url_size_100, url_size_240 } =
					convertImagesData(imagesData)[imageId] || {};

				return {
					id: imageId,
					url_size_100,
					url_size_240,
				};
			});

			return {
				id,
				name,
				price: +price,
				description,
				oldPrice: +compare_at_price,
				images,
			};
		},
	);
};
