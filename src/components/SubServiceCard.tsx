import { ReactNode } from "react";

interface SubServiceCardProps {
  icon?: ReactNode;
  subService: string;
  shortDesc?: string;
  longDesc?: string;
  serviceCharge?: number;
  className?: string;
}

export default function SubServiceCard({
  icon,
  subService,
  shortDesc,
  longDesc,
  serviceCharge,
  className,
}: SubServiceCardProps) {
  return (
    <div
      className={`relative bg-white/40 dark:bg-gray-900/40 backdrop-blur-md border border-gray-200/20 shadow-md h-[200px] flex flex-col justify-center items-center rounded-xl px-6 py-6 overflow-hidden group transition-all duration-300 ${
        className ? className : ""
      }`}
      style={{
        boxShadow: "0 4px 16px 0 rgba(31, 38, 135, 0.10)",
        border: "1px solid rgba(255,255,255,0.12)",
      }}
    >
      {icon && (
        <div className="mb-2 flex items-center justify-center text-3xl">
          {icon}
        </div>
      )}
      <h4 className="text-lg font-semibold mb-1 text-black dark:text-white text-center drop-shadow-sm">
        {subService}
      </h4>
      {shortDesc && (
        <p className="text-gray-700 dark:text-gray-300 text-center text-sm mb-1">
          {shortDesc}
        </p>
      )}
      {typeof serviceCharge === "number" && (
        <div className="text-base font-bold text-gray-800 dark:text-gray-200 mt-1">
          ₹{serviceCharge}
        </div>
      )}
      {longDesc && (
        <div className="absolute inset-0 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md flex flex-col justify-center items-center px-6 py-6 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
          <p className="text-gray-800 dark:text-gray-100 text-center text-sm font-medium">
            {longDesc}
          </p>
        </div>
      )}
    </div>
  );
}
