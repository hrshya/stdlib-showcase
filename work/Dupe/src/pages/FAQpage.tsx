import FAQPageOne from "../components/FAQ/FAQPageOne"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"


function FAQpage() {
  return (
    <div>
        <Navbar color="black" />
        <div className="pt-36">
            <FAQPageOne />
            <Footer />
        </div>
    </div>
  )
}

export default FAQpage