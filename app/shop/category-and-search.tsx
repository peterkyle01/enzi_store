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
				defaultSelectedKeys={["Cement"]}
				onSelectionChange={(value) =>
					//@ts-ignore
					setCategory(value.anchorKey as ProductCategory)
				}>
				<SelectItem key={"Cement"}>Cement</SelectItem>
				<SelectItem key={"SteelRods"}>SteelRods</SelectItem>
				<SelectItem key={"SteelBars"}>SteelBars</SelectItem>
				<SelectItem key={"Bolts&Nuts&Screws"}>Bolts&Nuts&Screws</SelectItem>
				<SelectItem key={"HingesAndTopers"}>HingesAndTopers</SelectItem>
				<SelectItem key={"SandPaper"}>SandPaper</SelectItem>
				<SelectItem key={"Nails"}>Nails</SelectItem>
				<SelectItem key={"IronSheets"}>IronSheets</SelectItem>
				<SelectItem key={"PaintsAndCoating"}>PaintsAndCoating</SelectItem>
				<SelectItem key={"Glue"}>Glue</SelectItem>
				<SelectItem key={"Brushes"}>Brushes</SelectItem>
				<SelectItem key={"Tools"}>Tools</SelectItem>
				<SelectItem key={"WooodAndTimber"}>WooodAndTimber</SelectItem>
				<SelectItem key={"Welding"}>Welding</SelectItem>
				<SelectItem key={"Plumbing"}>Plumbing</SelectItem>
				<SelectItem key={"Pipes"}>Pipes</SelectItem>
				<SelectItem key={"ElectricalWires"}>ElectricalWires</SelectItem>
				<SelectItem key={"BulbsAndHolders"}>BulbsAndHolders</SelectItem>
				<SelectItem key={"StichesAndBoxes"}>StichesAndBoxes</SelectItem>
				<SelectItem key={"Sockets"}>Sockets</SelectItem>
				<SelectItem key={"JunctionsAndRoundBoxesAndCovers"}>
					JunctionsAndRoundBoxesAndCovers
				</SelectItem>
				<SelectItem key={"Breakers"}>Breakers</SelectItem>
				<SelectItem key={"Tapes"}>Tapes</SelectItem>
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
