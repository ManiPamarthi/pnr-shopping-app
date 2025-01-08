import NotFound from '@/components/error/not-found';
import Header from '@/components/nav/header';
import React from 'react'

const WishListPage = () => {
  return (
    <div>
      <Header />
      <div>
        <NotFound />
      </div>
    </div>
  )
}

export default WishListPage;