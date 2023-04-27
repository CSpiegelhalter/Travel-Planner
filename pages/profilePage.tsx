import NavBar from '@/components/NavBar'
import { useUser } from '@auth0/nextjs-auth0/client'
import React, { useEffect, useState } from 'react'
import { grabUserAttractions } from '@/helperFunctions/grabUserAttractions'
import { LocalStorageService } from '@/lib/localStorage'

function profilePage() {
  const [attractions, setAttractions] = useState([])
  const { user } = useUser()
  const userId: number = user?.['https://example.com/id'] as number



  useEffect( () => {
    grabUserAttractions(userId).then((data) => {
      setAttractions(data)
    })
  }, [])

  // const grabUserAttractions = async () => {
  //   const params = {
  //     userId: user?.['https://example.com/id']
  //   }
  //   const options = {
  //     method: 'POST',
  //     body: JSON.stringify(params)
  //   }
  //   const data = await fetch('/api/grabAttractionsFromDB', options)
  //   const attractionsArray = await data.json()
  //   setAttractions(attractionsArray)
  // }
  

  return (
    <div className="profile-page-container">
      <NavBar />

      <div>
        <h1>Welcome back, Brando!</h1>
      </div>
      <div className="profile-container">
        <div className="test">
          <h2>Saved locations: </h2>
          <ul>
          {attractions.length ? attractions.map((attractions, index) => (
                <li key = {index} ><ul>
                  <li>{attractions['name']}</li>
                  <li>{attractions['address']}</li>
                  <li>{attractions['rating']} (star symbol here)</li>
                  <li>Description will go here</li>
                  </ul> 
                  </li>
          )) : null}
          </ul>
        </div>
        <div className="test">
          <h2>My trips:</h2>
          <ul>
            <li>
              My first trip:
              <ul>
                <li>First item</li>
                <li>Second item</li>
              </ul>
            </li>
            <li>
              Second Trip:
              <ul>
                <li>Second trip item 1</li>
                <li>Second trip item 2</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-container">
        <h4>I am not sure what I would want to do with this or if it will stick</h4>
      </div>
    </div>
  )
}

export default profilePage
