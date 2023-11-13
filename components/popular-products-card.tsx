"use client";
import React from "react";
import { Card, CardBody, CardFooter } from "@nextui-org/card";
import { Image } from "@nextui-org/image";

export default function PopularProductCard() {
	const list = [
		{
			title: "Orange",
			img: "/images/fruit-1.jpeg",
			price: "5.50",
		},
		{
			title: "Tangerine",
			img: "/images/fruit-2.jpeg",
			price: "3.00",
		},
		{
			title: "Raspberry",
			img: "/images/fruit-3.jpeg",
			price: "10.00",
		},
		{
			title: "Lemon",
			img: "/images/fruit-4.jpeg",
			price: "5.30",
		},
	];

	return (
		<div className="gap-2 grid grid-cols-2 sm:grid-cols-4">
			{list.map((item, index) => (
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
							alt={item.title}
							className="w-full object-cover h-[140px] md:h-60"
							src={item.img}
						/>
					</CardBody>
					<CardFooter className="text-sm justify-between">
						<b>{item.title}</b>
						<p className="font-agbalumo">
							Ksh:
							<span className="text-primary"> {item.price}</span>
						</p>
					</CardFooter>
				</Card>
			))}
		</div>
	);
}