"use client";
import React from "react";
import { Card, CardBody, CardFooter } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { ProductType } from "@/types";
import { useProductCategory } from "@/app/hooks/useProductCategory";

export default function ProductCard({ name, image, price }: ProductType) {
	const {category} = useProductCategory()
	return (
		<Card
			shadow="sm"
			isPressable
			className="md:h-72"
			onPress={() => console.log("item pressed")}>
			<CardBody className="overflow-visible p-0">
				{image && (
					<Image
						shadow="sm"
						radius="lg"
						width="100%"
						alt={image}
						className="w-full object-cover h-[140px] md:h-60"
						src={image}
					/>
				)}
			</CardBody>
			<CardFooter className="text-sm justify-between">
				<b>{name}</b>
				<p className="font-agbalumo">
					Ksh:
					<span className="text-primary"> {price}</span>
				</p>
			</CardFooter>
		</Card>
	);
}
