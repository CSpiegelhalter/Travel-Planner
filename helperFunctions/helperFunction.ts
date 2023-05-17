export   function handleStateChange(event: any, param: any){
    param(event.target.value)
}

export  const callPointsOfInterestsApi = async (typeOfInterest: string,setPlacesInfo:any , setShowInfo: any, city: string) => {
    const params = {
      city: city,
      point: typeOfInterest,
    }
    const options = {
      method: 'POST',
      body: JSON.stringify(params),
    }
    const data = await fetch('/api/pointsOfInterest', options)
    console.log('bouta hit callback')
    setPlacesInfo(await data.json())
    setShowInfo(true)
  }


  async function setUserLocation(setLocation, setCity,FindLocation ) {
    const value: Location | undefined= await FindLocation
    if (!!value) {
      setLocation({ lat: value.lat, lng: value.lng })
      setCity(value.city)
    }
    else{
      setLocation({ lat: 51.5072, lng: 0.1276 })
    }
  }