import Navbar from '../components/Navbar'
import Featured from '../components/Featured'
import Footer from '../components/Footer'

function WorkPage() {
  return (
    <div>
        <div>
          <Navbar />
        </div>
        <div className='pt-10 xl:pt-16'>
          <Featured />
          <Footer />
        </div>
    </div>
  )
}

export default WorkPage