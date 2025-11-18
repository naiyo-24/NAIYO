import TestimonialCard from '../components/TestimonialCard';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO',
      company: 'TechStart Inc.',
      content: 'Naiyo24 transformed our online presence completely. Their attention to detail and commitment to excellence is unmatched. Our website now converts 3x better!',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      role: 'Marketing Director',
      company: 'Growth Solutions',
      content: 'Working with Naiyo24 was a game-changer for our business. They delivered exactly what we needed, on time and within budget. Highly recommended!',
      rating: 5,
    },
    {
      name: 'Emily Rodriguez',
      role: 'Founder',
      company: 'Creative Studio',
      content: 'The team at Naiyo24 is incredibly talented and professional. They took our vision and brought it to life beyond our expectations. Outstanding work!',
      rating: 5,
    },
    {
      name: 'David Park',
      role: 'CTO',
      company: 'InnovateTech',
      content: 'Exceptional development quality and support. Naiyo24 built a complex application that scales perfectly with our growing user base. True professionals!',
      rating: 5,
    },
    {
      name: 'Jessica Williams',
      role: 'Product Manager',
      company: 'Digital Ventures',
      content: 'From initial consultation to final delivery, the experience was seamless. Naiyo24 understood our requirements perfectly and delivered a fantastic product.',
      rating: 5,
    },
    {
      name: 'Robert Thompson',
      role: 'Business Owner',
      company: 'Local Services Co.',
      content: 'Best decision we made was partnering with Naiyo24. Our mobile app has received amazing feedback from users. The team is responsive and skilled.',
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
              Don't just take our word for it. Here's what our clients have to say about working with us.
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
            We've helped over 50 businesses achieve their digital goals. Let us help you succeed too.
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
