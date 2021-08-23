import React from 'react'
import PageLayout from '../../components/page-layout'
import WelcomeSearch from '../../components/welcome-search';
import YourFavourites from '../../components/your-favourites';

const HomePage = () => {
   return (
      <PageLayout>
            <WelcomeSearch/>

            <YourFavourites/>
      </PageLayout>
   )
}

export default HomePage