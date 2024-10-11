import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import PageOne from "../components/Services/PageOne"
import PageThree from "../components/Services/PageThree"
import PageTwo from "../components/Services/PageTwo"


function Services() {
  return (
    <div>
        <div>
            <Navbar color="black" />
        </div>
        <div>
            <PageOne />
        </div>
        <div>
            <PageTwo />
        </div>
        <div>
            <PageThree />
        </div>
        <div className="absolute top-[410vh] md:top-[355vw] xl:top-[290vw]">
            <Footer />
        </div>
    </div>
  )
}

export default Services