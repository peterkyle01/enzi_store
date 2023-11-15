"use client";
import React from "react";
import { Card, CardBody, CardFooter } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { useQuery } from "@tanstack/react-query";
import { ProductType } from "@/types";
import axios from "axios";

export default function PopularProductCard({
	products,
}: {
	products: ProductType[];
}) {
	return (
		<div className="gap-2 grid grid-cols-2 sm:grid-cols-4">
			{products.map((product, index) => (
				<Card
					shadow="sm"
					key={index}
					isPressable
					className="md:h-72"
					onPress={() => console.log("item pressed")}>
					<CardBody className="overflow-visible p-0">
						<Image
							shadow="sm"
							radius="lg"
							width="100%"
							alt={product.image!}
							className="w-full object-cover h-[140px] md:h-60"
							src={product.image!}
						/>
					</CardBody>
					<CardFooter className="text-sm justify-between">
						<b>{product.name}</b>
						<p className="font-agbalumo">
							Ksh:
							<span className="text-primary"> {product.price}</span>
						</p>
					</CardFooter>
				</Card>
			))}
		</div>
	);
}
