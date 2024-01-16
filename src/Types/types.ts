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

export interface Card extends locationObj {
  setIsOpen?: Function
  setShowInfo?: Function
  setLocationDetails?: Function
  setModalDisplay?: Function
  hideButtons?: boolean
  className?: string
  tripName?: string | any
}

export interface Modal {
  setIsOpen: Function
  setSelectedValue?: Function | any
}

export interface Dropdown {
  tripsList: string[]
}

export interface Location extends latLng {
  city: string
}

export interface latLng {
  lat: number
  lng: number
  city?: string
}
export interface HomeHeader {
  handleSavedTripsDisplay: Function
  user: any
  isLoaded: any
  city: string
  callback: Function
  locationHandler: Function
  displayHandler: Function
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

export interface locationObj {
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
  timeStamp?: number
}

export type LocalStorageKeyType = 'bucketList' | 'trips'