import * as LucideIcons from "lucide-react";
import {
  Globe,
  Smartphone,
  Monitor,
  Database,
  Cloud,
  Palette,
} from "lucide-react";
import ServiceCard from "../components/ServiceCard";
import apiBaseUrl from "../apiBaseUrl";
import { useEffect, useState } from "react";

export default function Services() {
  const [extensiveServices, setExtensiveServices] = useState<any[]>([]);

  useEffect(() => {
    const apiUrl = `${apiBaseUrl}/service_master_miscservices`;
    fetch(apiUrl)
      .then((res) => {
        if (!res.ok) throw new Error("API error");
        return res.json();
      })
      .then((data) => setExtensiveServices(data))
      .catch((err) => {
        setExtensiveServices([]);
        console.error("Failed to fetch extensive services:", err);
      });
  }, []);

  return (
    <div className="pt-16">
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-gray-600">
              Comprehensive digital solutions tailored to meet your business
              needs and drive growth.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Dynamically render service cards from src/pages/services */}
            {[
              {
                title: "Web Development",
                description:
                  "Custom websites that convert visitors into customers with SEO optimization.",
                link: "/services/web-applications",
                icon: <Globe size={40} className="text-black" />,
              },
              {
                title: "Mobile Applications",
                description:
                  "Native and cross-platform mobile solutions for iOS and Android with seamless performance.",
                link: "/services/mobile-applications",
                icon: <Smartphone size={40} className="text-black" />,
              },
              {
                title: "Servers & Hosting",
                description:
                  "Reliable server setup, cloud hosting, and infrastructure management for your business.",
                link: "/services/servers-and-hosting",
                icon: <Monitor size={40} className="text-black" />,
              },
              {
                title: "Professional Email",
                description:
                  "Branded professional email solutions to enhance your business credibility.",
                link: "/services/professional-email",
                icon: <Database size={40} className="text-black" />,
              },
              {
                title: "Domain Registration",
                description:
                  "Secure your online identity with our hassle-free domain registration services.",
                link: "/services/domain-registration",
                icon: <Cloud size={40} className="text-black" />,
              },
              {
                title: "Marketing",
                description:
                  "Grow your business with our comprehensive marketing solutions, including digital campaigns and social media management.",
                link: "/services/marketing",
                icon: <Palette size={40} className="text-black" />,
              },
              {
                title: "Business Solution",
                description:
                  "Optimize your operations with our tailored business solutions, including process automation, ERP, and CRM systems.",
                link: "/services/business-solution",
                icon: <Monitor size={40} className="text-black" />,
              },
              {
                title: "Logo & Branding",
                description:
                  "Build a memorable brand identity with our logo design and branding services.",
                link: "/services/logo-branding",
                icon: <Palette size={40} className="text-black" />,
              },
              {
                title: "Company Incorporation",
                description:
                  "Start your business journey with our company incorporation services, ensuring legal compliance and smooth registration.",
                link: "/services/company-incorporation",
                icon: <Database size={40} className="text-black" />,
              },
              {
                title: "SEO",
                description:
                  "Boost your online visibility and rankings with our expert SEO services.",
                link: "/services/seo",
                icon: <Database size={40} className="text-black" />,
              },
              {
                title: "Market Research",
                description:
                  "Make informed decisions with our market research services, providing actionable insights and data-driven strategies.",
                link: "/services/market-research",
                icon: <Globe size={40} className="text-black" />,
              },
            ].map((service, idx) => (
              <div className="h-full min-h-[340px] flex">
                <ServiceCard
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  link={service.link}
                  className="h-full min-h-[340px] flex flex-col justify-between"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Extensive Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Our Extensive Services</h2>
            <p className="text-lg text-gray-600 mb-12">
              Explore our wide range of miscellaneous services designed to meet
              every business need.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {extensiveServices.length === 0 ? (
              <div className="col-span-3 text-center text-gray-500">
                No extensive services found.
              </div>
            ) : (
              extensiveServices.map((service, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center border border-gray-100 hover:shadow-xl transition-shadow duration-200"
                >
                  {/* Render Lucide icon based on service_logo text, fallback to Monitor */}
                  <div className="w-16 h-16 mb-4 bg-gray-200 rounded-full flex items-center justify-center text-gray-400">
                    {(() => {
                      const iconName =
                        service.service_logo &&
                        typeof service.service_logo === "string"
                          ? service.service_logo.trim()
                          : "Monitor";
                      const LucideIcon =
                        (
                          LucideIcons as unknown as Record<
                            string,
                            React.ComponentType<{
                              size?: number;
                              className?: string;
                            }>
                          >
                        )[iconName] || Monitor;
                      return <LucideIcon size={40} className="text-black" />;
                    })()}
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-center">
                    {service.sub_service ||
                      service.main_service ||
                      "Miscellaneous Service"}
                  </h3>
                  <p className="text-sm text-gray-600 mb-2 text-center">
                    {service.short_desc ||
                      service.long_desc ||
                      "No description available."}
                  </p>
                  <div className="w-full flex flex-col items-center mt-2">
                    <span className="text-xs text-gray-400">
                      Service ID: {service.service_id}
                    </span>
                    {service.service_charge !== undefined &&
                      service.service_charge !== null && (
                        <span className="text-xs text-green-600 font-semibold mt-1">
                          Charge: ₹{service.service_charge}
                        </span>
                      )}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Our Process</h2>
            <p className="text-lg text-gray-600 mb-12">
              We follow a proven methodology to ensure successful project
              delivery.
            </p>
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  1
                </div>
                <h3 className="font-bold mb-2">Discovery</h3>
                <p className="text-sm text-gray-600">
                  Understanding your needs and goals
                </p>
              </div>
              <div>
                <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  2
                </div>
                <h3 className="font-bold mb-2">Planning</h3>
                <p className="text-sm text-gray-600">
                  Creating a detailed project roadmap
                </p>
              </div>
              <div>
                <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  3
                </div>
                <h3 className="font-bold mb-2">Development</h3>
                <p className="text-sm text-gray-600">
                  Building your solution with precision
                </p>
              </div>
              <div>
                <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  4
                </div>
                <h3 className="font-bold mb-2">Launch</h3>
                <p className="text-sm text-gray-600">
                  Delivering and supporting your product
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
