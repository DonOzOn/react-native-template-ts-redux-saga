import { z } from "zod";

export const userSchema = z.object({
  age: z.number().min(18, "err13").optional(),
  email: z.string().email("err12"),
  id: z.number(),
  isAdmin: z.boolean().default(false),
  name: z.string().min(2, "err1"),
});

export type User = z.infer<typeof userSchema>;
