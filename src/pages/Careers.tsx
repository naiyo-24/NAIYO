import React from "react";
import theme from "../theme";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

const openings = [
  {
    title: "Frontend Developer",
    desc: "Craft beautiful, performant UIs with React & Tailwind.",
  },
  {
    title: "Backend Developer",
    desc: "Build robust APIs and scalable systems with Python & Flask.",
  },
  {
    title: "UI/UX Designer",
    desc: "Design intuitive, delightful user experiences.",
  },
  {
    title: "Digital Marketing Specialist",
    desc: "Drive growth with creative digital campaigns.",
  },
  {
    title: "Business Analyst",
    desc: "Bridge business needs and tech solutions.",
  },
];

const perks = [
  "Remote-friendly & flexible hours",
  "Growth-focused mentorship",
  "Cutting-edge tech stack",
  "Inclusive, diverse team",
  "Transparent leadership",
  "Wellness & learning support",
];
export default function Careers() {
  const navigate = useNavigate();
  return (
    <div
      className="min-h-screen w-full bg-gradient-to-br from-white to-gray-100 flex flex-col justify-center items-center"
      style={{ fontFamily: theme.fontFamily }}
    >
      <div className="w-full max-w-6xl mx-auto px-2 sm:px-6 md:px-12 py-16">
        {/* Glassmorphic Hero Section */}
        <div className="backdrop-blur-2xl bg-white/40 shadow-none rounded-none border-0 px-0 py-0 flex flex-col items-center mb-12 pt-20">
          <h1
            className="text-5xl md:text-7xl font-extrabold mb-6 text-center tracking-tight"
            style={{ color: theme.colors.primary }}
          >
            Join the Future of Digital at{" "}
            <span style={{ color: theme.colors.primary }}>Naiyo24</span>
          </h1>
          <p
            className="text-xl md:text-2xl text-center mb-8"
            style={{ color: theme.colors.text }}
          >
            We’re not just building products—we’re building careers, culture,
            and community.
            <br />
            Explore our unique opportunities and shape your journey with us.
          </p>
          {/* <Button
            variant="primary"
            className="mt-2 px-8 py-4 rounded-full font-bold shadow-lg text-lg transition hover:scale-105"
            style={{
              background: theme.colors.primary,
              color: theme.colors.background,
              fontFamily: theme.fontFamily,
            }}
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
              navigate("/contact");
            }}
          >
            See Application Process
          </Button> */}
        </div>

        {/* Openings Section */}
        <div className="mb-16">
          <h2
            className="text-3xl md:text-4xl font-bold mb-8 text-center"
            style={{ color: theme.colors.secondary }}
          >
            Current Openings
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {openings.map((role) => (
              <div
                key={role.title}
                className="bg-white/70 backdrop-blur-lg rounded-2xl shadow-lg p-8 flex flex-col items-center justify-center border-0 hover:scale-[1.04] transition"
              >
                <span
                  className="text-xl md:text-2xl font-bold mb-2 text-center"
                  style={{ color: theme.colors.primary }}
                >
                  {role.title}
                </span>
                <span
                  className="text-base text-center mb-2"
                  style={{ color: theme.colors.text }}
                >
                  {role.desc}
                </span>
                <span
                  className="text-xs text-center"
                  style={{ color: theme.colors.secondary }}
                >
                  Apply now & grow with us!
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Perks Section */}
        <div className="mb-16">
          <h2
            className="text-3xl md:text-4xl font-bold mb-8 text-center"
            style={{ color: theme.colors.primary }}
          >
            Why You'll Love Working Here
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {perks.map((perk) => (
              <div
                key={perk}
                className="bg-white/60 backdrop-blur-md rounded-xl shadow p-6 flex items-center justify-center text-center border-0"
                style={{ color: theme.colors.text }}
              >
                {perk}
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="flex flex-col items-center justify-center py-12">
          <h3
            className="text-2xl md:text-3xl font-bold mb-4 text-center"
            style={{ color: theme.colors.secondary }}
          >
            Ready to make your mark?
          </h3>
          <p
            className="text-lg text-center mb-6"
            style={{ color: theme.colors.text }}
          >
            We value passion, creativity, and curiosity. If you’re excited to
            build the future, we want to hear from you!
          </p>
          <Button
            variant="primary"
            className="px-10 py-4 rounded-full font-bold shadow-xl text-lg transition hover:scale-105"
            style={{
              background: theme.colors.secondary,
              color: theme.colors.background,
              fontFamily: theme.fontFamily,
            }}
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
              navigate("/contact");
            }}
          >
            Apply Now
          </Button>
        </div>
      </div>
    </div>
  );
}
