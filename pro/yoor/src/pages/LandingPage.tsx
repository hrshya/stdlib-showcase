import About from "../components/About";
import Eyes from "../components/Eyes";
import Featured from "../components/Featured";
import Footer from "../components/Footer";
import Landing from "../components/Landing";
import Marquee from "../components/Marquee";
import Navbar from "../components/Navbar";

function LandingPage() {
    return (
        <div className="w-full min-h-screen bg-[#F1F1F1]">
          <Navbar />
          <Landing />
          <Marquee />
          <About />
          <Eyes />
          <Featured />
          <Footer />
        </div>
      )
}

export default LandingPage