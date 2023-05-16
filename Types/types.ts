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
    email: any 
    user: number
    setIsOpen: Function
    setShowInfo: Function

  }

  export interface Dropdown {
    tripsList: string[]
  }