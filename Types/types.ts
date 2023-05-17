export interface Darkmode {
    darkmode: boolean,
    router: any
  }

  export interface ButtonProps  {
    handler?: any
    name: string
    value: string
    style?: React.CSSProperties
    disabled: any
  
  }
  
  export interface Card {
    name: string 
    rating: number
    address: string 
    lat:number
    lng: number
    attractionType: object
    ratingsCount:number
    setIsOpen: Function
    setShowInfo: Function

  }

  export interface Modal{
    setIsOpen: Function
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
  }