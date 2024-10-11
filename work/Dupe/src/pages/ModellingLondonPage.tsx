import Footer from "../components/Footer"
import ModellingPageFive from "../components/Modelling London/ModellingPageFive"
import ModellingPageFour from "../components/Modelling London/ModellingPageFour"
import ModellingPageOne from "../components/Modelling London/ModellingPageOne"
import ModellingPageSix from "../components/Modelling London/ModellingPageSix"
import ModellingPageThree from "../components/Modelling London/ModellingPageThree"
import ModellingPageTwo from "../components/Modelling London/ModellingPageTwo"
import Navbar from "../components/Navbar"


function ModellingLondonPage() {
  return (
    <div>
        <Navbar color="black" />
        <div className="pt-36">
            <ModellingPageOne />
            <ModellingPageTwo />
            <ModellingPageThree />
            <ModellingPageFour />
            <ModellingPageFive />
            <ModellingPageSix />
            <Footer />
        </div>
    </div>
  )
}

export default ModellingLondonPage