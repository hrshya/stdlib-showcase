import AftercarePageFour from "../components/Aftercare/AftercarePageFour"
import AftercarePageOne from "../components/Aftercare/AftercarePageOne"
import AftercarePageThree from "../components/Aftercare/AftercarePageThree"
import AftercarePageTwo from "../components/Aftercare/AftercarePageTwo"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"


function AftercarePage() {
  return (
    <div>
        <Navbar color="black" />
        <div className="pt-36">
            <AftercarePageOne />
            <AftercarePageTwo />
            <AftercarePageThree />
            <AftercarePageFour />
            <Footer />
        </div>
    </div>
  )
}

export default AftercarePage