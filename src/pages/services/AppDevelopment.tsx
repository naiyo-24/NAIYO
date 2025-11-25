import * as LucideIcons from "lucide-react";
import SubServiceCard from "../../components/SubServiceCard";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import apiBaseUrl from "../../apiBaseUrl";
import PricingCard, { PricingPlan } from "../../components/PricingCard";
import { useEffect, useState } from "react";

export default function MobileApplications() {
  // State for sub-services
  const [subServices, setSubServices] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // State for pricing plans
  const [pricingPlans, setPricingPlans] = useState<PricingPlan[]>([]);
  const [pricingLoading, setPricingLoading] = useState(true);
  const [pricingError, setPricingError] = useState<string | null>(null);

  // Fetch sub-services
  useEffect(() => {
    async function fetchSubServices() {
      try {
        setLoading(true);
        setError(null);
        const apiUrl = `${apiBaseUrl}/service_master/mobile-application-services`;
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

  // Fetch pricing plans from backend API
  useEffect(() => {
    async function fetchPricingPlans() {
      try {
        setPricingLoading(true);
        setPricingError(null);
        // Fetch pricing data for 'Mobile Application Services'
        const apiUrl = `${apiBaseUrl}/pricing_master/mobile-application-services`;
        const res = await fetch(apiUrl);
        if (!res.ok) throw new Error("Failed to fetch pricing data");
        const data = await res.json();

        // Transform backend data to PricingPlan[]
        // Each service_pack_X is expected to be a JSON object with name, price, features, etc.
        if (Array.isArray(data) && data.length > 0) {
          const packs: PricingPlan[] = [];
          const record = data[0]; // Assuming only one record for 'Web Development Services'
          for (let i = 1; i <= 9; i++) {
            const pack = record[`service_pack_${i}`];
            if (pack && typeof pack === "object" && pack.name) {
              packs.push({
                name: pack.name,
                price: pack.price,
                features: Array.isArray(pack.features)
                  ? pack.features.map((f: any) => ({
                      label: f.label,
                      available: !!f.available,
                    }))
                  : [],
                popular: !!pack.popular,
                buttonText: pack.buttonText || "Get Started",
                buttonUrl: pack.buttonUrl || "/contact",
              });
            }
          }
          setPricingPlans(packs);
        } else {
          setPricingPlans([]);
        }
      } catch (err: any) {
        setPricingError(err.message || "Unknown error");
        setPricingPlans([]);
      } finally {
        setPricingLoading(false);
      }
    }
    fetchPricingPlans();
  }, []);

  return (
    <div className="pt-0">
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 min-h-[calc(100vh-0px)] flex items-center">
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
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold mb-4">What We Offer</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Create powerful mobile experiences that engage users and drive
              business growth.
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
                      "Mobile Service"
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

      {/* PricingCard Section - Real-time data from backend */}
      <section className="py-20">
        {pricingLoading ? (
          <div className="text-center text-gray-500 py-8">
            Loading pricing...
          </div>
        ) : pricingError ? (
          <div className="text-center text-red-500 py-8">{pricingError}</div>
        ) : pricingPlans.length === 0 ? (
          <div className="text-center text-gray-500 py-8">
            No pricing plans found.
          </div>
        ) : (
          <PricingCard
            plans={pricingPlans.map((plan) => {
              const buttonText =
                plan.price === "Custom" ? "Contact Us" : "Contact Us"; //Change this to Get Started when needed
              return {
                ...plan,
                buttonText,
                buttonUrl:
                  buttonText === "Contact Us"
                    ? "/contact"
                    : `/service-requirement-form?serviceType=Web Development Services`,
                onClick: () => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                },
              };
            })}
          />
        )}
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
