import twumwaaImg from "@/assets/testimonials/twumwaa-grace.jpg";
import johnImg from "@/assets/testimonials/john-inkum.jpg";
import comfortImg from "@/assets/testimonials/comfort-asamoah.png";
import kateImg from "@/assets/testimonials/kate-afriyie.jpeg";

const testimonials = [
  {
    photo: twumwaaImg,
    name: "Twumwaa Grace",
    location: "Asumura",
    quote:
      "My goal for taking the Uniti phone was to enable my kids to learn. It has helped them a lot. And my grandchild loves the Read with Akili app!",
  },
  {
    photo: johnImg,
    name: "John Inkum",
    location: "Asumura",
    quote:
      "Previously, I used to pay workers to do the pruning for me. However, through Uniti I learnt of CocoaLink and now I watch videos there and do the pruning myself!",
  },
  {
    photo: comfortImg,
    name: "Comfort Asamoah",
    location: "Asumura",
    quote:
      "Through Uniti I registered for People's Pension Trust. At a point in time I did not have any money on me, but I had my PPT Account! I withdrew from there and it helped me out of the difficulty.",
  },
  {
    photo: kateImg,
    name: "Kate Afriyie",
    location: "Asumura",
    quote:
      "The Grace Health app introduced by Uniti has been very helpful. Before I got this app, I did not have any estimate of my next period dates and I was always caught unaware.",
  },
];

const Stars = () => (
  <div className="flex gap-0.5">
    {[...Array(5)].map((_, i) => (
      <svg
        key={i}
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="#af9942"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ))}
  </div>
);

const TestimonialsSection = () => (
  <section
    className="px-6 pt-12 pb-12 md:px-12 md:pt-20 md:pb-16 lg:px-20 lg:pt-24 lg:pb-20"
    style={{ background: "#0b0c1f" }}
  >
    <div className="container-wide">
      <h2
        className="text-[28px] md:text-[36px] lg:text-[44px] font-medium leading-[1.1] text-center mb-12"
        style={{
          fontFamily:
            "'Visby CF', 'Euclid Circular A', 'Plus Jakarta Sans', sans-serif",
          letterSpacing: "-0.02em",
          color: "#ffffff",
        }}
      >
        What People Say
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="group rounded-xl border p-5 transition-transform duration-300 hover:scale-[1.03]"
            style={{
              background: "rgba(255,255,255,0.04)",
              borderColor: "rgba(255,255,255,0.08)",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
            }}
          >
            {/* Header row */}
            <div className="flex items-start gap-3 mb-4">
              {/* Avatar with glow */}
              <div className="relative shrink-0">
                <div
                  className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(82,90,166,0.55) 0%, transparent 70%)",
                    transform: "scale(1.5)",
                  }}
                />
                <img
                  src={t.photo}
                  alt={t.name}
                  className="relative w-11 h-11 rounded-full object-cover"
                />
              </div>

              {/* Name / location / stars */}
              <div className="flex flex-col gap-0.5">
                <span
                  className="text-sm font-semibold leading-tight"
                  style={{ color: "#ffffff" }}
                >
                  {t.name}
                </span>
                <span
                  className="text-xs leading-tight"
                  style={{ color: "#5A67D8" }}
                >
                  {t.location}
                </span>
                <Stars />
              </div>
            </div>

            {/* Quote */}
            <p
              className="text-sm leading-relaxed"
              style={{ color: "rgba(255,255,255,0.85)" }}
            >
              "{t.quote}"
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
