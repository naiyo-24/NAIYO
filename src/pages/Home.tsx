import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Globe,
  Smartphone,
  ArrowRight,
  Rocket,
  Shield,
  Clock,
  Code,
} from "lucide-react";
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
        {/* Animated coding/IT themed background for hero section only, pastel greyscale */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <svg
            width="100%"
            height="100%"
            className="w-full h-full"
            style={{ position: "absolute", left: 0, top: 0 }}
          >
            <defs>
              <linearGradient id="codeGradient" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#e5e5e5" />
                <stop offset="100%" stopColor="#bdbdbd" />
              </linearGradient>
              <filter id="blur" x="-10%" y="-10%" width="120%" height="120%">
                <feGaussianBlur stdDeviation="8" />
              </filter>
            </defs>
            {[...Array(12)].map((_, i) => (
              <g
                key={i}
                style={{
                  animation: `floatCode${i} 8s ease-in-out infinite alternate`,
                }}
              >
                <text
                  x={80 + i * 90}
                  y={120 + (i % 2) * 60}
                  fontSize="54"
                  fontFamily="monospace"
                  fill="url(#codeGradient)"
                  filter="url(#blur)"
                  opacity="0.7"
                >
                  {"{"}
                </text>
                <text
                  x={120 + i * 90}
                  y={180 + ((i + 1) % 2) * 60}
                  fontSize="54"
                  fontFamily="monospace"
                  fill="url(#codeGradient)"
                  filter="url(#blur)"
                  opacity="0.7"
                >
                  {"<"}
                </text>
                <text
                  x={160 + i * 90}
                  y={120 + (i % 2) * 60}
                  fontSize="54"
                  fontFamily="monospace"
                  fill="url(#codeGradient)"
                  filter="url(#blur)"
                  opacity="0.7"
                >
                  {"/>"}
                </text>
                <text
                  x={200 + i * 90}
                  y={180 + ((i + 1) % 2) * 60}
                  fontSize="54"
                  fontFamily="monospace"
                  fill="url(#codeGradient)"
                  filter="url(#blur)"
                  opacity="0.7"
                >
                  {"}"}
                </text>
              </g>
            ))}
          </svg>
          <style>{`
            ${[...Array(12)]
              .map(
                (_, i) => `
              @keyframes floatCode${i} {
                0% { transform: translateY(0px); opacity: 0.6; }
                50% { transform: translateY(30px); opacity: 0.8; }
                100% { transform: translateY(0px); opacity: 0.6; }
              }
            `
              )
              .join("")}
          `}</style>
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
                  <Link to="/contact">
                    <Button variant="primary">Get Started</Button>
                  </Link>
                  <Link to="/services">
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
                <div className="bg-white rounded-lg shadow-xl p-8">
                  <img
                    src="https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Digital Excellence"
                    className="rounded-lg w-full"
                  />
                </div>
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
            <Link to="/services">
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
            <Link to="/about" className="inline-block mt-6">
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
              className="bg-white text-black hover:bg-gray-100"
            >
              Get In Touch
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
