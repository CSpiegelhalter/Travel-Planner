import LandingComponent from '@/components/LandingComponent';
import NavBar from '@/components/NavBar'
import { useUser } from '@auth0/nextjs-auth0/client'
import React, { useEffect, useState } from 'react'


function LandingPage() {

  

  return (
    <div className='landing-page-container'>
      <style global jsx>{`
        html,
        body {
          background-image: url(/Background.jpg);
          width: 100%;
          height: 100%;
          background-size: cover;
          filter:contrast(120%) brightness(95%);
          margin-top: -1rem;
        }
`}</style>
      <LandingComponent />
    </div>
  );
}

export default LandingPage;