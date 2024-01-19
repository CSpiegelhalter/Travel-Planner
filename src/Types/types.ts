import type { NextRouter } from 'next/router'
import { CSSProperties } from 'react'

export interface Darkmode {
  darkmode: boolean
  router: any
}

export interface ButtonProps {
  img?: string
  alt?: string
  handler?: any
  name: string
  value: string
  style?: any
  disabled: any
  params?: any
  buttonText?: string
}

export interface MoreInfoModal {
  selectedLocation: Location
  populateModal: Function
}

export interface Modal {
  setIsOpen: Function
  setSelectedValue?: Function | any
}

export interface Dropdown {
  tripsList: string[]
}

export interface latLng {
  lat: number
  lng: number
  city?: string
}
export interface HomeHeader {
  user: any
  isLoaded: boolean
  setUserLocation: Function
}
export interface PointsOfInterestApiParams {
  city?: string
  typeOfInterest?: string
  callback?: Function
}

export interface LocationButtons {
  name: string
  img: any
  alt: string
}

export interface LocationLabels {
  Shopping: string[]
  Restaurants: string[]
  Bars: string[]
  Attractions: string[]
  Cafes: any
  Nature: any
}

export interface RouterProps {
  router: NextRouter
}

export interface Attraction {
  src: string
  name: string
  location: string
  alt: string
}

export interface SmallCardProps {
  attraction: Attraction
}

export interface ScrollableProps {
  pictureArray: Attraction[]
}

export interface HandlerProps {
  handler: Function
}

export interface HandlerAndRouter {
  handler: Function
  router: NextRouter
}

export interface NavigationButtonProps {
  displayText: string
  href: string
  textStyle?: CSSProperties
}

export interface NavBarProps {
  map: boolean
  trips: boolean
  bucketList: boolean
  profile: boolean
}

export interface Location {
  id: string
  imageUrl: string
  name: string | any
  rating: number | string
  address: string
  lat: number | string
  lng: number | string
  attractionType: string
  reviewCount: string
  descriptionShort: string
  descriptionLong?: string
  userId?: number
}

export type LocalStorageKeyType = 'bucketList' | 'trips'
