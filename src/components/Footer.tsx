import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import apiBaseUrl from "../apiBaseUrl";

export default function Footer() {
  const [info, setInfo] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(`${apiBaseUrl}/about_naiyo`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch company info");
        return res.json();
      })
      .then((data) => {
        setInfo(data && data.length > 0 ? data[0] : null);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <span className="text-xl font-bold mb-4 block">
              Our Mission and Vision
            </span>
            {loading ? (
              <p className="text-gray-400 text-sm">Loading...</p>
            ) : error ? (
              <p className="text-red-400 text-sm">{error}</p>
            ) : info ? (
              <>
                <p className="text-gray-400 text-sm mb-2">
                  <span className="font-semibold text-white"> </span>{" "}
                  {info.mission}
                </p>
                <p className="text-gray-400 text-sm mb-2">
                  <span className="font-semibold text-white"> </span>{" "}
                  {info.vision}
                </p>
                {/* <p className="text-gray-400 text-sm">{info.about_us}</p> */}
              </>
            ) : (
              <p className="text-gray-400 text-sm">No info available.</p>
            )}
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
            {loading ? (
              <ul className="space-y-3">
                <li className="text-gray-400 text-sm">Loading...</li>
              </ul>
            ) : error ? (
              <ul className="space-y-3">
                <li className="text-red-400 text-sm">{error}</li>
              </ul>
            ) : info ? (
              <ul className="space-y-3">
                <li className="flex items-start space-x-2">
                  <Mail size={18} className="mt-1 text-gray-400" />
                  <span className="text-gray-400">{info.email}</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Phone size={18} className="mt-1 text-gray-400" />
                  <span className="text-gray-400">{info.phone}</span>
                </li>
                {info.landline && (
                  <li className="flex items-start space-x-2">
                    <Phone size={18} className="mt-1 text-gray-400" />
                    <span className="text-gray-400">{info.landline}</span>
                  </li>
                )}
                <li className="flex items-start space-x-2">
                  <MapPin size={18} className="mt-1 text-gray-400" />
                  <span className="text-gray-400">{info.address}</span>
                </li>
                {info.website && (
                  <li className="flex items-start space-x-2">
                    <span className="text-gray-400 font-semibold">
                      Website:
                    </span>
                    <a
                      href={info.website}
                      className="text-blue-400 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {info.website}
                    </a>
                  </li>
                )}
                {/* {info.business_hours && (
                  <li className="flex items-start space-x-2">
                    <span className="text-gray-400 font-semibold">
                      Business Hours:
                    </span>
                    <span className="text-gray-400">{info.business_hours}</span>
                  </li>
                )} */}
              </ul>
            ) : (
              <ul className="space-y-3">
                <li className="text-gray-400 text-sm">
                  No contact info available.
                </li>
              </ul>
            )}
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
