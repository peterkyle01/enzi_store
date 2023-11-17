import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
	size?: number;
};

export type ProductCategory =
	| "Cement"
	| "SteelRods"
	| "SteelBars"
	| "Bolts&Nuts&Screws"
	| "HingesAndTopers"
	| "SandPaper"
	| "Nails"
	| "IronSheets"
	| "PaintsAndCoating"
	| "Glue"
	| "Brushes"
	| "Tools"
	| "WooodAndTimber"
	| "Welding"
	| "Plumbing"
	| "Pipes"
	| "ElectricalWires"
	| "BulbsAndHolders"
	| "StichesAndBoxes"
	| "Sockets"
	| "JunctionsAndRoundBoxesAndCovers"
	| "Breakers"
	| "Tapes";

export type ProductType = {
	id?: number;
	name: string;
	image: string;
	price: number;
	category: ProductCategory;
};

export type useProductCategoryType = {
	category: ProductCategory;
	setCategory: (newCategory: ProductCategory) => void;
};

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
