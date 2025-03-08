"use server";

import { db } from "@/db";
import { allowedEmails } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function isEmailAllowed(email: string): Promise<boolean> {
  try {
    const result = await db
      .select({ email: allowedEmails.email })
      .from(allowedEmails)
      .where(eq(allowedEmails.email, email))
      .limit(1);

    return result.length > 0;
  } catch (error) {
    console.error("Error checking email:", error);
    return false;
  }
}
