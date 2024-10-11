import AdvicePageOne from "../components/Advice/AdvicePageOne"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"


function AdvicePage() {
  return (
    <div>
        <Navbar color="black" />
        <div className="pt-36">
            <AdvicePageOne />
            <Footer />
        </div>
    </div>
  )
}

export default AdvicePage