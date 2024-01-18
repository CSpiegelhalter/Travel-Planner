import { LocationLabels, Attraction, LocationButtons } from '@/Types/types'
import {
  faCoffee,
  faBinoculars,
  faUtensils,
  faBeerMugEmpty,
  faTree,
  faShoppingCart,
} from '@fortawesome/free-solid-svg-icons'

export const sessionStoragePlacesKey = 'Places'

export const locationLabels: LocationLabels = {
  Shopping: ['clothing_store', 'shopping_mall'],
  Restaurants: ['cafe', 'restaurant'],
  Bars: ['bar', 'night_club'],
  Attractions: ['amusement_park', 'museum', 'park', 'tourist_attraction'],
  Cafes: [],
  Nature: [],
}

export const locationButtons: LocationButtons[] = [
  {
    name: 'Attractions',
    img: faBinoculars,
    alt: 'Attractions',
  },
  {
    name: 'Food',
    img: faUtensils,
    alt: 'Food',
  },
  {
    name: 'Nature',
    img: faTree,
    alt: 'Nature',
  },
  {
    name: 'Bars',
    img: faBeerMugEmpty,
    alt: 'Bars/Nightlife',
  },
  {
    name: 'Shops',
    img: faShoppingCart,
    alt: 'Shopping',
  },
]

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
