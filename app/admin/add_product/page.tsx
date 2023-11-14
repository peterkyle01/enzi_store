"use client";
import { useState } from "react";
import { Button } from "@nextui-org/button";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { Input } from "@nextui-org/input";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { ProductCategory, ProductType } from "@/types";
import { UploadButton } from "@/utils/uploadthing";
import { Select, SelectItem } from "@nextui-org/select";

export default function AddProduct() {
	const [name, setName] = useState("");
	const [price, setPrice] = useState(0);
	const [image, setImage] = useState("");
	const [category, setCategory] = useState<ProductCategory>("tools");

	const { mutate, isPending } = useMutation({
		mutationKey: ["savingMutationKey"],
		mutationFn: async (product: ProductType) => {
			return await axios.post(
				`${process.env.NEXT_PUBLIC_API_URL}/product`,
				product
			);
		},
		
		onSuccess: () => {
			toast.success(" Product has been saved successfully!");
		},
		onError: () => {
			toast.error("An Error occured while adding product!");
		},
	});

	return (
		<div className="w-full md:w-1/2 h-full">
			<Card>
				<CardHeader>
					<CardHeader>Add Product</CardHeader>
				</CardHeader>
				<CardBody className="space-y-1">
					<UploadButton
						endpoint="imageUploader"
						onClientUploadComplete={(files) => {
							files && setImage(files[0].url);
							toast.success("Upload Completed");
						}}
						onUploadError={(error: Error) => {
							toast.error(`ERROR! ${error.message}`);
						}}
					/>
					<div className="space-y-2">
						<label htmlFor="name">Name:</label>
						<Input
							id="name"
							placeholder="Mabati..."
							value={name}
							onChange={(e: any) => setName(e.target.value)}
						/>
					</div>
					<div className="space-y-2">
						<label htmlFor="price">Price:</label>
						<input
							id="price"
							type="number"
							placeholder="500"
							value={price}
							onChange={(e: any) => setPrice(e.target.value)}
						/>
					</div>
					<div className="space-y-2">
						<Select
							label="Categories"
							placeholder="Select a category"
							selectionMode="single"
							className="max-w-xs"
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
					</div>
				</CardBody>
				<CardFooter>
					<Button
						onClick={() => {
							mutate({ name, image, price, category });
						}}>
						Save
					</Button>
				</CardFooter>
			</Card>
		</div>
	);
}
