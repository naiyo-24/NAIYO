import { Smartphone, Apple, Chrome, Zap, Users, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import FeatureCard from "../../components/FeatureCard";

export default function MobileApplications() {
  return (
    <div className="pt-16">
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6">Mobile Applications</h1>
              <p className="text-xl text-gray-600 mb-8">
                Native and cross-platform mobile solutions for iOS and Android
                with seamless performance.
              </p>
              <Link to="/contact">
                <Button variant="primary">Start Your Project</Button>
              </Link>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Mobile Development"
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
              Mobile Development Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Create powerful mobile experiences that engage users and drive
              business growth.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Apple size={40} className="text-black" />}
              title="iOS Development"
              description="Native iOS apps built with Swift for optimal performance on iPhones and iPads."
            />
            <FeatureCard
              icon={<Chrome size={40} className="text-black" />}
              title="Android Development"
              description="Native Android apps using Kotlin for seamless experience on all Android devices."
            />
            <FeatureCard
              icon={<Smartphone size={40} className="text-black" />}
              title="Cross-Platform"
              description="Single codebase for both iOS and Android using React Native or Flutter."
            />
            <FeatureCard
              icon={<Zap size={40} className="text-black" />}
              title="High Performance"
              description="Optimized for speed and efficiency to provide smooth user experience."
            />
            <FeatureCard
              icon={<Users size={40} className="text-black" />}
              title="User-Centric Design"
              description="Intuitive interfaces designed with your users in mind for maximum engagement."
            />
            <FeatureCard
              icon={<Shield size={40} className="text-black" />}
              title="Secure & Scalable"
              description="Built with security best practices and designed to grow with your business."
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
              We leverage the latest mobile development technologies and
              frameworks.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                "React Native",
                "Flutter",
                "Swift",
                "Kotlin",
                "Firebase",
                "Redux",
                "GraphQL",
                "REST API",
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
            Ready to Build Your Mobile App?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Let's turn your mobile app idea into reality with a solution that
            users will love.
          </p>
          <Link to="/contact">
            <Button variant="primary">Get Started Today</Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
