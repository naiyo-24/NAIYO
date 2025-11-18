import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  link?: string;
}

export default function ServiceCard({ icon, title, description, link }: ServiceCardProps) {
  const card = (
    <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      {link && (
        <div className="flex items-center text-black font-semibold hover:gap-2 transition-all">
          Learn More <ArrowRight size={18} className="ml-1" />
        </div>
      )}
    </div>
  );

  return link ? <Link to={link}>{card}</Link> : card;
}
