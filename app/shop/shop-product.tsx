"use client";

import ProductCard from "@/app/shop/products-card";
import { ProductType } from "@/types";
import { useProductCategory } from "../hooks/useProductCategory";
import { useSearchValue } from "../hooks/useSearchValue";
import { useData } from "../hooks/useData";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function ShopProduct() {
	const { category } = useProductCategory();
	const { setStateProducts, filteredProducts, stateProducts } = useData();
	const { value } = useSearchValue();
	
	useQuery({
		queryKey: ["getProductsKey"],
		queryFn: async (): Promise<ProductType[]> => {
			const { data } = await axios.get(
				`${process.env.NEXT_PUBLIC_API_URL}/product`
			);
			setStateProducts(data);
			return data;
		},
	});

	return (
		<>
			{value.length >= 1
				? filteredProducts.map(
						(oneFilteredProduct) =>
							oneFilteredProduct.category === category && (
								<ProductCard
									{...oneFilteredProduct}
									key={oneFilteredProduct.id}
								/>
							)
				  )
				: stateProducts.map(
						(oneStateProduct) =>
							oneStateProduct.category === category && (
								<ProductCard
									{...oneStateProduct}
									key={oneStateProduct.id}
								/>
							)
				  )}
		</>
	);
}
