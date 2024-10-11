import BlogPageOne from '../components/Blogs/BlogPageOne'
import BlogPageTwo from '../components/Blogs/BlogPageTwo'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'


function BlogPage() {
  return (
    <div>
        <Navbar color='black' />
        <div className='pt-36'>
            <BlogPageOne />
            <BlogPageTwo />
            <Footer />
        </div>
    </div>
  )
}

export default BlogPage