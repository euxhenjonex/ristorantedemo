export interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  description: string;
  genre: string;
  artist?: string;
  featured?: boolean;
}

export const events: Event[] = [
  {
    id: 'ev1',
    title: 'Sunset Sessions',
    date: 'Every Friday',
    time: '18:00 - 23:00',
    description: 'Live acoustic sets as the sun dips below the Adriatic. Local and international artists, craft cocktails, golden hour vibes.',
    genre: 'Live Acoustic',
    artist: 'Rotating Artists',
    featured: true,
  },
  {
    id: 'ev2',
    title: 'Adriatic Nights',
    date: 'Every Saturday',
    time: '21:00 - 00:00',
    description: 'Deep house and chill electronic beats under the stars. Our resident DJ curates the perfect seaside soundtrack.',
    genre: 'Deep House',
    artist: 'DJ Malo',
  },
  {
    id: 'ev3',
    title: 'Sunday Jazz Brunch',
    date: 'Every Sunday',
    time: '10:00 - 14:00',
    description: 'Start your Sunday with smooth jazz, bottomless mimosas, and our special brunch menu by the sea.',
    genre: 'Jazz',
    artist: 'The Adriatic Quartet',
  },
  {
    id: 'ev4',
    title: 'Full Moon Party',
    date: 'Monthly',
    time: '20:00 - 00:00',
    description: 'A night of fire dancers, special cocktail menus, and eclectic beats under the full moon. An experience you won\'t forget.',
    genre: 'Eclectic',
    artist: 'Special Guests',
  },
];
