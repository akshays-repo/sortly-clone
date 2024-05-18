import { defineConfig } from "drizzle-kit";
export default defineConfig({
  dialect: "postgresql", // "mysql" | "sqlite"
  schema: "./app/db/schema.ts",
  out: "./drizzle",
  migrations: {
    table: "migrations_custom", // default `__drizzle_migrations`,
    schema: "public", // used in PostgreSQL only and default to `drizzle`
  },
  dbCredentials: {
    host: "127.0.0.1",
    port: 5432,
    user: "postgres",
    password: "postgres",
    database: "inventory",
  },
});
