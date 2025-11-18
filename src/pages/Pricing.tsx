import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';

export default function Pricing() {
  const plans = [
    {
      name: 'Starter',
      price: '$999',
      description: 'Perfect for small businesses and startups',
      features: [
        'Basic website (up to 5 pages)',
        'Responsive design',
        'Contact form',
        'SEO basics',
        '30 days support',
        'Source code included',
      ],
    },
    {
      name: 'Professional',
      price: '$2,499',
      description: 'Ideal for growing businesses',
      features: [
        'Advanced website (up to 15 pages)',
        'Custom design',
        'CMS integration',
        'Advanced SEO',
        'E-commerce functionality',
        '90 days support',
        'Analytics setup',
        'Source code included',
      ],
      popular: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'For large-scale projects',
      features: [
        'Unlimited pages',
        'Custom features',
        'API integrations',
        'Advanced security',
        'Performance optimization',
        'Priority support',
        'Dedicated project manager',
        'Full documentation',
      ],
    },
  ];

  return (
    <div className="pt-16">
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Pricing Plans</h1>
            <p className="text-xl text-gray-600">
              Choose the perfect plan for your business needs. All plans include our premium quality and support.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`bg-white rounded-lg shadow-lg p-8 ${
                  plan.popular ? 'ring-2 ring-black transform scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="bg-black text-white text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.price !== 'Custom' && <span className="text-gray-600">/project</span>}
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <Check size={20} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/contact">
                  <Button
                    variant={plan.popular ? 'primary' : 'outline'}
                    className="w-full justify-center"
                  >
                    Get Started
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Need a Custom Solution?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Every project is unique. Contact us to discuss your specific requirements and get a tailored quote.
          </p>
          <Link to="/contact">
            <Button variant="primary">Contact Us</Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
