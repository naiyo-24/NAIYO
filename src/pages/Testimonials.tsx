import TestimonialCard from "../components/TestimonialCard";
import { useEffect, useState } from "react";
import apiBaseUrl from "../apiBaseUrl";

type Testimonial = {
  id?: number;
  name: string;
  role?: string;
  company?: string;
  content: string;
  rating?: number;
};

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchTestimonials() {
      try {
        setLoading(true);
        setError(null);
        const res = await fetch(`${apiBaseUrl}/get_testimonials`);
        if (!res.ok) throw new Error("Failed to fetch testimonials");
        const data = await res.json();
        setTestimonials(Array.isArray(data) ? data : []);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("Unknown error");
        }
        setTestimonials([]);
      } finally {
        setLoading(false);
      }
    }
    fetchTestimonials();
  }, []);

  return (
    <div className="pt-16">
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Client Testimonials</h1>
            <p className="text-xl text-gray-600">
              Don't just take our word for it. Here's what our clients have to
              say about working with us.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {loading ? (
            <div className="text-center text-gray-500 py-8">
              Loading testimonials...
            </div>
          ) : error ? (
            <div className="text-center text-red-500 py-8">{error}</div>
          ) : testimonials.length === 0 ? (
            <div className="text-center text-gray-500 py-8">
              No testimonials found.
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial) => (
                <TestimonialCard
                  key={testimonial.id ?? testimonial.name}
                  name={testimonial.name}
                  role={testimonial.role ?? ""}
                  company={testimonial.company ?? ""}
                  content={testimonial.content}
                  rating={testimonial.rating ?? 0}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Join Our Happy Clients</h2>
          <p className="text-lg text-gray-600 mb-4">
            We've helped over 50 businesses achieve their digital goals. Let us
            help you succeed too.
          </p>
          <div className="grid grid-cols-3 gap-8 mt-12">
            <div>
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">200+</div>
              <div className="text-gray-600">Projects Delivered</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
