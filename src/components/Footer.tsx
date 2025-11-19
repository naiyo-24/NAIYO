import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <span className="text-xl font-bold mb-4 block">
              Our Mission and Vision
            </span>
            <p className="text-gray-400 text-sm">
              We craft innovative digital solutions that drive growth and
              success for businesses of all sizes.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about"
                  className="text-gray-400 hover:text-white transition-colors"
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-400 hover:text-white transition-colors"
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/pricing"
                  className="text-gray-400 hover:text-white transition-colors"
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  to="/testimonials"
                  className="text-gray-400 hover:text-white transition-colors"
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                >
                  Testimonials
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/services/web-applications"
                  className="text-gray-400 hover:text-white transition-colors"
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                >
                  Web Development
                </Link>
              </li>
              <li>
                <Link
                  to="/services/mobile-applications"
                  className="text-gray-400 hover:text-white transition-colors"
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                >
                  Mobile Apps
                </Link>
              </li>
              <li>
                <Link
                  to="/services/desktop-applications"
                  className="text-gray-400 hover:text-white transition-colors"
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                >
                  Desktop Apps
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <Mail size={18} className="mt-1 text-gray-400" />
                <span className="text-gray-400">office@naiyo24.com</span>
              </li>
              <li className="flex items-start space-x-2">
                <Phone size={18} className="mt-1 text-gray-400" />
                <span className="text-gray-400">+91 6289171798</span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin size={18} className="mt-1 text-gray-400" />
                <span className="text-gray-400">
                  1/30 Chittaranjan Colony, Baghajatin Kolkata- 700032
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <span className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()}
            </span>
            <span className="flex items-center gap-2">
              <img
                src="/assets/images/naiyo24_logo.jpeg"
                alt="Naiyo24 Logo"
                className="w-8 h-8 rounded object-cover"
              />
              <span className="text-base font-bold text-white">
                Naiyo24 Pvt Ltd
              </span>
            </span>
            <span className="text-gray-400 text-sm">All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
