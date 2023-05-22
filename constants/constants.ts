import { LocationLabels, Attraction } from '@/Types/types'

export const locationLabels: LocationLabels = {
  Shopping: ['clothing_store', 'shopping_mall'],
  Restaurants: ['cafe', 'restaurant'],
  Bars: ['bar', 'night_club'],
  Attractions: ['amusement_park', 'museum', 'park', 'tourist_attraction'],
}

export const libraries: Array<'places'> = ['places']

export const exampleAttractions: Attraction[] = [
  {
    src: '/cat.webp',
    name: 'KattenKabinet',
    location: 'Amsterdam, Netherlands',
    alt: 'Museum dedicated to cat art',
  },
  {
    src: '/iceburgBar.webp',
    name: 'Berlin Icebar',
    location: 'Berlin, Germany',
    alt: 'Bar made out of ice!',
  },
  {
    src: '/truliHouses.webp',
    name: 'Trulli di Alberobello Puglia',
    location: 'Bari, Italy',
    alt: 'Historic homes with a unique shape',
  },
  {
    src: '/ufo.webp',
    name: 'The UFO Hotel',
    location: 'Harads, Sweden',
    alt: 'A UFO hotel',
  },
  {
    src: '/diving.webp',
    name: 'Landschaftspark Diving',
    location: 'Duisburg, Germany',
    alt: 'Scuba diving',
  },
]
