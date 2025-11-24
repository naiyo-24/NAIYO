import { Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
}

export default function TestimonialCard({
  name,
  role,
  company,
  content,
  rating,
}: TestimonialCardProps) {
  // Ensure rating is a valid positive integer between 0 and 5
  const safeRating = Math.max(
    0,
    Math.min(5, Number.isFinite(rating) ? Math.floor(rating) : 0)
  );
  return (
    <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
      <div className="flex mb-4">
        {[...Array(safeRating)].map((_, i) => (
          <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />
        ))}
      </div>
      <p className="text-gray-600 mb-6 italic">"{content}"</p>
      <div>
        <div className="font-bold">{name}</div>
        <div className="text-sm text-gray-600">{role}</div>
        <div className="text-sm text-gray-500">{company}</div>
      </div>
    </div>
  );
}
