"use client";

import { useProductCategory } from "@/app/hooks/useProductCategory";
import { ProductCategory } from "@/types";
import { Input } from "@nextui-org/input";
import { Kbd } from "@nextui-org/kbd";
import { Select, SelectItem } from "@nextui-org/select";
import { Search } from "lucide-react";
import { useFilter } from "react-aria";
import { useSearchValue } from "../hooks/useSearchValue";
import { useEffect } from "react";
import { useData } from "../hooks/useData";

export default function CategoryAndSearch() {
	const { setCategory } = useProductCategory();
	const { stateProducts, setFilteredProducts } = useData();
	const { value, setValue } = useSearchValue();

	let { contains } = useFilter({
		sensitivity: "base",
	});

	useEffect(() => {
		let matchedProducts = stateProducts.filter((stateProduct) =>
			contains(stateProduct.name, value)
		);
		setFilteredProducts(matchedProducts);
	}, [value]);

	return (
		<>
			<Select
				size="sm"
				label="Categories"
				placeholder="Select a category"
				selectionMode="single"
				className="max-w-xs"
				defaultSelectedKeys={["tools"]}
				onSelectionChange={(value) =>
					//@ts-ignore
					setCategory(value.anchorKey as ProductCategory)
				}>
				<SelectItem key={"building"}>Building</SelectItem>
				<SelectItem key={"plumbing"}>Plumbing</SelectItem>
				<SelectItem key={"cleaning"}>Cleaning</SelectItem>
				<SelectItem key={"electrical"}>Electrical</SelectItem>
				<SelectItem key={"farming"}>Farming</SelectItem>
				<SelectItem key={"tools"}>Tools</SelectItem>
			</Select>
			<Input
				className="md:w-1/2"
				aria-label="Search"
				classNames={{
					inputWrapper: "bg-default-100",
					input: "text-sm",
				}}
				endContent={
					<Kbd
						className="hidden lg:inline-block"
						keys={["command"]}>
						K
					</Kbd>
				}
				labelPlacement="outside"
				placeholder="Search..."
				startContent={<Search size={18} />}
				type="search"
				//@ts-ignore
				onChange={(e) => setValue(e.target.value)}
			/>
		</>
	);
}
