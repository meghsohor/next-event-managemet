import * as z from 'zod';

export const eventFormSchema = z
  .object({
    title: z.string().min(3, 'Title must be at least 3 characters'),
    description: z
      .string()
      .min(3, 'Description must be at least 3 characters')
      .max(400, 'Description must be less than 400 characters'),
    location: z
      .string()
      .min(3, 'Location must be at least 3 characters')
      .max(200, 'Location must be less than 400 characters'),
    imageUrl: z.string(),
    startDateTime: z.coerce
      .date()
      .refine((date) => date > new Date(), { message: 'Start date can only be in the future' }),
    endDateTime: z.coerce.date(),
    categoryId: z.string(),
    price: z.string(),
    isFree: z.boolean(),
    url: z.string().url(),
  })
  .refine((data) => data.endDateTime > data.startDateTime, {
    message: 'End date must be after start date',
    path: ['endDateTime'],
  });
