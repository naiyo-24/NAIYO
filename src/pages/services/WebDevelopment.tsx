import { Globe, Zap, Search, Shield, Smartphone, Code } from "lucide-react";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import FeatureCard from "../../components/FeatureCard";

export default function WebApplications() {
  return (
    <div className="pt-16">
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6">Web Development</h1>
              <p className="text-xl text-gray-600 mb-8">
                Custom websites that convert visitors into customers with
                responsive design and SEO optimization.
              </p>
              <Link to="/contact">
                <Button variant="primary">Start Your Project</Button>
              </Link>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Web Development"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">What We Offer</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive web development services to help your business
              thrive online.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Globe size={40} className="text-black" />}
              title="Responsive Design"
              description="Your website will look perfect on all devices, from smartphones to desktops."
            />
            <FeatureCard
              icon={<Zap size={40} className="text-black" />}
              title="Fast Performance"
              description="Optimized for speed to keep your visitors engaged and improve rankings."
            />
            <FeatureCard
              icon={<Search size={40} className="text-black" />}
              title="SEO Optimized"
              description="Built with search engines in mind to help you rank higher in search results."
            />
            <FeatureCard
              icon={<Shield size={40} className="text-black" />}
              title="Secure & Reliable"
              description="Industry-standard security practices to protect your site and user data."
            />
            <FeatureCard
              icon={<Smartphone size={40} className="text-black" />}
              title="Mobile-First"
              description="Designed for mobile users first, then enhanced for larger screens."
            />
            <FeatureCard
              icon={<Code size={40} className="text-black" />}
              title="Clean Code"
              description="Well-structured, maintainable code that's easy to update and scale."
            />
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-center">
              Our Technologies
            </h2>
            <p className="text-lg text-gray-600 mb-8 text-center">
              We use cutting-edge technologies to build modern, scalable web
              applications.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                "React",
                "Vue.js",
                "Next.js",
                "Node.js",
                "TypeScript",
                "Tailwind CSS",
                "MongoDB",
                "PostgreSQL",
              ].map((tech) => (
                <div
                  key={tech}
                  className="bg-white p-6 rounded-lg text-center font-semibold shadow-sm"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Build Your Website?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Let's discuss your project and create a website that drives results
            for your business.
          </p>
          <Link to="/contact">
            <Button variant="primary">Get Started Today</Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
