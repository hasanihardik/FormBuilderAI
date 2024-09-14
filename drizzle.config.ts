import type { Config } from "drizzle-kit";

export default {
  schema: "./src/db/schema.ts",
  out: "./drizzle",
  driver: "pg",
  dbCredentials: {
    connectionString:
      process.env.DATABASE_URL ||
      process.env.AUTH_DRIZZLE_URL || "postgres://postgres:postgres@127.0.0.1:5432/db" || "postgres://postgres:postgres@localhost:5432/db",
  },
} satisfies Config;