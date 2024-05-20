import z from 'zod';

export const formSchema = z.object({
  first_name: z.string({ required_error: 'First name is required!' }),
  last_name: z.string({ required_error: 'Last name is required!' }),
  email: z.string({ required_error: 'Email is required!' }).email(),
  device_number: z.number({
    required_error: 'Devices number is required!',
  }),
});

export type TForm = z.infer<typeof formSchema>;
