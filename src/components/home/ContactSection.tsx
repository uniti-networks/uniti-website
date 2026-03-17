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

  return (
    <section className="px-6 py-12 md:px-12 md:py-20 lg:px-20 lg:py-24 section-alt" id="contact">
      <div className="container-narrow">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-4">Get in Touch</h2>
        <p className="text-center text-foreground mb-12">Tell us about your needs and how we can work together.</p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-heading mb-2">Name</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-heading mb-2">Email</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-heading mb-2">I am contacting as a...</label>
            <select
              required
              value={formData.capacity}
              onChange={(e) => setFormData({ ...formData, capacity: e.target.value })}
              className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent"
            >
              <option value="">Select your capacity</option>
              {capacities.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-heading mb-2">Message</label>
            <textarea
              required
              rows={5}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent resize-none"
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
