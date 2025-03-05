import { z } from "zod";

export const authSchema = z.object({
  accessToken: z.string().optional(), // JWT validation can be added if necessary
  email: z.string().email().optional(), // Ensures it's a valid email
  firstName: z.string().optional(),
  gender: z.enum(["male", "female", "other"]).optional(), // Adjust if needed
  id: z.number().optional(),
  image: z.string().url().optional(), // Ensures it's a valid URL
  lastName: z.string().optional(),
  refreshToken: z.string().optional(),
  username: z.string().optional(),
});

// TypeScript type based on the schema
export type Auth = z.infer<typeof authSchema>;
