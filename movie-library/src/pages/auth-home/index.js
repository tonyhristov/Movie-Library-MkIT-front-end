import React from 'react'
import PageLayout from '../../components/page-layout'
import WelcomeAuth from '../../components/welcome-auth';
import FavouritesAuth from '../../components/favourites-auth';

const AuthHomePage = () => {
   return (
      <PageLayout>
            <WelcomeAuth/>
            <FavouritesAuth/>
      </PageLayout>
   )
}

export default AuthHomePage