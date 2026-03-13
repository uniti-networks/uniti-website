import { Layers, Smartphone, BarChart3, Award, ShieldCheck, Heart } from "lucide-react";

const logos = [
  "/lovable-uploads/919fd4a7-a972-4582-89b6-f902ebfcb424.png",
  "/lovable-uploads/5a5739ca-f8e1-4a87-8f83-a682fdb01db5.png",
  "/lovable-uploads/60a27205-1102-411c-8e6e-a5a2c755b727.png"
];

const activities = [
  "/lovable-uploads/2e392a58-d64a-4bf3-a0f3-c1dc276a55d5.png",
  "/lovable-uploads/6ff3e2cd-7d41-435f-89fa-4ea124582d2f.png",
  "/lovable-uploads/f28b5cd3-e547-4bcc-99f8-d40a59675c5d.png",
  "/lovable-uploads/6e7c6ded-8826-4971-bacf-a58e2e198c4f.png",
  "/lovable-uploads/5ef9e408-9b5e-44d8-b036-546d90882035.jpg"
];

const deploymentFeatures = [
  { icon: Layers, title: "Scalable Framework", desc: "Our deployment model is designed to activate users across any high-utility sector—from financial services and healthcare to specialized commerce." },
  { icon: Smartphone, title: "Digital Transition", desc: "This initiative enables users to transition from feature phones to smartphones, establishing the high-utility digital habits required for long-term retention." },
  { icon: BarChart3, title: "Systemic Impact", desc: "We are turning connectivity into a measurable economic tool for rural and peri-urban populations at a national scale." },
];

const weGrowFeatures = [
  { icon: Award, title: "High-Fidelity Adoption", desc: "Uniti achieved 6–8x higher engagement rates through our contextual induction layer vs the industry standard of 2–5%." },
  { icon: ShieldCheck, title: "Overcoming the Skills Gap", desc: "We solve the barriers of perceived exclusion and technical friction that often cause new users to abandon digital services." },
  { icon: Heart, title: "Extrinsic to Intrinsic", desc: "By leveraging extrinsic rewards to spark initial interest, we transition users toward intrinsic utility, proving that personal relevance is the ultimate driver of retention." },
];

const ActivitiesSection = () => (
  <section className="section-padding section-alt">
    <div className="container-wide">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">The Path to Scale</h2>
        <p className="font-body text-foreground text-lg max-w-3xl mx-auto leading-relaxed">
          We are bridging the gap between basic connectivity and full digital participation through a series of targeted roll-outs.
        </p>
      </div>

      {/* Activity 1 */}
      <div className="mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div>
            <h3 className="font-heading text-2xl md:text-3xl font-bold text-heading mb-3">National Deployment: MTN Ghana &amp; Esoko</h3>
            <p className="font-body text-foreground text-lg mb-10 leading-relaxed">
              Uniti is working with MTN Ghana and Esoko on a phased deployment that establishes the behavioral infrastructure required to activate one million users from MTN's subscriber base.
            </p>

            <div className="space-y-8">
              {deploymentFeatures.map((f) => (
                <div key={f.title} className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                    <f.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-heading text-base font-semibold text-heading mb-1">{f.title}</h4>
                    <p className="text-sm text-foreground leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center lg:justify-end items-center">
            <div className="flex items-center gap-8">
              {logos.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`Partner logo ${i + 1}`}
                  className="h-20 w-20 rounded-xl object-contain bg-background p-3 border border-border"
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Activity 2 */}
      <div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div>
            <h3 className="font-heading text-2xl md:text-3xl font-bold text-heading mb-3">The WeGrow Project</h3>
            <p className="font-body text-foreground text-lg mb-10 leading-relaxed">
              Our infrastructure is built on validated behavioral data. In our foundational deployment in partnership with CARE International and DANIDA, we successfully moved users from silent device ownership to active digital participation.
            </p>

            <div className="space-y-8">
              {weGrowFeatures.map((f) => (
                <div key={f.title} className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                    <f.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-heading text-base font-semibold text-heading mb-1">{f.title}</h4>
                    <p className="text-sm text-foreground leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center lg:justify-end items-start">
            <div className="grid grid-cols-2 gap-2 max-w-xs">
              <img src={activities[0]} alt="Field activation 1" className="rounded-lg object-cover w-full aspect-[4/3]" />
              <img src={activities[1]} alt="Field activation 2" className="rounded-lg object-cover w-full aspect-[4/3]" />
              <img src={activities[2]} alt="Field activation 3" className="rounded-lg object-cover w-full col-span-2 aspect-[16/9]" />
              <img src={activities[3]} alt="Field activation 4" className="rounded-lg object-cover w-full aspect-[4/3]" />
              <img src={activities[4]} alt="Field activation 5" className="rounded-lg object-cover w-full aspect-[4/3]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ActivitiesSection;
