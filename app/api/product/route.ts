import { db } from "@/db";
import { product } from "@/db/schema";
import { ProductType } from "@/types";
import { eq } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
	const data = await db.select().from(product);

	return NextResponse.json(data);
}

export async function POST(request: NextRequest) {
	const productItem: ProductType = await request.json();

	await db.insert(product).values({
		name: productItem.name,
		image: productItem.image,
		price: productItem.price,
		category: productItem.category,
	});

	return NextResponse.json({ message: "posted" });
}

export async function DELETE(request: NextRequest) {
	const id = Number(request.nextUrl.searchParams.get("id"));

	await db.delete(product).where(eq(product.id, id));

	return NextResponse.json({ message: "deleted" });
}

