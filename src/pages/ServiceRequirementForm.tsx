import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Button from "../components/Button";
import theme from "../theme";
import apiBaseUrl from "../apiBaseUrl";

// ServiceRequirementForm: A generic form for collecting requirements for any service
export default function ServiceRequirementForm() {
  // State for service type options
  const [serviceOptions, setServiceOptions] = useState<string[]>([]);

  // Fetch unique main service names for dropdown
  useEffect(() => {
    async function fetchServiceOptions() {
      try {
        const res = await fetch(
          `${apiBaseUrl}/service_master_unique_main_services`
        );
        if (!res.ok) throw new Error("Failed to fetch service options");
        const data = await res.json();
        setServiceOptions(Array.isArray(data) ? data : []);
      } catch {
        setServiceOptions([]);
      }
    }
    fetchServiceOptions();
  }, []);
  // Get serviceType from query params
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const serviceTypeParam = queryParams.get("serviceType") || "";
  // Form state
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    serviceType: serviceTypeParam,
    budget: "",
    timeline: "",
    description: "",
    additionalDetails: "",
  });
  const [submitted, setSubmitted] = useState(false);

  // Handle input change
  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  // Handle form submit
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TODO: Send form data to backend API
    setSubmitted(true);
  }

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 pt-24 pb-8"
      style={{ fontFamily: theme.fontFamily }}
    >
      <div
        className="backdrop-blur-lg bg-white/70 border border-gray-200 shadow-xl rounded-2xl p-8 w-full max-w-2xl"
        style={{
          boxShadow:
            "0 8px 32px 0 rgba(17, 17, 17, 0.12), 0 1.5px 4px 0 rgba(97, 99, 102, 0.08)",
          borderColor: theme.colors.border,
        }}
      >
        <h1
          className="text-4xl font-bold mb-8 text-center"
          style={{ color: theme.colors.primary }}
        >
          Service Requirement Form
        </h1>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                className="block font-medium mb-2"
                style={{ color: theme.colors.text }}
              >
                Full Name *
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full rounded-xl px-4 py-2 border focus:outline-none focus:ring-2 focus:ring-accent bg-white/80"
                style={{ borderColor: theme.colors.border }}
                placeholder="Enter your full name"
              />
            </div>
            <div>
              <label
                className="block font-medium mb-2"
                style={{ color: theme.colors.text }}
              >
                Email *
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full rounded-xl px-4 py-2 border focus:outline-none focus:ring-2 focus:ring-accent bg-white/80"
                style={{ borderColor: theme.colors.border }}
              />
            </div>
            <div>
              <label
                className="block font-medium mb-2"
                style={{ color: theme.colors.text }}
              >
                Phone *
              </label>
              <input
                type="text"
                name="phone"
                value={form.phone}
                onChange={(e) => {
                  // Only allow numbers, max length 12
                  const val = e.target.value
                    .replace(/[^0-9]/g, "")
                    .slice(0, 12);
                  setForm({ ...form, phone: val });
                }}
                required
                maxLength={12}
                inputMode="numeric"
                pattern="[0-9]{1,12}"
                className="w-full rounded-xl px-4 py-2 border focus:outline-none focus:ring-2 focus:ring-accent bg-white/80"
                style={{ borderColor: theme.colors.border }}
                placeholder="Enter phone number"
              />
            </div>
            <div>
              <label
                className="block font-medium mb-2"
                style={{ color: theme.colors.text }}
              >
                Company Name (If any)
              </label>
              <input
                type="text"
                name="company"
                value={form.company}
                onChange={handleChange}
                className="w-full rounded-xl px-4 py-2 border focus:outline-none focus:ring-2 focus:ring-accent bg-white/80"
                style={{ borderColor: theme.colors.border }}
              />
            </div>
            <div className="md:col-span-2">
              <label
                className="block font-medium mb-2"
                style={{ color: theme.colors.text }}
              >
                Service Type *
              </label>
              <select
                name="serviceType"
                value={form.serviceType}
                onChange={handleChange}
                required
                className="w-full rounded-xl px-4 py-2 border focus:outline-none focus:ring-2 focus:ring-accent bg-white/80"
                style={{ borderColor: theme.colors.border }}
              >
                <option value="">Select a service</option>
                {serviceOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label
                className="block font-medium mb-2"
                style={{ color: theme.colors.text }}
              >
                Budget
              </label>
              <input
                type="text"
                name="budget"
                value={form.budget}
                onChange={handleChange}
                className="w-full rounded-xl px-4 py-2 border focus:outline-none focus:ring-2 focus:ring-accent bg-white/80"
                style={{ borderColor: theme.colors.border }}
                placeholder="e.g. $1000 - $5000"
              />
            </div>
            <div>
              <label
                className="block font-medium mb-2"
                style={{ color: theme.colors.text }}
              >
                Timeline
              </label>
              <input
                type="text"
                name="timeline"
                value={form.timeline}
                onChange={handleChange}
                className="w-full rounded-xl px-4 py-2 border focus:outline-none focus:ring-2 focus:ring-accent bg-white/80"
                style={{ borderColor: theme.colors.border }}
                placeholder="e.g. 4 weeks"
              />
            </div>
          </div>
          <div>
            <label
              className="block font-medium mb-2"
              style={{ color: theme.colors.text }}
            >
              Project Description *
            </label>
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              required
              className="w-full rounded-xl px-4 py-2 border focus:outline-none focus:ring-2 focus:ring-accent bg-white/80"
              style={{ borderColor: theme.colors.border }}
              rows={4}
              placeholder="Describe your project requirements"
            />
          </div>
          <div>
            <label
              className="block font-medium mb-2"
              style={{ color: theme.colors.text }}
            >
              Additional Details
            </label>
            <textarea
              name="additionalDetails"
              value={form.additionalDetails}
              onChange={handleChange}
              className="w-full rounded-xl px-4 py-2 border focus:outline-none focus:ring-2 focus:ring-accent bg-white/80"
              style={{ borderColor: theme.colors.border }}
              rows={3}
              placeholder="Any other information you'd like to share"
            />
          </div>
          <div className="pt-4">
            <Button
              type="submit"
              variant="primary"
              className="w-full text-lg font-semibold rounded-xl shadow-md"
            >
              Submit Requirement
            </Button>
          </div>
          {submitted && (
            <div className="text-green-600 text-center pt-4 font-semibold">
              Thank you! Your requirement has been submitted.
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
