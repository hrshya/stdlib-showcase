import Footer from "../components/Footer"
import HomePageEight from "../components/Home/HomePageEight"
import HomePageFive from "../components/Home/HomePageFive"
import HomePageFour from "../components/Home/HomePageFour"
import HomePageNine from "../components/Home/HomePageNine"
import HomePageSeven from "../components/Home/HomePageSeven"
import HomePageSix from "../components/Home/HomePageSix"
import HomePageTen from "../components/Home/HomePageTen"
import HomePageThree from "../components/Home/HomePageThree"
import HomePageTwo from "../components/Home/HomePageTwo"
import Navbar from "../components/Navbar"
import Carousel from "../components/ui/Carousel"

function HomePage() {
  return (
    <div className="w-full bg-red-500 h-screen">

        <div>
          <Navbar />
        </div>
        <div>
          <Carousel title={"Fast Track Your Modelling Career"} description={"All Types & Sizes Wanted For Modelling Work"} />
        </div>
        <HomePageTwo />
        <HomePageThree />
        <HomePageFour />
        <HomePageFive />
        <HomePageSix />
        <HomePageSeven />
        <HomePageEight />
        <HomePageNine />
        <HomePageTen />
        <Footer />
    </div>
  )
}

export default HomePage
