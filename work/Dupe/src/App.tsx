import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ApplyHomePage from "./pages/ApplyHomePage";
import Services from "./pages/Services";
import BlogPage from "./pages/BlogPage";
import FAQpage from "./pages/FAQpage";
import TestimonialPage from "./pages/TestimonialPage";
import ModellingLondonPage from "./pages/ModellingLondonPage";
import AdvicePage from "./pages/AdvicePage";
import WebfolioPage from "./pages/WebfolioPage";
import AftercarePage from "./pages/AftercarePage";
import ZCardPage from "./pages/ZCardPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/apply" element={<ApplyHomePage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blogs" element={<BlogPage />} />
        <Route path="/faqs" element={<FAQpage />} />
        <Route path="/testimonial" element={<TestimonialPage />} />
        <Route path="/modelling-london" element={<ModellingLondonPage />} />
        <Route path="/advice-for-parents" element={<AdvicePage />} />
        <Route path="/webfolio" element={<WebfolioPage />} />
        <Route path="/aftercare-team" element={<AftercarePage />} />
        <Route path="/zcards" element={<ZCardPage />} />
      </Routes>
    </BrowserRouter>
  )
}