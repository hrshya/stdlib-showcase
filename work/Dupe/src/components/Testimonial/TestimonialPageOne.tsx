import Testimonial from '../Testimonial'
import ReviewCarousel from '../ReviewCarousel'
import VideoCarousel from '../VideoCarousel'
import Footer from '../Footer'

function TestimonialPageOne() {
  return (
    <div>
        <Testimonial />
        <div >
          <ReviewCarousel />
        </div>
        <div className='h-[300vw] absolute bottom-0'>
          <VideoCarousel />
        </div>
        <Footer />
    </div>
  )
}

export default TestimonialPageOne