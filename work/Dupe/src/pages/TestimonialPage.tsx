import Navbar from "../components/Navbar"
import TestimonialPageOne from "../components/Testimonial/TestimonialPageOne"


function TestimonialPage() {
  return (
    <div>
        <Navbar color="black" />
        <div className="pt-36">
            <TestimonialPageOne />
        </div>
    </div>
  )
}

export default TestimonialPage