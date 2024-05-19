import z from 'zod';

export const formSchema = z.object({
  first_name: z.string(),
  last_name: z.string(),
  email: z.string().email(),
  device_number: z.coerce.number(),
});

export type TForm = z.infer<typeof formSchema>;
