import { Monitor, Layers, Database, Lock, Cog, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import FeatureCard from "../../components/FeatureCard";

export default function DesktopApplications() {
  return (
    <div className="pt-16">
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6">Desktop Applications</h1>
              <p className="text-xl text-gray-600 mb-8">
                Powerful desktop software solutions for Windows, macOS, and
                Linux platforms.
              </p>
              <Link to="/contact">
                <Button variant="primary">Start Your Project</Button>
              </Link>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Desktop Development"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Desktop Development Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Professional desktop applications tailored to your business needs.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Monitor size={40} className="text-black" />}
              title="Cross-Platform"
              description="Build once, deploy everywhere. Works seamlessly on Windows, macOS, and Linux."
            />
            <FeatureCard
              icon={<Layers size={40} className="text-black" />}
              title="Native Performance"
              description="Full access to system resources for maximum performance and capabilities."
            />
            <FeatureCard
              icon={<Database size={40} className="text-black" />}
              title="Offline Functionality"
              description="Work without internet connection with local data storage and sync."
            />
            <FeatureCard
              icon={<Lock size={40} className="text-black" />}
              title="Enhanced Security"
              description="Desktop-level security features to protect sensitive data and operations."
            />
            <FeatureCard
              icon={<Cog size={40} className="text-black" />}
              title="System Integration"
              description="Deep integration with operating system features and hardware."
            />
            <FeatureCard
              icon={<Zap size={40} className="text-black" />}
              title="High Performance"
              description="Optimized for complex operations and resource-intensive tasks."
            />
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-center">
              Technologies We Use
            </h2>
            <p className="text-lg text-gray-600 mb-8 text-center">
              We use modern frameworks and tools for desktop application
              development.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                "Electron",
                ".NET",
                "Qt",
                "JavaFX",
                "Python",
                "C++",
                "Rust",
                "Tauri",
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
            Ready to Build Your Desktop Application?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Let's create a powerful desktop solution that meets your specific
            business requirements.
          </p>
          <Link to="/contact">
            <Button variant="primary">Get Started Today</Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
