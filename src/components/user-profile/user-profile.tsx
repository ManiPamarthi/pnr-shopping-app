import React from 'react'
import {
    SignInButton,
    SignedIn,
    SignedOut,
    UserButton
  } from '@clerk/nextjs'

const UserProfile = () => {
  return (
    <div>
        <header>
              <SignedOut>
                <SignInButton />
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>
            </header>
    </div>
  )
}

export default UserProfile;