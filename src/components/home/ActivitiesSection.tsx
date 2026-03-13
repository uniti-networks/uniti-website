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

const ActivitiesSection = () => (
  <section className="section-padding section-alt">
    <div className="container-wide">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Our Activities</h2>
      </div>

      {/* Activity 1 */}
      <div className="mb-20">
        <h3 className="font-heading text-2xl font-bold text-heading mb-3">Current Partnerships</h3>
        <p className="text-foreground text-lg mb-4 max-w-3xl">
          Working with leading operators and organizations to bridge the digital divide across emerging markets.
        </p>
        <ul className="list-disc list-inside text-foreground space-y-2 mb-8 max-w-3xl">
          <li>Multi-country deployment across Sub-Saharan Africa</li>
          <li>Integration with leading MNOs and device financiers</li>
          <li>Measurable impact on digital literacy and financial inclusion</li>
        </ul>
        <div className="grid grid-cols-3 gap-6 max-w-lg">
          {logos.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Partner logo ${i + 1}`}
              className="aspect-square rounded-xl object-contain bg-background p-2"
            />
          ))}
        </div>
      </div>

      {/* Activity 2 */}
      <div>
        <h3 className="font-heading text-2xl font-bold text-heading mb-3">Field Activations</h3>
        <p className="text-foreground text-lg mb-4 max-w-3xl">
          On-the-ground activations demonstrating the power of behavioral digital onboarding.
        </p>
        <ul className="list-disc list-inside text-foreground space-y-2 mb-8 max-w-3xl">
          <li>Community-led digital skills workshops</li>
          <li>User onboarding events at scale</li>
          <li>Partnership launches with local ecosystem players</li>
        </ul>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {activities.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Field activation ${i + 1}`}
              className="aspect-[4/3] rounded-xl object-cover w-full"
            />
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ActivitiesSection;
