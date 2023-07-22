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

type ConvertedImagesDataType = {
	[key: string]: {
		url_size_100: string;
		url_size_240: string;
	};
};

export const convertImagesData = (
	data: ImagesDataType,
): ConvertedImagesDataType =>
	data.reduce(
		(acc, { id, attributes }) => ({
			...acc,
			[id]: {
				url_size_100: attributes.styles.find(style =>
					style.size.includes('100x100'),
				)?.url,
				url_size_240: attributes.styles.find(style =>
					style.size.includes('240x240'),
				)?.url,
			},
		}),
		{},
	);
