import Navbar from '../components/Navbar'
import About from '../components/About'
import Footer from '../components/Footer'

function AboutPage() {
  return (
    <div>
        <Navbar />
        <div className='pt-36'>
          <About />
          <Footer />
        </div>
    </div>
  )
}

export default AboutPage