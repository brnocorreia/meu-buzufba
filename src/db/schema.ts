import {
  pgTable,
  serial,
  varchar,
  text,
  time,
  doublePrecision,
  boolean,
  integer,
  numeric,
  jsonb,
} from "drizzle-orm/pg-core";

export const routes = pgTable("routes", {
  id: serial("id").primaryKey(),
  externalId: varchar("external_id", { length: 20 }).notNull(),
  name: varchar("name", { length: 100 }).notNull(),
  tripLength: doublePrecision("trip_length").notNull(),
  departureLocation: varchar("departure_location", { length: 100 }).notNull(),
  arrivalLocation: varchar("arrival_location", { length: 100 }).notNull(),
  servedLocations: jsonb("served_locations").$type<string[]>().notNull(),
  observations: text("observations"),
});

export type InsertRoute = typeof routes.$inferInsert;
export type SelectRoute = typeof routes.$inferSelect;

export const departures = pgTable("departures", {
  id: serial("id").primaryKey(),
  routeId: integer("route_id")
    .notNull()
    .references(() => routes.id, { onDelete: "cascade" }),
  departureTime: time("departure_time").notNull(),
});

export type InsertDeparture = typeof departures.$inferInsert;
export type SelectDeparture = typeof departures.$inferSelect;

export const stops = pgTable("stops", {
  id: serial("id").primaryKey(),
  routeId: integer("route_id")
    .notNull()
    .references(() => routes.id, { onDelete: "cascade" }),
  stopName: varchar("stop_name", { length: 100 }).notNull(),
  isDeparture: boolean("is_departure").notNull().default(false),
  isReturn: boolean("is_return").notNull().default(false),
  sequenceOrder: integer("sequence_order").notNull(),

  // Geolocation data (optional)
  latitude: numeric("latitude", { precision: 10, scale: 7 }),
  longitude: numeric("longitude", { precision: 10, scale: 7 }),

  // Additional optional metadata
  address: text("address"),
  description: text("description"),
  imageUrl: varchar("image_url", { length: 255 }),
});

export type InsertStop = typeof stops.$inferInsert;
export type SelectStop = typeof stops.$inferSelect;
