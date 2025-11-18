import { Users, Target, Award, Lightbulb } from 'lucide-react';
import FeatureCard from '../components/FeatureCard';

export default function About() {
  return (
    <div className="pt-16">
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">About Naiyo24</h1>
            <p className="text-xl text-gray-600">
              We are a team of passionate professionals dedicated to delivering exceptional digital solutions that drive business growth and innovation.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Founded with a vision to transform businesses through technology, Naiyo24 has grown from a small startup to a trusted partner for companies worldwide. Our journey has been marked by innovation, dedication, and a relentless pursuit of excellence.
              </p>
              <p className="text-gray-600 mb-4">
                With over 200 successful projects and a 98% client satisfaction rate, we've proven our ability to deliver results that matter. Our team combines technical expertise with creative thinking to solve complex business challenges.
              </p>
              <p className="text-gray-600">
                Today, we continue to push boundaries, embracing new technologies and methodologies to ensure our clients stay ahead in the digital landscape.
              </p>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Our Team"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These core principles guide everything we do and shape the way we work with our clients.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              icon={<Users size={40} className="text-black" />}
              title="Client-Centric"
              description="We put our clients first, understanding their needs and exceeding their expectations in every project."
            />
            <FeatureCard
              icon={<Target size={40} className="text-black" />}
              title="Results-Driven"
              description="We focus on delivering measurable outcomes that contribute to our clients' business success."
            />
            <FeatureCard
              icon={<Award size={40} className="text-black" />}
              title="Quality Excellence"
              description="We maintain the highest standards in everything we create, never compromising on quality."
            />
            <FeatureCard
              icon={<Lightbulb size={40} className="text-black" />}
              title="Innovation"
              description="We embrace new technologies and creative solutions to solve complex challenges."
            />
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-8">
              <div className="text-5xl font-bold mb-2">200+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div className="p-8">
              <div className="text-5xl font-bold mb-2">50+</div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
            <div className="p-8">
              <div className="text-5xl font-bold mb-2">98%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Join Us on Our Journey</h2>
          <p className="text-lg text-gray-300">
            Whether you're looking to build a new digital product or transform your existing business, we're here to help you succeed.
          </p>
        </div>
      </section>
    </div>
  );
}
