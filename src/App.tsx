import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Pricing from "./pages/services/Pricing";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";
import WebApplications from "./pages/services/WebApplications";
import MobileApplications from "./pages/services/MobileApplications";
import DesktopApplications from "./pages/services/DesktopApplications";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="/services/web-applications"
              element={<WebApplications />}
            />
            <Route
              path="/services/mobile-applications"
              element={<MobileApplications />}
            />
            <Route
              path="/services/desktop-applications"
              element={<DesktopApplications />}
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
