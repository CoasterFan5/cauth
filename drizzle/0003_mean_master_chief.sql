CREATE TABLE IF NOT EXISTS "databaseSchema"."sessions" (
	"id" serial PRIMARY KEY NOT NULL,
	"userId" integer,
	"sessionToken" varchar(256),
	"created" timestamp DEFAULT now() NOT NULL
);
