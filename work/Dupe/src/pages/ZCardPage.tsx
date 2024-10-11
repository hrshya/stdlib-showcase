import React from 'react'
import Navbar from '../components/Navbar'
import ZCardPageOne from '../components/ZCard/ZCardPageOne'
import ZCardPageTwo from '../components/ZCard/ZCardPageTwo'
import ZCardPageThree from '../components/ZCard/ZCardPageThree'
import ZCardPageFour from '../components/ZCard/ZCardPageFour'
import HomePageTen from '../components/Home/HomePageTen'
import Footer from '../components/Footer'

function ZCardPage() {
  return (
    <div>
        <Navbar color='black' />
        <div className='pt-36'>
            <ZCardPageOne />
            <ZCardPageTwo />
            <ZCardPageThree />
            <ZCardPageFour />
            <HomePageTen />
            <Footer />
        </div>
    </div>
  )
}

export default ZCardPage