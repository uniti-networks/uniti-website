import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Licensing = () => {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <section className="section-padding">
          <div className="container-narrow">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Licensing the Uniti Platform</h1>
            <p className="text-foreground text-lg">
              The Uniti platform is available for licensing to operators, organizations, and governments seeking to deploy behavioral digital activation at scale. Our licensing model is designed to be flexible and aligned with the unique requirements of each deployment.
            </p>
          </div>
        </section>

        <section className="section-padding flex items-center justify-center min-h-[40vh]">
          <p className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-heading text-center">Coming Soon</p>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Licensing;