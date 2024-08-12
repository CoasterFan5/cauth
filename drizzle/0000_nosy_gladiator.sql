CREATE SCHEMA "databaseSchema";
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "databaseSchema"."users" (
	"id" serial PRIMARY KEY NOT NULL,
	"firstName" varchar(256),
	"lastName" varchar(256),
	"hash" varchar(256),
	"salt" varchar(256)
);
