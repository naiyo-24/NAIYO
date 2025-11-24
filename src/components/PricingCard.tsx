import { Check, X } from "lucide-react";
import { Link } from "react-router-dom";
import Button from "./Button";
import theme from "../theme";

export interface PricingFeature {
  label: string;
  available: boolean;
}

export interface PricingPlan {
  name: string;
  price: string;
  description?: string;
  features: PricingFeature[];
  popular?: boolean;
  buttonText?: string;
  buttonUrl?: string;
  onClick?: () => void;
}

interface PricingCardProps {
  plans: PricingPlan[];
  heading?: string;
  subheading?: string;
}

export default function PricingCard({
  plans,
  heading = "Choose Your Perfect Plan",
  subheading = "Select the plan that best fits your business needs",
}: PricingCardProps) {
  return (
    <div className="pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ color: theme.colors.text }}
          >
            {heading}
          </h1>
          <p
            className="text-lg md:text-xl"
            style={{ color: theme.colors.muted }}
          >
            {subheading}
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <div
              key={plan.name + idx}
              className={`relative rounded-2xl shadow-lg p-8 flex flex-col justify-between transition-all duration-300 bg-[${
                theme.colors.background
              }] ${
                plan.popular
                  ? `ring-2 ring-[${theme.colors.primary}] scale-105`
                  : ""
              }`}
              style={{
                border: plan.popular
                  ? `2px solid ${theme.colors.primary}`
                  : "none",
                boxShadow: plan.popular
                  ? "0 8px 32px 0 rgba(31, 38, 135, 0.18), 0 0 0 2px " +
                    theme.colors.primary
                  : "0 8px 32px 0 rgba(31, 38, 135, 0.18)",
              }}
            >
              {plan.popular && (
                <div
                  className="absolute top-0 right-0 bg-black text-white text-xs font-semibold px-3 py-1 rounded-bl-lg"
                  style={{
                    background: theme.colors.primary,
                    color: theme.colors.background,
                    position: "absolute",
                    top: 0,
                    right: 0,
                    borderTopRightRadius: "1rem",
                    borderBottomLeftRadius: "0.5rem",
                    zIndex: 10,
                  }}
                >
                  Most Popular
                </div>
              )}
              <div className="flex-1 flex flex-col justify-center items-center">
                <h3
                  className="text-2xl font-bold mb-2 text-center"
                  style={{ color: theme.colors.text }}
                >
                  {plan.name}
                </h3>
                {plan.price && (
                  <div className="mb-6 text-center">
                    <span
                      className="text-4xl font-bold"
                      style={{ color: theme.colors.primary }}
                    >
                      {plan.price}
                    </span>
                    {plan.price !== "Custom" && (
                      <span style={{ color: theme.colors.muted }}>
                        /project
                      </span>
                    )}
                  </div>
                )}
                {plan.description && (
                  <p
                    className="mb-6 text-center"
                    style={{ color: theme.colors.muted }}
                  >
                    {plan.description}
                  </p>
                )}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, fidx) => (
                    <li
                      key={feature.label + fidx}
                      className="flex items-center justify-center"
                    >
                      {feature.available ? (
                        <Check
                          size={20}
                          className="mr-2"
                          style={{ color: "#22c55e" }}
                        />
                      ) : (
                        <X
                          size={20}
                          className="mr-2"
                          style={{ color: "#ef4444" }}
                        />
                      )}
                      <span style={{ color: theme.colors.muted }}>
                        {feature.label}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <Link to={plan.buttonUrl || "/contact"} className="mt-4">
                <Button
                  variant={plan.popular ? "primary" : "outline"}
                  className="w-full justify-center"
                  onClick={plan.onClick}
                >
                  {plan.buttonText ||
                    (plan.price === "Custom" ? "Contact Us" : "Get Started")}
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
