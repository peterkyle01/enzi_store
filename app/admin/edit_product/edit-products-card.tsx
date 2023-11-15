"use client";
import React from "react";
import { Card, CardBody, CardFooter } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { ProductType } from "@/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "sonner";
import { Button } from "@nextui-org/button";
import { Pen, X } from "lucide-react";

export default function EditProductCard({
	id,
	name,
	image,
	price,
}: ProductType) {
	const queryClient = useQueryClient();

	const { mutate } = useMutation({
		mutationKey: ["deletingMutationKey"],
		mutationFn: async (id: number) => {
			return await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/product?id=${id}`);
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["getProductsKey"] });
			toast.success(`${name} has been deleted successfully!`);
		},
		onError: () => {
			toast.error(`An Error occured deleting the product!.`);
		},
	});
	return (
		<div
			className="gap-1 overflow-y-scroll"
			key={id}>
			<Card
				shadow="sm"
				isPressable
				className="w-full md:h-40"
				onPress={() => console.log("item pressed")}>
				<CardBody className="overflow-visible p-0 relative">
					{image && (
						<>
							<div className="w-full flex gap-2 absolute z-20 justify-center pt-1">
								<Button size="sm" color="warning">
									<Pen size={15} />
								</Button>
								<Button
									size="sm"
                                    color="danger"
									onClick={() => {
										id && mutate(id);
									}}>
									<X size={18} />
								</Button>
							</div>
							<Image
								shadow="sm"
								radius="lg"
								width="100%"
								alt={image}
								src={image}
							/>
						</>
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
		</div>
	);
}
