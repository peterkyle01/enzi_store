import {
	mysqlTable,
	varchar,
	int,
	mysqlEnum,
	text,
} from "drizzle-orm/mysql-core";

export const product = mysqlTable("product", {
	id: int("id").primaryKey().autoincrement(),
	name: varchar("name", { length: 100 }),
	image: text("image"),
	price: int("price"),
	category: mysqlEnum("category", [
		"building",
		"plumbing",
		"cleaning",
		"electrical",
		"farming",
		"tools",
	]),
});
