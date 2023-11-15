import { create } from "zustand";
import { ProductType, useDataType } from "../../types";

export const useData = create<useDataType>((set) => ({
	stateProducts: [],
	filteredProducts: [],
	setStateProducts: (newStateProducts: ProductType[]) =>
		set({ stateProducts: newStateProducts }),
	setFilteredProducts: (newFilteredProducts: ProductType[]) =>
		set({ filteredProducts: newFilteredProducts }),
}));
