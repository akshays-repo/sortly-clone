import {
  integer,
  pgTable,
  serial,
  text,
  timestamp,
} from "drizzle-orm/pg-core";

import { relations } from "drizzle-orm";

export const user = pgTable("user", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
  email: text("email").notNull().unique(),
  // Add other relevant user information here (types can be string, number, boolean, etc.)
});

// Define Category table schema
export const category = pgTable("category", {
  id: serial("id").primaryKey(),
  name: text("name").notNull().unique(),
});


export const folder = pgTable("folder", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").references(() => user.id),
  name: text("name").notNull(),
  description: text("description"),
  createdAt: timestamp("created_at").notNull(),
  // Add other relevant folder information here (types can be string, number, boolean, etc.)
});

export const folderRelations = relations(folder, ({ many }) => ({
  items: many(item),
}));

export const item = pgTable("item", {
  id: serial("id").primaryKey(),
  folderID: integer("folder_id").references(() => folder.id),
  itemName: text("item_name").notNull(),
  description: text("description"),
  quantity: integer("quantity"),
  price: integer("price"),
  // Add other relevant item information here (types can be string, number, boolean, etc.)
});
