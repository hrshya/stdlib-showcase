import LocomotiveScroll from 'locomotive-scroll';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import WorkPage from './pages/WorkPage';


export default function App() {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <LandingPage /> } />
        <Route path='/about' element={ <AboutPage /> } />
        <Route path='/work' element={ <WorkPage /> } />
        <Route path='/contact' element={ <ContactPage /> } />
      </Routes>
    </BrowserRouter>
  )
}