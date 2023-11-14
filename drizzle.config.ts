import type { Config } from "drizzle-kit";
import "dotenv/config";

export default {
	schema: "./db/schema.ts",
	driver: "mysql2",
	dbCredentials: {
		uri: process.env.DATABASE_URL as string,
	},
	breakpoints: true,
} satisfies Config;
