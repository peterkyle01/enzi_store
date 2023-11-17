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
		"Cement",
		"SteelRods",
		"SteelBars",
		"Bolts&Nuts&Screws",
		"HingesAndTopers",
		"SandPaper",
		"Nails",
		"IronSheets",
		"PaintsAndCoating",
		"Glue",
		"Brushes",
		"Tools",
		"WooodAndTimber",
		"Welding",
		"Plumbing",
		"Pipes",
		"ElectricalWires",
		"BulbsAndHolders",
		"StichesAndBoxes",
		"Sockets",
		"JunctionsAndRoundBoxesAndCovers",
		"Breakers",
		"Tapes",
	]),
});

const a = typeof product.category
