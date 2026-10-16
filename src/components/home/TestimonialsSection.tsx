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

const TestimonialsSection = () => (
  <section className="bg-brand-paper px-6 py-20 md:px-12 md:py-28 lg:px-20">
    <div className="container-wide">
      <p className="mb-5 text-xs font-bold uppercase tracking-[0.24em] text-brand-teal">The human return</p>
      <h2 className="mb-14 text-4xl font-extrabold text-brand-paris md:text-6xl">What People Say</h2>
      <div className="grid gap-x-12 gap-y-10 md:grid-cols-2">
        {testimonials.map((t) => (
          <figure key={t.name} className="border-t border-brand-paris/20 pt-8">
            <blockquote className="text-xl font-medium leading-relaxed text-brand-paris">“{t.quote}”</blockquote>
            <figcaption className="mt-6 flex items-center gap-4"><img src={t.photo} alt={t.name} className="h-14 w-14 rounded-full object-cover" loading="lazy" /><div><p className="text-base font-semibold text-brand-paris">{t.name}</p><p className="text-sm text-muted-foreground">{t.location}</p></div></figcaption>
          </figure>
        ))}
      </div>
    </div>
  </section>
);
export default TestimonialsSection;
