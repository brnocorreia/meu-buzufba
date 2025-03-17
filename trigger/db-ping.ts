import { logger, schedules } from "@trigger.dev/sdk/v3";
import { config } from "dotenv";
import { sql } from "drizzle-orm";
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

config({ path: ".env" }); // or .env.local

const client = postgres(process.env.DATABASE_URL!, {
  prepare: false,
});
export const db = drizzle({ client });

export const dbPingTask = schedules.task({
  id: "db-ping-task",
  cron: "0 0 * * *",
  maxDuration: 60,
  run: async (payload, { ctx }) => {
    try {
      const startTime = Date.now();
      await db.execute(sql`SELECT 1`);
      const endTime = Date.now();
      const latency = endTime - startTime;

      logger.log("Database ping successful", {
        timestamp: payload.timestamp,
        latency,
      });
    } catch (error) {
      logger.error("Database ping failed", {
        timestamp: payload.timestamp,
        error: error instanceof Error ? error.message : "Unknown error",
      });
    }
  },
});
