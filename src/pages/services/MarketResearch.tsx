import * as LucideIcons from "lucide-react";
import SubServiceCard from "../../components/SubServiceCard";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import apiBaseUrl from "../../apiBaseUrl";
import { useEffect, useState } from "react";

export default function MarketResearch() {
  const [subServices, setSubServices] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchSubServices() {
      try {
        setLoading(true);
        setError(null);
        const apiUrl = `${apiBaseUrl}/service_master_market-research-services`;
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

  return (
    <div className="pt-16">
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6">Market Research</h1>
              <p className="text-xl text-gray-600 mb-8">
                Make informed decisions with our market research services,
                providing actionable insights and data-driven strategies for
                your business.
              </p>
              <Link to="/contact">
                <Button variant="primary">Start Your Project</Button>
              </Link>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Market Research"
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
              Comprehensive market research services to help your business
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
                      "Market Research Service"
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
    </div>
  );
}
