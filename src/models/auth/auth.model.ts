import { z } from "zod";

export const AuthSchema = z.object({
  accessToken: z.string(), // JWT validation can be added if necessary
  email: z.string().email(), // Ensures it's a valid email
  firstName: z.string(),
  gender: z.enum(["male", "female", "other"]), // Adjust if needed
  id: z.number(),
  image: z.string().url(), // Ensures it's a valid URL
  lastName: z.string(),
  refreshToken: z.string(),
  username: z.string(),
});

// TypeScript type based on the schema
export type Auth = z.infer<typeof AuthSchema>;
