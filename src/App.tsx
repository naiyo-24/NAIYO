import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";
import WebApplications from "./pages/services/WebDevelopment";
import MobileApplications from "./pages/services/AppDevelopment";
import BusinessSolution from "./pages/services/BusinessSolution";
import CompanyIncorporation from "./pages/services/CompanyIncorporation";
import DomainRegistration from "./pages/services/DomainRegistration";
import LogoBranding from "./pages/services/LogoBranding";
import MarketResearch from "./pages/services/MarketResearch";
import Marketing from "./pages/services/Marketing";
import ProfessionalEmail from "./pages/services/ProfessionalEmail";
import SEO from "./pages/services/SEO";
import ServersAndHosting from "./pages/services/ServersAndHosting";
import Careers from "./pages/Careers";

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
            <Route path="/careers" element={<Careers />} />
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
              path="/services/business-solution"
              element={<BusinessSolution />}
            />
            <Route
              path="/services/company-incorporation"
              element={<CompanyIncorporation />}
            />
            <Route
              path="/services/domain-registration"
              element={<DomainRegistration />}
            />
            <Route path="/services/logo-branding" element={<LogoBranding />} />
            <Route
              path="/services/market-research"
              element={<MarketResearch />}
            />
            <Route path="/services/marketing" element={<Marketing />} />
            <Route
              path="/services/professional-email"
              element={<ProfessionalEmail />}
            />
            <Route path="/services/seo" element={<SEO />} />
            <Route
              path="/services/servers-and-hosting"
              element={<ServersAndHosting />}
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
