import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Globe, Smartphone, Rocket, Shield, Clock, Code } from "lucide-react";
import Button from "../components/Button";
import StatCard from "../components/StatCard";
import ServiceCard from "../components/ServiceCard";
import PartnerCard from "../components/PartnerCard";
import FeatureCard from "../components/FeatureCard";

export default function Home() {
  // Navigation arrows
  const scrollCarousel = (direction: "left" | "right") => {
    const carousel = carouselRef.current;
    if (!carousel) return;
    const scrollAmount = 220 * 2; // scroll 2 cards at a time
    if (direction === "left") {
      carousel.scrollLeft -= scrollAmount;
    } else {
      carousel.scrollLeft += scrollAmount;
    }
  };
  // Ref for carousel
  const carouselRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const scrollStep = 0.5; // slower speed
  const scrollInterval = 30; // ms

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;
    let direction: "right" | "left" = "right";
    const startScroll = () => {
      intervalRef.current = setInterval(() => {
        if (direction === "right") {
          if (
            carousel.scrollLeft + carousel.offsetWidth >=
            carousel.scrollWidth
          ) {
            direction = "left";
          } else {
            carousel.scrollLeft += scrollStep;
          }
        } else {
          if (carousel.scrollLeft <= 0) {
            direction = "right";
          } else {
            carousel.scrollLeft -= scrollStep;
          }
        }
      }, scrollInterval);
    };
    startScroll();
    const handleMouseEnter = () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
    const handleMouseLeave = () => {
      startScroll();
    };
    carousel.addEventListener("mouseenter", handleMouseEnter);
    carousel.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      carousel.removeEventListener("mouseenter", handleMouseEnter);
      carousel.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const partners = [
    {
      initial: "N",
      name: "Narii",
      description: "Fashion & Lifestyle",
      color: "#FF6B9D",
      website: "https://narii.com",
    },
    {
      initial: "S",
      name: "Siri Bill",
      description: "Payment Solutions",
      color: "#C0D957",
      website: "https://siribill.com",
    },
    {
      initial: "L",
      name: "Luriana 24",
      description: "Digital Marketing",
      color: "#5BC2E7",
      website: "https://luriana24.com",
    },
    {
      initial: "S",
      name: "Startivo",
      description: "Business Innovation",
      color: "#FF9B50",
      website: "https://startivo.com",
    },
    {
      initial: "D",
      name: "Digitezz",
      description: "Digital Transformation",
      color: "#DD6BDD",
      website: "https://digitezz.com",
    },
    {
      initial: "W",
      name: "Webii",
      description: "Web Solutions",
      color: "#4ECDC4",
      website: "https://webii.com",
    },
    {
      initial: "I",
      name: "added for test",
      description: "Web Solutions",
      color: "#4ECDC4",
      website: "https://testpartner.com",
    },
  ];

  return (
    <div className="pt-16">
      <section className="relative bg-gradient-to-br from-gray-50 to-gray-100 py-20 overflow-hidden">
        {/* Animated Diagonal Grid Background */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 1440 600"
            preserveAspectRatio="none"
            style={{ position: "absolute", width: "100%", height: "100%" }}
          >
            {[...Array(20)].map((_, i) => (
              <line
                key={i}
                x1={i * 80}
                y1={0}
                x2={i * 80 - 200}
                y2={600}
                stroke="#379854ff"
                strokeWidth="1"
                opacity="0.13"
              >
                <animate
                  attributeName="x1"
                  values={`${i * 80};${i * 80 + 40};${i * 80}`}
                  dur={`${6 + i * 0.5}s`}
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="x2"
                  values={`${i * 80 - 200};${i * 80 - 160};${i * 80 - 200}`}
                  dur={`${6 + i * 0.5}s`}
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="opacity"
                  values="0.13;0.25;0.13"
                  dur={`${3 + i * 0.3}s`}
                  repeatCount="indefinite"
                />
              </line>
            ))}
            {[...Array(20)].map((_, i) => (
              <line
                key={"r" + i}
                x1={0}
                y1={i * 30}
                x2={1440}
                y2={i * 30 + 200}
                stroke="#a59f9fff"
                strokeWidth="1"
                opacity="0.10"
              >
                <animate
                  attributeName="y1"
                  values={`${i * 30};${i * 30 + 20};${i * 30}`}
                  dur={`${5 + i * 0.4}s`}
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="y2"
                  values={`${i * 30 + 200};${i * 30 + 220};${i * 30 + 200}`}
                  dur={`${5 + i * 0.4}s`}
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="opacity"
                  values="0.10;0.22;0.10"
                  dur={`${2.5 + i * 0.2}s`}
                  repeatCount="indefinite"
                />
              </line>
            ))}
          </svg>
        </div>
        <div className="relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                  Transform Your Business with{" "}
                  <span className="italic">Digital Excellence</span>
                </h1>
                <p className="text-lg text-gray-600 mb-8">
                  We craft innovative digital solutions that drive growth and
                  success for businesses of all sizes.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    to="/contact"
                    onClick={() =>
                      window.scrollTo({ top: 0, behavior: "smooth" })
                    }
                  >
                    <Button variant="primary">Get Started</Button>
                  </Link>
                  <Link
                    to="/services"
                    onClick={() =>
                      window.scrollTo({ top: 0, behavior: "smooth" })
                    }
                  >
                    <Button variant="secondary" showArrow>
                      Our Services
                    </Button>
                  </Link>
                </div>
                <div className="grid grid-cols-3 gap-8 mt-12">
                  <StatCard value="200+" label="Projects Completed" />
                  <StatCard value="98%" label="Client Satisfaction" />
                  <StatCard value="50+" label="Global Clients" />
                </div>
              </div>
              <div className="hidden md:block">
                {/* <div className="rounded-lg shadow-xl p-10"> */}
                <img
                  src="/assets/images/naiyo_black_nobg.png"
                  alt="Naiyo24 Logo"
                  className="rounded-lg object-contain p-1 mx-auto"
                  style={{ maxWidth: "1000px", height: "auto" }}
                />
                {/* </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-gray-600 mb-2">
              OUR PARTNER COMPANIES
            </p>
          </div>
          <div className="relative">
            <button
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow rounded-full p-2 hidden md:block"
              onClick={() => scrollCarousel("left")}
              aria-label="Scroll left"
            >
              <svg
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
            <div
              ref={carouselRef}
              className="overflow-x-auto scrollbar-hide"
              style={{
                scrollBehavior: "smooth",
                WebkitOverflowScrolling: "touch",
                msOverflowStyle: "none",
                scrollbarWidth: "none",
              }}
            >
              <div className="flex gap-6 min-w-max pb-2">
                {partners.map((partner) => (
                  <div className="min-w-[220px]">
                    <PartnerCard key={partner.name} {...partner} />
                  </div>
                ))}
              </div>
            </div>
            <button
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow rounded-full p-2 hidden md:block"
              onClick={() => scrollCarousel("right")}
              aria-label="Scroll right"
            >
              <svg
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
            <style>{`
              .scrollbar-hide::-webkit-scrollbar { display: none; }
              .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
            `}</style>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="text-sm font-semibold text-gray-600 mb-2">
              OUR SERVICES
            </p>
            <h2 className="text-4xl font-bold mb-4">
              Comprehensive digital solutions{" "}
              <span className="italic">tailored to your needs</span>
            </h2>
            <Link
              to="/services"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <Button variant="outline" showArrow>
                View All Services
              </Button>
            </Link>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <ServiceCard
              icon={<Globe size={40} className="text-black" />}
              title="Web Development"
              description="Custom websites that convert visitors into customers with responsive design and SEO optimization."
              link="/services/web-applications"
            />
            <ServiceCard
              icon={<Smartphone size={40} className="text-black" />}
              title="Mobile Apps"
              description="Native and cross-platform mobile solutions for iOS and Android with seamless performance."
              link="/services/mobile-applications"
            />
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="text-sm font-semibold text-gray-600 mb-2">
              WHY CHOOSE US
            </p>
            <h2 className="text-4xl font-bold mb-4">
              We deliver excellence{" "}
              <span className="italic">in every project</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl">
              Our team of experts is dedicated to providing top-notch digital
              solutions that drive results and exceed expectations.
            </p>
            <Link
              to="/about"
              className="inline-block mt-6"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <Button variant="secondary" showArrow>
                About Our Company
              </Button>
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            <FeatureCard
              icon={<Rocket size={40} className="text-black" />}
              title="Fast Delivery"
              description="Quick turnaround without compromising quality with our agile development process."
            />
            <FeatureCard
              icon={<Shield size={40} className="text-black" />}
              title="Secure Solutions"
              description="Enterprise-grade security protocols for your peace of mind and data protection."
            />
            <FeatureCard
              icon={<Clock size={40} className="text-black" />}
              title="24/7 Support"
              description="Round-the-clock assistance when you need it with our dedicated support team."
            />
            <FeatureCard
              icon={<Code size={40} className="text-black" />}
              title="Clean Code"
              description="Maintainable and scalable codebase with documented, optimized solutions."
            />
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Let's discuss how we can help transform your business with
            cutting-edge digital solutions.
          </p>
          <Link to="/contact">
            <Button
              variant="primary"
              className="bg-white text-black hover:bg-gray-100 border-2 border-white rounded-xl shadow-lg px-6 py-3 focus:outline-none focus:ring-2 focus:ring-white transition-all duration-200"
              style={{ color: "#111", background: "#fff" }}
            >
              Get In Touch
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
