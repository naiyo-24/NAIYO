import * as LucideIcons from "lucide-react";
import SubServiceCard from "../../components/SubServiceCard";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import apiBaseUrl from "../../apiBaseUrl";
import PricingCard, { PricingPlan } from "../../components/PricingCard";
import { useEffect, useState } from "react";

export default function WebApplications() {
  const [subServices, setSubServices] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchSubServices() {
      try {
        setLoading(true);
        setError(null);
        const apiUrl = `${apiBaseUrl}/service_master_web-development-services`;
        const res = await fetch(apiUrl);
        if (!res.ok) throw new Error("Failed to fetch sub services");
        const data = await res.json();
        setSubServices(data);
      } catch (err: any) {
        setError(err.message || "Unknown error");
      } finally {
        setLoading(false);
      }
    }
    fetchSubServices();
  }, []);

  // Dummy pricing data
  const pricingPlans: PricingPlan[] = [
    {
      name: "Basic",
      price: "$499",
      features: [
        { label: "Responsive Design", available: true },
        { label: "SEO Basics", available: true },
        { label: "Contact Form", available: true },
        { label: "Up to 5 Pages", available: true },
        { label: "E-commerce", available: false },
        { label: "Analytics Setup", available: false },
      ],
      buttonText: "Get Started",
      buttonUrl: "/contact",
    },
    {
      name: "Professional",
      price: "$999",
      features: [
        { label: "Responsive Design", available: true },
        { label: "Advanced SEO", available: true },
        { label: "Contact Form", available: true },
        { label: "Up to 15 Pages", available: true },
        { label: "E-commerce", available: true },
        { label: "Analytics Setup", available: true },
      ],
      popular: true,
      buttonText: "Get Started",
      buttonUrl: "/contact",
    },
    {
      name: "Enterprise",
      price: "Custom",
      features: [
        { label: "Unlimited Pages", available: true },
        { label: "Custom Features", available: true },
        { label: "API Integrations", available: true },
        { label: "Advanced Security", available: true },
        { label: "Priority Support", available: true },
        { label: "Dedicated Manager", available: true },
      ],
      buttonText: "Contact Us",
      buttonUrl: "/contact",
    },
  ];

  return (
    <div className="pt-0">
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 min-h-[calc(100vh-0px)] flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center w-full">
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
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold mb-4">What We Offer</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive web development services to help your business
              thrive online.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {loading ? (
              <div className="col-span-full text-center text-gray-500 py-8">
                Loading sub services...
              </div>
            ) : error ? (
              <div className="col-span-full text-center text-red-500 py-8">
                {error}
              </div>
            ) : subServices.length === 0 ? (
              <div className="col-span-full text-center text-gray-500 py-8">
                No sub services found.
              </div>
            ) : (
              subServices.map((service, idx) => {
                // Dynamic Lucide icon rendering (ESM safe)
                const iconName =
                  service.service_logo &&
                  typeof service.service_logo === "string"
                    ? service.service_logo.trim()
                    : "Monitor";
                const LucideIcon =
                  (
                    LucideIcons as unknown as Record<
                      string,
                      React.ComponentType<{ size?: number; className?: string }>
                    >
                  )[iconName] || LucideIcons.Monitor;
                return (
                  <SubServiceCard
                    key={service.service_id || idx}
                    icon={<LucideIcon size={32} className="text-black" />}
                    subService={
                      service.sub_service ||
                      service.main_service ||
                      "Web Service"
                    }
                    shortDesc={service.short_desc}
                    longDesc={service.long_desc}
                    serviceCharge={service.service_charge}
                    className="min-h-[220px]"
                  />
                );
              })
            )}
          </div>
        </div>
      </section>

      {/* PricingCard Section - Inserted below main service section */}
      <section className="py-20">
        <PricingCard plans={pricingPlans} />
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
