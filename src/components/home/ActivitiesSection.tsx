import logo1 from "@/assets/partner-logo-1.png";
import logo2 from "@/assets/partner-logo-2.png";
import logo3 from "@/assets/partner-logo-3.png";
import activity1 from "@/assets/activity-1.jpg";
import activity2 from "@/assets/activity-2.jpg";
import activity3 from "@/assets/activity-3.jpg";
import activity4 from "@/assets/activity-4.jpg";
import activity5 from "@/assets/activity-5.jpg";

const logos = [logo1, logo2, logo3];
const activities = [activity1, activity2, activity3, activity4, activity5];

const ActivitiesSection = () =>
<section className="section-padding section-alt">
    <div className="container-wide">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">The Path to Scale</h2>
      </div>

      {/* Activity 1 */}
      <div className="mb-20">
        <h3 className="font-heading text-2xl font-bold text-heading mb-3">National Deployment: MTN Ghana & Esoko</h3>
        <p className="text-foreground text-lg mb-4 max-w-3xl">Uniti is working with MTN Ghana and Esoko on a phased deployment that establishes behavioral infrastructure required to activate 1 million users from MTN's subscriber base

      </p>
        <ul className="list-disc list-inside text-foreground space-y-2 mb-8 max-w-3xl">
          <li>Scalable Framework: Our deployment model is designed to activate users across fintech, healthtech, edutech and agritech</li>
          <li>Digital Transition: This initiative enables users to transition from feature phones to smartphones, establishing high utility digital habits required for long term retention</li>
          <li>Systemic Impact: We are turning connectivity into a measurable economic tool for rural and peri-urban populations at a national scale.</li>
        </ul>
        <div className="grid grid-cols-3 gap-6 max-w-lg">
          {logos.map((src, i) =>
        <img
          key={i}
          src={src}
          alt={`Partner logo ${i + 1}`}
          className="aspect-square rounded-xl object-contain bg-background p-2" />

        )}
        </div>
      </div>

      {/* Activity 2 */}
      <div>
        <h3 className="font-heading text-2xl font-bold text-heading mb-3">The WeGrow Project</h3>
        <p className="text-foreground text-lg mb-4 max-w-3xl">Our infrastructure is built on validated behavioral data. In our foundation deployment with CARE International and DANIDA, we successfully moved users from silent device ownership to active digital participation. 

      </p>
        <ul className="list-disc list-inside text-foreground space-y-2 mb-8 max-w-3xl">
          <li>High Fidelity Adoption: Uniti achieved 6-8x higher engagement rates through our contextual induction layer vs the industry standard of 2-5%</li>
          <li>Overcoming the Skills Gap: We solve the barriers of perceived exclusion and technical friction that often cause new users to abandon digital services</li>
          <li>Extrinsic to Intrinsic: By leveraging extrinsic rewards to spark initial interest, we transition users toward intrinsic utility, proving that personal relevance is the ultimate driver of retention</li>
        </ul>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {activities.map((src, i) =>
        <img
          key={i}
          src={src}
          alt={`Field activation ${i + 1}`}
          className="aspect-[4/3] rounded-xl object-cover w-full" />

        )}
        </div>
      </div>
    </div>
  </section>;


export default ActivitiesSection;