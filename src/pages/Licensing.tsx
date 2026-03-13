import { useState } from "react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Licensing = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    country: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your interest! Our licensing team will be in touch.");
    setFormData({ name: "", email: "", organization: "", country: "", message: "" });
  };

  return (
    <>
      <Navbar />
      <main className="pt-16">
        <section className="section-padding">
          <div className="container-narrow">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Licensing the Uniti Platform</h1>

            <div className="prose prose-lg max-w-none text-foreground space-y-6">
              <p>
                The Uniti platform is available for licensing to operators, organizations, and governments seeking to deploy behavioral digital activation at scale. Our licensing model is designed to be flexible and aligned with the unique requirements of each deployment.
              </p>

              <h2 className="font-heading text-2xl font-bold text-heading mt-10">What You Get</h2>
              <p>
                A license to the Uniti platform provides access to the full suite of behavioral intervention tools, including the Uniti Beat engine, adaptive audio guidance, goal-centric onboarding flows, and our validated identity framework.
              </p>

              <h2 className="font-heading text-2xl font-bold text-heading mt-10">Deployment Models</h2>
              <p>
                We support white-label deployments, co-branded integrations, and standalone implementations. Our team works closely with licensees to ensure seamless integration with existing systems and infrastructure.
              </p>

              <h2 className="font-heading text-2xl font-bold text-heading mt-10">Support & Training</h2>
              <p>
                All licenses include comprehensive onboarding support, technical documentation, and ongoing access to our customer success team. We also provide training materials and workshops for your operational teams.
              </p>

              <h2 className="font-heading text-2xl font-bold text-heading mt-10">Pricing</h2>
              <p>
                Licensing terms are tailored to the scale and scope of each deployment. We offer volume-based pricing, revenue-sharing models, and fixed-fee arrangements depending on the use case. Contact us to discuss the best fit for your organization.
              </p>
            </div>

            {/* Form */}
            <div className="mt-16 pt-12 border-t border-border">
              <h2 className="font-heading text-2xl font-bold text-heading mb-6 text-center">Express Your Interest</h2>
              <form onSubmit={handleSubmit} className="space-y-6 max-w-xl mx-auto">
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
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-heading mb-2">Organization</label>
                    <input
                      type="text"
                      required
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-heading mb-2">Country</label>
                    <input
                      type="text"
                      required
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-heading mb-2">Tell us about your needs</label>
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
                    Submit Interest
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Licensing;
