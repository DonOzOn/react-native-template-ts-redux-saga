import { z } from 'zod';

export const countrySchema = z.object({
    code: z.string(),
    emoji: z.string(),
    name: z.string(),
  });
  
  export const countryListSchema = z.object({
    countries: z.array(countrySchema),
  });
  
  export type Country = z.infer<typeof countrySchema>;
  export type CountryList = z.infer<typeof countryListSchema>;
  