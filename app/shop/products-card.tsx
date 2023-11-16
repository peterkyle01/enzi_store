"use client";
import React from "react";
import { Card, CardBody, CardFooter } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { ProductType } from "@/types";
import { useProductCategory } from "@/app/hooks/useProductCategory";
import { Minus, Plus } from "lucide-react";

export default function ProductCard({ name, image, price }: ProductType) {
	const { category } = useProductCategory();
	const quantity = 0;
	return (
		<Card
			shadow="sm"
			className="h-auto min-h-32 md:min-h-48">
			<CardBody className="overflow-visible p-0">
				{image && (
					<Image
						shadow="sm"
						radius="lg"
						width="100%"
						alt={image}
						className="w-full object-cover  h-24 md:h-40"
						src={image}
					/>
				)}
			</CardBody>
			<CardFooter className="text-xs justify-between h-auto flex flex-col gap-1">
				<span className="w-full h-auto flex items-center justify-between">
					<Minus
						className="bg-primary rounded-md"
						size={18}
						onClick={() => console.log("minus")}
					/>
					{quantity}
					<Plus
						className="bg-primary rounded-md"
						size={18}
						onClick={() => console.log("plus")}
					/>
				</span>
				<span className="w-full h-auto flex flex-col justify-center items-start sm:flex-row sm:justify-between">
					<p className="font-bold">{name}</p>
					<i>
						Ksh:
						<span className="text-primary"> {price}</span>
					</i>
				</span>
			</CardFooter>
		</Card>
	);
}
