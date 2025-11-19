import { Users, Target, Award, Lightbulb } from "lucide-react";
import FeatureCard from "../components/FeatureCard";

export default function About() {
  return (
    <div className="pt-16">
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">About Naiyo24</h1>
            <p className="text-xl text-gray-600">
              We are a team of passionate professionals dedicated to delivering
              exceptional digital solutions that drive business growth and
              innovation.
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
                Founded with a vision to transform businesses through
                technology, Naiyo24 has grown from a small startup to a trusted
                partner for companies worldwide. Our journey has been marked by
                innovation, dedication, and a relentless pursuit of excellence.
              </p>
              <p className="text-gray-600 mb-4">
                With over 200 successful projects and a 98% client satisfaction
                rate, we've proven our ability to deliver results that matter.
                Our team combines technical expertise with creative thinking to
                solve complex business challenges.
              </p>
              <p className="text-gray-600">
                Today, we continue to push boundaries, embracing new
                technologies and methodologies to ensure our clients stay ahead
                in the digital landscape.
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

      {/* CEO's Message Section */}
      <section className="relative bg-gradient-to-br from-gray-100 to-gray-300 py-20">
        <div className="absolute inset-0 pointer-events-none z-0">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 900 400"
            preserveAspectRatio="none"
            style={{ position: "absolute", width: "100%", height: "100%" }}
          >
            <ellipse
              cx="700"
              cy="100"
              rx="180"
              ry="60"
              fill="#e5e7eb"
              opacity="0.22"
            />
            <ellipse
              cx="200"
              cy="300"
              rx="120"
              ry="40"
              fill="#d1d5db"
              opacity="0.15"
            />
          </svg>
        </div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-10 relative z-10">
          <div className="flex-shrink-0">
            <div className="relative">
              <img
                src="/assets/images/ceo.jpg"
                alt="CEO & Founder"
                className="rounded-2xl shadow-2xl w-[340px] h-[420px] object-cover border-4 border-white"
                style={{ filter: "drop-shadow(0 8px 32px rgba(0,0,0,0.18))" }}
              />
              <span className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-gray-600 to-black-500 text-white text-xs px-4 py-1 rounded-full shadow-lg font-semibold tracking-wide">
                CEO &amp; Founder
              </span>
            </div>
          </div>
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-2 text-gray-900 text-center md:text-left">
              CEO's Message
            </h2>
            <br></br>
            <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl p-10 relative border border-gray-200 w-full max-w-3xl mx-auto">
              <div className="absolute -top-8 left-8 w-14 h-14 bg-gray-200 rounded-full flex items-center justify-center shadow animate-bounce">
                <span className="text-4xl text-gray-400">&#8220;</span>
              </div>
              <p className="italic text-gray-800 mb-6 text-lg leading-relaxed">
                "Every great achievement begins with a bold vision. At Naiyo24,
                we turn vision into reality—one innovation at a time. Our
                journey is fueled by curiosity, creativity, and a relentless
                drive to empower businesses in the digital era."
              </p>
              <p className="text-gray-700 mb-6 text-base">
                As CEO, I am proud to lead a team that values integrity,
                collaboration, and excellence above all. We believe technology
                is not just about code—it's about people, impact, and lasting
                partnerships. Our mission is to help you grow, adapt, and thrive
                in a world of constant change.
              </p>
              <p className="text-gray-600 mb-6 text-sm">
                Thank you for trusting us with your dreams. Together, let's
                build a future where innovation knows no bounds.
              </p>
              <div className="absolute -bottom-8 right-8 w-14 h-14 bg-gray-200 rounded-full flex items-center justify-center shadow animate-bounce">
                <span className="text-4xl text-gray-400">&#8221;</span>
              </div>
              <div className="font-bold text-xl text-gray-900 mb-1 mt-8">
                Debasish Baidya
              </div>
              <div className="text-gray-700 font-medium mb-2">
                CEO &amp; Founder, Naiyo24
              </div>
              <div className="text-gray-400 text-sm mb-4">
                Technology enthusiast | Visionary leader | Digital
                transformation advocate
              </div>
              <div className="flex gap-4 mt-2 justify-center md:justify-start">
                <a
                  href="https://in.linkedin.com/company/naiyo24-official"
                  className="text-gray-400 hover:text-black"
                  aria-label="LinkedIn"
                >
                  <svg
                    width="28"
                    height="28"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.026-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.381-1.563 2.841-1.563 3.039 0 3.601 2.002 3.601 4.604v5.592z" />
                  </svg>
                </a>
                <a
                  href="https://x.com"
                  className="text-gray-400 hover:text-black"
                  aria-label="X"
                >
                  <svg
                    width="28"
                    height="28"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.53 3.5h3.47l-7.54 8.62 8.89 11.38h-7.02l-5.52-7.07-6.32 7.07h-3.48l8.06-9.02-8.62-10.98h7.09l4.97 6.37z" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/naiyo24_official/"
                  className="text-gray-400 hover:text-black"
                  aria-label="Instagram"
                >
                  <svg
                    width="28"
                    height="28"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.975.974 1.246 2.242 1.308 3.608.058 1.266.069 1.646.069 4.851s-.011 3.584-.069 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.975-2.242 1.246-3.608 1.308-1.266.058-1.646.069-4.85.069s-3.584-.011-4.85-.069c-1.366-.062-2.633-.334-3.608-1.308-.975-.974-1.246-2.242-1.308-3.608-.058-1.266-.069-1.646-.069-4.85s.011-3.584.069-4.851c.062-1.366.334-2.633 1.308-3.608.974-.974 2.242-1.246 3.608-1.308 1.266-.058 1.646-.069 4.85-.069zm0-2.163c-3.259 0-3.667.012-4.947.07-1.276.058-2.687.334-3.678 1.325-.991.991-1.267 2.402-1.325 3.678-.058 1.28-.07 1.688-.07 4.947s.012 3.667.07 4.947c.058 1.276.334 2.687 1.325 3.678.991.991 2.402 1.267 3.678 1.325 1.28.058 1.688.07 4.947.07s3.667-.012 4.947-.07c1.276-.058 2.687-.334 3.678-1.325.991-.991 1.267-2.402 1.325-3.678.058-1.28.07-1.688.07-4.947s-.012-3.667-.07-4.947c-.058-1.276-.334-2.687-1.325-3.678-.991-.991-2.402-1.267-3.678-1.325-1.28-.058-1.688-.07-4.947-.07zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
                  </svg>
                </a>
                <a
                  href="https://www.facebook.com/Naiyo24/"
                  className="text-gray-400 hover:text-black"
                  aria-label="Facebook"
                >
                  <svg
                    width="28"
                    height="28"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22.675 0h-21.35c-.733 0-1.325.592-1.325 1.326v21.348c0 .733.592 1.326 1.325 1.326h11.495v-9.294h-3.128v-3.622h3.128v-2.771c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.312h3.587l-.467 3.622h-3.12v9.294h6.104c.733 0 1.326-.593 1.326-1.326v-21.349c0-.733-.593-1.326-1.326-1.326z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These core principles guide everything we do and shape the way we
              work with our clients.
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
            Whether you're looking to build a new digital product or transform
            your existing business, we're here to help you succeed.
          </p>
        </div>
      </section>
    </div>
  );
}
