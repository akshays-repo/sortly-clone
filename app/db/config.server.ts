import * as schema from "./schema";

import { drizzle } from "drizzle-orm/node-postgres";
import pg from "pg";

export const client = new pg.Client({
  host: "127.0.0.1",
  port: 5432,
  user: "postgres",
  password: "postgres",
  database: "inventory",
});

await client.connect();

export const db = drizzle(client, {
  schema: schema,
});
