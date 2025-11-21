import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  link?: string;
  className?: string;
}

export default function ServiceCard({
  icon,
  title,
  description,
  link,
  className,
}: ServiceCardProps) {
  const mergedClass = `relative bg-white/30 dark:bg-gray-900/30 backdrop-blur-xl border border-gray-200/30 shadow-xl hover:shadow-2xl transition-shadow h-[340px] flex flex-col justify-between rounded-3xl px-10 py-12 overflow-hidden hover:scale-[1.03] hover:border-gray-300/50 duration-200 ${
    className ? className : ""
  }`;
  const card = (
    <div
      className={mergedClass}
      style={{
        boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.12)",
        border: "1px solid rgba(255,255,255,0.18)",
      }}
    >
      {/* Animated shimmer gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none rounded-3xl animate-shimmer"
        style={{
          background:
            "linear-gradient(120deg, rgba(255,255,255,0.13) 0%, rgba(128,128,128,0.09) 40%, rgba(255,255,255,0.13) 100%)",
        }}
      />
      <style>{`
        @keyframes shimmer {
          0% { background-position: -400px 0; }
          100% { background-position: 400px 0; }
        }
        .animate-shimmer {
          background-size: 800px 340px;
          animation: shimmer 4s linear infinite;
        }
      `}</style>
      <div className="relative z-10 mb-4 flex items-center justify-center">
        {icon}
      </div>
      <h3 className="relative z-10 text-xl font-bold mb-3 text-black dark:text-white text-center drop-shadow-sm">
        {title}
      </h3>
      <p className="relative z-10 text-gray-700 dark:text-gray-300 mb-4 text-center text-base">
        {description}
      </p>
      {link && (
        <div className="relative z-10 flex items-center justify-center text-black dark:text-white font-semibold hover:gap-2 transition-all">
          Learn More <ArrowRight size={18} className="ml-1" />
        </div>
      )}
    </div>
  );
  return link ? <Link to={link}>{card}</Link> : card;
}
