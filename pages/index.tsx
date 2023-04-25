import Link from 'next/link';
import NavBar from '@/components/NavBar'
import { useUser } from '@auth0/nextjs-auth0/client'
import React, { useEffect, useState } from 'react'


function LandingPage() {

  

  return (
    <div>
      <h1>Welcome to the off the beaten path traveling assistant!</h1>
      <h3>click <Link href='/home'>here</Link> to get started</h3>
    </div>
  );
}

export default LandingPage;