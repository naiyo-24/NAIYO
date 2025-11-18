import { Globe, Smartphone, Monitor, Database, Cloud, Palette } from 'lucide-react';
import ServiceCard from '../components/ServiceCard';

export default function Services() {
  return (
    <div className="pt-16">
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-gray-600">
              Comprehensive digital solutions tailored to meet your business needs and drive growth.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              icon={<Globe size={40} className="text-black" />}
              title="Web Development"
              description="Custom websites that convert visitors into customers with responsive design and SEO optimization."
              link="/services/web-applications"
            />
            <ServiceCard
              icon={<Smartphone size={40} className="text-black" />}
              title="Mobile Applications"
              description="Native and cross-platform mobile solutions for iOS and Android with seamless performance."
              link="/services/mobile-applications"
            />
            <ServiceCard
              icon={<Monitor size={40} className="text-black" />}
              title="Desktop Applications"
              description="Powerful desktop software solutions for Windows, macOS, and Linux platforms."
              link="/services/desktop-applications"
            />
            <ServiceCard
              icon={<Database size={40} className="text-black" />}
              title="Database Solutions"
              description="Scalable and secure database design, implementation, and optimization services."
            />
            <ServiceCard
              icon={<Cloud size={40} className="text-black" />}
              title="Cloud Services"
              description="Cloud infrastructure setup, migration, and management for optimal performance."
            />
            <ServiceCard
              icon={<Palette size={40} className="text-black" />}
              title="UI/UX Design"
              description="Beautiful and intuitive user interfaces that enhance user experience and engagement."
            />
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Our Process</h2>
            <p className="text-lg text-gray-600 mb-12">
              We follow a proven methodology to ensure successful project delivery.
            </p>
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  1
                </div>
                <h3 className="font-bold mb-2">Discovery</h3>
                <p className="text-sm text-gray-600">Understanding your needs and goals</p>
              </div>
              <div>
                <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  2
                </div>
                <h3 className="font-bold mb-2">Planning</h3>
                <p className="text-sm text-gray-600">Creating a detailed project roadmap</p>
              </div>
              <div>
                <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  3
                </div>
                <h3 className="font-bold mb-2">Development</h3>
                <p className="text-sm text-gray-600">Building your solution with precision</p>
              </div>
              <div>
                <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  4
                </div>
                <h3 className="font-bold mb-2">Launch</h3>
                <p className="text-sm text-gray-600">Delivering and supporting your product</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
