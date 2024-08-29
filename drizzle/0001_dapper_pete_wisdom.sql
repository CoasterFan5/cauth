CREATE TABLE IF NOT EXISTS "databaseSchema"."emailVerificationTokens" (
	"id" serial PRIMARY KEY NOT NULL,
	"token" varchar(256),
	"userId" integer,
	"created" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "databaseSchema"."users" ADD COLUMN "email" varchar(256);--> statement-breakpoint
ALTER TABLE "databaseSchema"."users" ADD COLUMN "verifiedEmail" boolean;--> statement-breakpoint
ALTER TABLE "databaseSchema"."users" ADD CONSTRAINT "users_email_unique" UNIQUE("email");