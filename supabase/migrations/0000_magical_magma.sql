CREATE TABLE "departures" (
	"id" serial PRIMARY KEY NOT NULL,
	"route_id" integer NOT NULL,
	"departure_time" time NOT NULL
);
--> statement-breakpoint
CREATE TABLE "routes" (
	"id" serial PRIMARY KEY NOT NULL,
	"external_id" varchar(20) NOT NULL,
	"name" varchar(100) NOT NULL,
	"trip_length" double precision NOT NULL,
	"departure_location" varchar(100) NOT NULL,
	"arrival_location" varchar(100) NOT NULL,
	"served_locations" jsonb NOT NULL,
	"observations" text
);
--> statement-breakpoint
CREATE TABLE "stops" (
	"id" serial PRIMARY KEY NOT NULL,
	"route_id" integer NOT NULL,
	"stop_name" varchar(100) NOT NULL,
	"is_departure" boolean DEFAULT false NOT NULL,
	"is_return" boolean DEFAULT false NOT NULL,
	"sequence_order" integer NOT NULL,
	"latitude" numeric(10, 7),
	"longitude" numeric(10, 7),
	"address" text,
	"description" text,
	"image_url" varchar(255)
);
--> statement-breakpoint
ALTER TABLE "departures" ADD CONSTRAINT "departures_route_id_routes_id_fk" FOREIGN KEY ("route_id") REFERENCES "public"."routes"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "stops" ADD CONSTRAINT "stops_route_id_routes_id_fk" FOREIGN KEY ("route_id") REFERENCES "public"."routes"("id") ON DELETE cascade ON UPDATE no action;