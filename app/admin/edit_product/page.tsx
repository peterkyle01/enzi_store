"use client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { ProductType } from "@/types";
import EditProductCard from "@/app/admin/edit_product/edit-products-card";

export default function EditProduct() {
	const { data: products } = useQuery({
		queryKey: ["getProductsKey"],
		queryFn: async (): Promise<ProductType[]> => {
			const { data } = await axios.get(
				`${process.env.NEXT_PUBLIC_API_URL}/product`
			);

			return data;
		},
	});

	return (
		<div className="w-full md:w-1/2 min-h-screen overflow-y-scroll">
			<h1 className="flex justify-center items-center font-black">
				Edit Available Product
			</h1>
			<div className="w-full">
				<div className="w-full h-auto grid grid-cols-2 sm:grid-cols-3 gap-1 lg:grid-cols-4">
					{products && products.map((product) => <EditProductCard {...product} key={product.id}/>)}
				</div>
			</div>
		</div>
	);
}
