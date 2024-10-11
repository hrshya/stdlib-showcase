import ApplyPageFive from "../components/Apply Home/ApplyPageFive"
import ApplyPageFour from "../components/Apply Home/ApplyPageFour"
import ApplyPageThree from "../components/Apply Home/ApplyPageThree"
import ApplyPageTwo from "../components/Apply Home/ApplyPageTwo"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Carousel from "../components/ui/Carousel"


function ApplyHomePage() {
  return (
    <div>
        <Navbar />
        <Carousel title={"Don't Let Your Dreams Slip Away"} description={"Join the Ranks of Successful Models with Dupe Model"} />
        <ApplyPageTwo />
        <ApplyPageThree />
        <ApplyPageFour />
        <ApplyPageFive />
        <Footer />
    </div>
  )
}

export default ApplyHomePage