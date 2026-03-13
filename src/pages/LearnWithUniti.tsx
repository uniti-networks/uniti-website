import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const LearnWithUniti = () => {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <section className="section-padding">
          <div className="container-wide">
            <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-4">Learn with Uniti</h1>
            <p className="text-center text-foreground text-lg">Video tutorials to help you get the most out of your digital journey.</p>
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

export default LearnWithUniti;