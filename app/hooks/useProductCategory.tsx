import { ProductCategory, useProductCategoryType } from "@/types";
import { create } from "zustand";

export const useProductCategory = create<useProductCategoryType>((set) => ({
	category: "Cement",
	setCategory: (newCategory: ProductCategory) => set({ category: newCategory }),
}));
