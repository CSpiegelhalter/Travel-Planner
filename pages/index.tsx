import LandingComponent from '@/components/LandingComponent';
import NavBar from '@/components/NavBar'
import { useUser } from '@auth0/nextjs-auth0/client'
import React, { useEffect, useState } from 'react'


function LandingPage() {

  

  return (
    <div>
      <LandingComponent />
    </div>
  );
}

export default LandingPage;