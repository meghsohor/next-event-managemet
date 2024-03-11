import { eventFormSchema } from "@/lib/event-form.validator";

export const headerLinks = [
  {
    label: 'Home',
    route: '/',
  },
  {
    label: 'Create Event',
    route: '/events/create',
  },
  {
    label: 'My Profile',
    route: '/profile',
  },
];

export const eventDefaultValues: typeof eventFormSchema._type = {
  title: '',
  description: '',
  location: '',
  imageUrl: '',
  startDateTime: new Date(),
  endDateTime: new Date(Date.now() + (1000 * 60 * 60)),
  categoryId: '',
  price: '',
  isFree: false,
  url: '',
};
