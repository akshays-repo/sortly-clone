CREATE TABLE IF NOT EXISTS "category" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	CONSTRAINT "category_name_unique" UNIQUE("name")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "folder" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" integer,
	"name" text NOT NULL,
	"description" text,
	"created_at" timestamp NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "item" (
	"id" serial PRIMARY KEY NOT NULL,
	"folder_id" integer,
	"item_name" text NOT NULL,
	"description" text,
	"quantity" integer,
	"price" integer
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "user" (
	"id" serial PRIMARY KEY NOT NULL,
	"username" text NOT NULL,
	"password" text NOT NULL,
	"email" text NOT NULL,
	CONSTRAINT "user_username_unique" UNIQUE("username"),
	CONSTRAINT "user_email_unique" UNIQUE("email")
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "folder" ADD CONSTRAINT "folder_user_id_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "item" ADD CONSTRAINT "item_folder_id_folder_id_fk" FOREIGN KEY ("folder_id") REFERENCES "public"."folder"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
