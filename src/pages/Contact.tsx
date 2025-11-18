import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import Button from "../components/Button";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="pt-16">
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Get In Touch</h1>
            <p className="text-xl text-gray-600">
              Have a project in mind? We'd love to hear from you. Send us a
              message and we'll respond as soon as possible.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
              <p className="text-gray-600 mb-8">
                Fill out the form and our team will get back to you within 24
                hours.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-gray-100 p-3 rounded-lg">
                    <Mail size={24} className="text-black" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-gray-600">office@naiyo24.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-gray-100 p-3 rounded-lg">
                    <Phone size={24} className="text-black" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <p className="text-gray-600">+91 6289171798</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-gray-100 p-3 rounded-lg">
                    <MapPin size={24} className="text-black" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Office</h3>
                    <p className="text-gray-600">
                      1/30 Chittaranjan Colony, Baghajatin
                    </p>
                    <p className="text-gray-600">Kolkata- 700032</p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h3 className="font-semibold mb-4">Business Hours</h3>
                <div className="space-y-2 text-gray-600">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday: 10:00 AM - 4:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>

              {/* Google Maps Embed */}
              <div className="mt-12 rounded-lg overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3686.486065788691!2d88.37561767505014!3d22.485939379553525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02711beb141767%3A0x38b172984d60419!2sNaiyo24%20Private%20Limited!5e0!3m2!1sen!2sin!4v1763460189459!5m2!1sen!2sin"
                  width="100%"
                  height="320"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Naiyo24 Private Limited Location"
                ></iframe>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6">Send us a message</h2>

              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                  <div className="text-green-600 text-4xl mb-3">✓</div>
                  <h3 className="text-xl font-semibold text-green-800 mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-green-700">We'll get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold mb-2"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold mb-2"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-semibold mb-2"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none"
                      placeholder="Project Inquiry"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    className="w-full justify-center"
                  >
                    <Send size={18} />
                    Send Message
                  </Button>
                </form>
              )}

              {/* Mini Memory Game below the form */}
              <div className="mt-10">
                <h3 className="text-lg font-semibold mb-4 text-center">
                  Mini Memory Game
                </h3>
                <MemoryGame />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// Add MemoryGame component below
function MemoryGame() {
  const initialCards = [
    { id: 1, value: "🍎" },
    { id: 2, value: "🍌" },
    { id: 3, value: "🍇" },
    { id: 4, value: "🍉" },
    { id: 5, value: "🍒" },
    { id: 6, value: "🍍" },
    { id: 7, value: "🍎" },
    { id: 8, value: "🍌" },
    { id: 9, value: "🍇" },
    { id: 10, value: "🍉" },
    { id: 11, value: "🍒" },
    { id: 12, value: "🍍" },
  ];
  const shuffled = initialCards.sort(() => Math.random() - 0.5);
  const [cards, setCards] = useState(shuffled);
  const [flipped, setFlipped] = useState<number[]>([]);
  const [matched, setMatched] = useState<number[]>([]);
  const [moves, setMoves] = useState(0);

  function handleFlip(idx: number) {
    if (flipped.length === 2 || flipped.includes(idx) || matched.includes(idx))
      return;
    setFlipped([...flipped, idx]);
    if (flipped.length === 1) {
      setMoves(moves + 1);
      const firstIdx = flipped[0];
      if (cards[firstIdx].value === cards[idx].value) {
        setTimeout(() => {
          setMatched([...matched, firstIdx, idx]);
          setFlipped([]);
        }, 600);
      } else {
        setTimeout(() => setFlipped([]), 900);
      }
    }
  }

  function resetGame() {
    setCards(initialCards.sort(() => Math.random() - 0.5));
    setFlipped([]);
    setMatched([]);
    setMoves(0);
  }

  return (
    <div className="flex flex-col items-center">
      <div className="grid grid-cols-4 gap-4 mb-4">
        {cards.map((card, idx) => {
          const isFlipped = flipped.includes(idx) || matched.includes(idx);
          return (
            <button
              key={idx}
              className={`w-16 h-16 text-2xl font-bold rounded-lg shadow transition-all duration-300 bg-gray-100 flex items-center justify-center ${
                isFlipped ? "bg-green-100" : "bg-gray-200"
              }`}
              onClick={() => handleFlip(idx)}
              disabled={isFlipped}
            >
              {isFlipped ? card.value : "❓"}
            </button>
          );
        })}
      </div>
      <div className="mb-2 text-sm text-gray-600">Moves: {moves}</div>
      {matched.length === cards.length && (
        <div className="text-green-600 font-semibold mb-2">You won! 🎉</div>
      )}
      <button
        className="px-4 py-2 bg-gray-300 rounded-lg text-sm font-medium hover:bg-gray-400 transition mt-2"
        onClick={resetGame}
      >
        Reset Game
      </button>
    </div>
  );
}
