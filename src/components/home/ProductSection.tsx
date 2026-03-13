import productPortrait from "@/assets/product-portrait.jpg";
import { Target, ShieldCheck, Brain, Volume2 } from "lucide-react";

const features = [
{ icon: Target, title: "Goal-Centric Onboarding", desc: "Users define priorities across health, savings, education, and work, establishing their own pathway to relevance." },
{ icon: ShieldCheck, title: "Validated Identity", desc: "A secure, privacy-first KYC process establishes a formal foundation for digital participation." },
{ icon: Brain, title: "Contextual Intelligence", desc: "The engine identifies the precise moments and tones that move a user from passive ownership to active participation." },
{ icon: Volume2, title: "Adaptive Audio", desc: "Voice guidance in local languages to ensure that comprehension never limits utility." }];


const ProductSection = () =>
<section className="section-padding section-alt">
    <div className="container-wide">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Behavioral Intelligence</h2>
          <p className="text-foreground text-lg mb-10 leading-relaxed">
            The Uniti app is powered by Uniti Beat — a dynamic intervention engine serving as the primary infrastructure for digital transition.
          </p>

          <div className="space-y-8">
            {features.map((f) =>
          <div key={f.title} className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                  <f.icon className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-heading text-base font-semibold text-heading mb-1">{f.title}</h3>
                  <p className="text-sm text-foreground leading-relaxed">{f.desc}</p>
                </div>
              </div>
          )}
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <img

          alt="Uniti product in use"
          className="rounded-2xl w-full max-w-md object-cover aspect-[3/4]" src="/lovable-uploads/7b856caf-3729-4da1-be3f-dd507c67ab9d.png" />
        
        </div>
      </div>

      {/* Closing statement */}
      <div className="mt-16 pt-12 border-t border-border text-center">
        <h3 className="font-heading text-xl md:text-2xl font-bold text-heading mb-3">The Uniti Standard</h3>
        <p className="text-foreground text-lg max-w-2xl mx-auto">
          We facilitate productive use, connecting users with services that build financial security, health, and livelihoods.
        </p>
      </div>
    </div>
  </section>;


export default ProductSection;