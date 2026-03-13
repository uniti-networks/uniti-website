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
          {[1, 2, 3].map((i) => (
            <div key={i} className="aspect-square rounded-xl bg-background border-2 border-dashed border-border flex items-center justify-center">
              <span className="text-xs text-muted-foreground">Logo {i}</span>
            </div>
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
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="aspect-[4/3] rounded-xl bg-background border-2 border-dashed border-border flex items-center justify-center">
              <span className="text-xs text-muted-foreground">Image {i}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ActivitiesSection;
