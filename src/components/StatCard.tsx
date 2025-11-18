interface StatCardProps {
  value: string;
  label: string;
}

export default function StatCard({ value, label }: StatCardProps) {
  return (
    <div className="text-center md:text-left">
      <div className="text-4xl font-bold mb-1">{value}</div>
      <div className="text-sm text-gray-600">{label}</div>
    </div>
  );
}
