import TestimonialCard from "../components/TestimonialCard";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sourav Chatterjee",
      role: "Shop Owner",
      company: "Chatterjee Electronics",
      content:
        "Naiyo24 made a website for my shop in Kolkata. The team was very helpful and explained everything in Bengali. My customers find it easy to use.",
      rating: 5,
    },
    {
      name: "Moumita Dey",
      role: "Private Tutor",
      company: "Dey Coaching Centre",
      content:
        "I wanted an online portal for my students. Naiyo24 built it quickly and it works great. The support team is very polite and responsive.",
      rating: 5,
    },
    {
      name: "Arindam Ghosh",
      role: "Freelance Designer",
      company: "Ghosh Creations",
      content:
        "My portfolio site looks amazing now. Naiyo24 understood my ideas and made it better. Highly recommend for creative people.",
      rating: 5,
    },
    {
      name: "Rituparna Banerjee",
      role: "Startup Owner",
      company: "Banerjee Solutions",
      content:
        "We got our first app built by Naiyo24. The process was smooth and the team was always available for questions. Will work with them again.",
      rating: 5,
    },
    {
      name: "Subhajit Sen",
      role: "School Teacher",
      company: "Sen Academy",
      content:
        "Naiyo24 created a website for my coaching classes. The students and parents find it very useful. Good job by the team!",
      rating: 5,
    },
    {
      name: "Piyali Mukherjee",
      role: "Bakery Owner",
      company: "Mukherjee Sweets",
      content:
        "I wanted a simple app for my bakery. Naiyo24 delivered exactly what I needed and explained everything in Bengali. Very happy with the service.",
      rating: 5,
    },
  ];

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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.name} {...testimonial} />
            ))}
          </div>
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
