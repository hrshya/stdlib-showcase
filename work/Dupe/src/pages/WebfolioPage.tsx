import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import WebfolioPageFive from "../components/Webfolio/WebfolioPageFive"
import WebfolioPageFour from "../components/Webfolio/WebfolioPageFour"
import WebfolioPageOne from "../components/Webfolio/WebfolioPageOne"
import WebfolioPageSix from "../components/Webfolio/WebfolioPageSix"
import WebfolioPageThree from "../components/Webfolio/WebfolioPageThree"
import WebfolioPageTwo from "../components/Webfolio/WebfolioPageTwo"

function WebfolioPage() {
  return (
    <div>
        <Navbar color="black" />
        <div className="pt-36">
            <WebfolioPageOne />
            <WebfolioPageTwo />
            <WebfolioPageThree />
            <WebfolioPageFour />
            <WebfolioPageFive />
            <WebfolioPageSix />
            <Footer />
        </div>
    </div>
  )
}

export default WebfolioPage