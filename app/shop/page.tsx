import CategoryHeading from "@/app/shop/category-heading";
import { ProductType } from "@/types";
import ShopProduct from "./shop-product";
import CategoryAndSearch from "@/app/shop/category-and-search";
import { useData } from "../hooks/useData";

export default async function page() {
	return (
		<section className="w-full h-auto mt-24 min-h-screen">
			<div className="w-full h-auto p-4 flex justify-center items-center flex-col gap-4 md:flex-row-reverse">
				<CategoryAndSearch />
			</div>
			<h1 className="text-center my-6 font-luckiest_guy">
				<CategoryHeading />
			</h1>
			<div className="w-full h-auto grid grid-cols-2 md:grid-cols-4 gap-2">
				<ShopProduct />
			</div>
		</section>
	);
}
