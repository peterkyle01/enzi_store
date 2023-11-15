"use client";

import { useProductCategory } from "@/app/hooks/useProductCategory";

export default function CategoryHeading() {
	const { category } = useProductCategory();
	return <>{category ? category : "All Product"}</>;
}
