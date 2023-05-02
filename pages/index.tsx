import LandingComponent from '@/components/LandingComponent';
import NavBar from '@/components/NavBar'
import { useUser } from '@auth0/nextjs-auth0/client'
import React, { useEffect, useState } from 'react'


function LandingPage() {

  

  return (
    <div className='landing-page-container'>
      <LandingComponent />
    </div>
  );
}

export default LandingPage;