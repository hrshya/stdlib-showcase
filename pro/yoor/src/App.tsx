import { useEffect, useRef } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import WorkPage from './pages/WorkPage';
import 'locomotive-scroll/dist/locomotive-scroll.css';

export default function App() {
  const scrollRef = useRef(null); 

  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll({
      // @ts-ignore
      el: scrollRef.current,
      smooth: true, 
    });

    return () => {
      if (locomotiveScroll) locomotiveScroll.destroy(); 
    };
  }, []);

  return (
    <div ref={scrollRef} data-scroll-container>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/work' element={<WorkPage />} />
          <Route path='/contact' element={<ContactPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
