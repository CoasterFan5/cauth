CREATE TABLE IF NOT EXISTS "databaseSchema"."emailLogs" (
	"id" serial PRIMARY KEY NOT NULL,
	"userId" integer,
	"email" varchar(256),
	"sent" timestamp DEFAULT now() NOT NULL
);
