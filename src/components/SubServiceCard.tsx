import { ReactNode } from "react";

interface SubServiceCardProps {
  icon?: ReactNode;
  title: string;
  description?: string;
  className?: string;
}

export default function SubServiceCard({
  icon,
  title,
  description,
  className,
}: SubServiceCardProps) {
  return (
    <div
      className={`relative bg-white/40 dark:bg-gray-900/40 backdrop-blur-md border border-gray-200/20 shadow-md h-[180px] flex flex-col justify-center items-center rounded-xl px-6 py-6 overflow-hidden ${
        className ? className : ""
      }`}
      style={{
        boxShadow: "0 4px 16px 0 rgba(31, 38, 135, 0.10)",
        border: "1px solid rgba(255,255,255,0.12)",
      }}
    >
      {icon && (
        <div className="mb-2 flex items-center justify-center">{icon}</div>
      )}
      <h4 className="text-lg font-semibold mb-2 text-black dark:text-white text-center drop-shadow-sm">
        {title}
      </h4>
      {description && (
        <p className="text-gray-700 dark:text-gray-300 text-center text-sm">
          {description}
        </p>
      )}
    </div>
  );
}
