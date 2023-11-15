import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
	size?: number;
};

export type ProductType = {
	id?: number;
	name: string;
	image: string;
	price: number;
	category:
		| "building"
		| "plumbing"
		| "cleaning"
		| "electrical"
		| "farming"
		| "tools";
};

export type ProductCategory =
	| "building"
	| "plumbing"
	| "cleaning"
	| "electrical"
	| "farming"
	| "tools";

export type useProductCategoryType = {
	category:ProductCategory,
	setCategory:(newCategory:ProductCategory) => void
}

export type useSearchValueType = {
	value: string;
	setValue: (newValue: string) => void;
};

export type useDataType = {
	stateProducts: ProductType[];
	filteredProducts: ProductType[];
	setStateProducts: (newStateProducts: ProductType[]) => void;
	setFilteredProducts: (newFilteredProducts: ProductType[]) => void;
};