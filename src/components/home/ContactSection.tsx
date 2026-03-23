import { useState } from "react";
import { Button } from "@/components/ui/button";

const capacities = [
  "Mobile Network Operator",
  "App Developer",
  "Device Financier",
  "NGO / Not-for-Profit",
  "Government",
  "Interested in Licensing",
  "Other",
];

const FONT_TITLE = "'Visby CF', 'Euclid Circular A', 'Plus Jakarta Sans', sans-serif";
const FONT_BODY = "'Europa', 'Inter', sans-serif";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    capacity: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form submitted:", formData);
    alert("Thank you for your inquiry! We'll be in touch shortly.");
    setFormData({ name: "", email: "", capacity: "", message: "" });
  };

  const inputClasses =
    "w-full px-4 py-3 rounded-lg text-base text-white focus:outline-none focus:ring-2 focus:ring-accent/50";
  const inputStyle = {
    fontFamily: FONT_BODY,
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.1)",
  };

  return (
    <section
      className="px-6 py-12 md:px-12 md:py-20 lg:px-20 lg:py-24"
      style={{ background: "#0b0c1f" }}
      id="contact"
    >
      <div className="container-narrow">
        <h2
          className="text-[28px] md:text-[36px] lg:text-[44px] font-medium leading-[1.1] text-center text-white mb-4"
          style={{ fontFamily: FONT_TITLE, letterSpacing: "-0.02em" }}
        >
          Get in Touch
        </h2>
        <p
          className="text-center mb-12"
          style={{ fontFamily: FONT_BODY, color: "rgba(255,255,255,0.7)" }}
        >
          Tell us about your needs and how we can work together.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label
                 className="block text-base font-medium mb-2"
                style={{ color: "#7e8fbf", fontFamily: FONT_BODY }}
              >
                Name
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className={inputClasses}
                style={inputStyle}
              />
            </div>
            <div>
              <label
                 className="block text-base font-medium mb-2"
                style={{ color: "#7e8fbf", fontFamily: FONT_BODY }}
              >
                Email
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className={inputClasses}
                style={inputStyle}
              />
            </div>
          </div>

          <div>
            <label
               className="block text-base font-medium mb-2"
              style={{ color: "#7e8fbf", fontFamily: FONT_BODY }}
            >
              I am contacting as a...
            </label>
            <select
              required
              value={formData.capacity}
              onChange={(e) => setFormData({ ...formData, capacity: e.target.value })}
              className={inputClasses}
              style={inputStyle}
            >
              <option value="" style={{ background: "#0b0c1f" }}>Select your capacity</option>
              {capacities.map((c) => (
                <option key={c} value={c} style={{ background: "#0b0c1f" }}>{c}</option>
              ))}
            </select>
          </div>

          <div>
            <label
              className="block text-base font-medium mb-2"
              style={{ color: "#7e8fbf", fontFamily: FONT_BODY }}
            >
              Message
            </label>
            <textarea
              required
              rows={5}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className={`${inputClasses} resize-none`}
              style={inputStyle}
            />
          </div>

          <div className="text-center">
            <Button type="submit" size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 px-12">
              Send Message
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
