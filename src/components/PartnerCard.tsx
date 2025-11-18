interface PartnerCardProps {
  initial: string;
  name: string;
  description: string;
  color: string;
  website?: string;
}

export default function PartnerCard({
  initial,
  name,
  description,
  color,
  website,
}: PartnerCardProps) {
  return (
    <a
      href={website}
      target={website ? "_blank" : undefined}
      rel={website ? "noopener noreferrer" : undefined}
      className="block"
      style={{ textDecoration: "none" }}
    >
      <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100 text-center cursor-pointer">
        <div
          className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center"
          style={{ backgroundColor: color }}
        >
          <span className="text-white text-2xl font-bold">{initial}</span>
        </div>
        <h3 className="font-bold mb-2">{name}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </a>
  );
}
