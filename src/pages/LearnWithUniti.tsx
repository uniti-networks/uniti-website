import { useState, useMemo } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Play } from "lucide-react";

/* ── Video data ── */
interface Video {
  title: string;
  youtube_id: string;
  categories: string[];
  description: string;
  thumbnail: string;
  url: string;
}

const VIDEOS: Video[] = [
  {"title":"How to buy and sell inputs on Grow","youtube_id":"2owh914JtZQ","categories":["Priority Work"],"description":"","thumbnail":"https://i.ytimg.com/vi/2owh914JtZQ/hqdefault.jpg","url":"https://www.youtube.com/watch?v=2owh914JtZQ"},
  {"title":"How to Register on GROW","youtube_id":"5W2X_aignWs","categories":["Priority Work"],"description":"","thumbnail":"https://i.ytimg.com/vi/5W2X_aignWs/hqdefault.jpg","url":"https://www.youtube.com/watch?v=5W2X_aignWs"},
  {"title":"How to take a business loan on Fido","youtube_id":"kOITalL6nlM","categories":["Priority Work"],"description":"","thumbnail":"https://i.ytimg.com/vi/kOITalL6nlM/hqdefault.jpg","url":"https://www.youtube.com/watch?v=kOITalL6nlM"},
  {"title":"How to Register on FIDO","youtube_id":"vzqbl95vntY","categories":["Priority Work","Priority Finance"],"description":"","thumbnail":"https://i.ytimg.com/vi/vzqbl95vntY/hqdefault.jpg","url":"https://www.youtube.com/watch?v=vzqbl95vntY"},
  {"title":"How to get weather updates on Just Farm","youtube_id":"VJbiopJS1NU","categories":["Priority Work"],"description":"","thumbnail":"https://i.ytimg.com/vi/VJbiopJS1NU/hqdefault.jpg","url":"https://www.youtube.com/watch?v=VJbiopJS1NU"},
  {"title":"How to get growing guidance on Just Farm","youtube_id":"Q6pqGHo7IxA","categories":["Priority Work"],"description":"","thumbnail":"https://i.ytimg.com/vi/Q6pqGHo7IxA/hqdefault.jpg","url":"https://www.youtube.com/watch?v=Q6pqGHo7IxA"},
  {"title":"How to Register on Just Farm","youtube_id":"Par6wlb_5hs","categories":["Priority Work"],"description":"","thumbnail":"https://i.ytimg.com/vi/Par6wlb_5hs/hqdefault.jpg","url":"https://www.youtube.com/watch?v=Par6wlb_5hs"},
  {"title":"How to purchase health insurance on MyNHIS","youtube_id":"iahQXVKkn74","categories":["Priority Health"],"description":"","thumbnail":"https://i.ytimg.com/vi/iahQXVKkn74/hqdefault.jpg","url":"https://www.youtube.com/watch?v=iahQXVKkn74"},
  {"title":"How to Register on MyNHIS","youtube_id":"UQ2D98dvk3U","categories":["Priority Health"],"description":"","thumbnail":"https://i.ytimg.com/vi/UQ2D98dvk3U/hqdefault.jpg","url":"https://www.youtube.com/watch?v=UQ2D98dvk3U"},
  {"title":"How to Find information on WebMD","youtube_id":"86fmi_aFx60","categories":["Priority Health"],"description":"","thumbnail":"https://i.ytimg.com/vi/86fmi_aFx60/hqdefault.jpg","url":"https://www.youtube.com/watch?v=86fmi_aFx60"},
  {"title":"How to Register on WebMD","youtube_id":"D7Vm_JAnF8k","categories":["Priority Health"],"description":"","thumbnail":"https://i.ytimg.com/vi/D7Vm_JAnF8k/hqdefault.jpg","url":"https://www.youtube.com/watch?v=D7Vm_JAnF8k"},
  {"title":"How to find information on Bebbo","youtube_id":"hfMc9pSCyHg","categories":["Priority Health"],"description":"","thumbnail":"https://i.ytimg.com/vi/hfMc9pSCyHg/hqdefault.jpg","url":"https://www.youtube.com/watch?v=hfMc9pSCyHg"},
  {"title":"How to Register on Bebbo","youtube_id":"o4Gp5GBrSi0","categories":["Priority Health"],"description":"","thumbnail":"https://i.ytimg.com/vi/o4Gp5GBrSi0/hqdefault.jpg","url":"https://www.youtube.com/watch?v=o4Gp5GBrSi0"},
  {"title":"How to consult doctors on HealthNeutron","youtube_id":"N30gNY-76RE","categories":["Priority Health"],"description":"","thumbnail":"https://i.ytimg.com/vi/N30gNY-76RE/hqdefault.jpg","url":"https://www.youtube.com/watch?v=N30gNY-76RE"},
  {"title":"How to Register on HealthNeutron","youtube_id":"XlSfL-U3c_4","categories":["Priority Health"],"description":"","thumbnail":"https://i.ytimg.com/vi/XlSfL-U3c_4/hqdefault.jpg","url":"https://www.youtube.com/watch?v=XlSfL-U3c_4"},
  {"title":"How to help your children with schoolwork on SyllabusGH","youtube_id":"gh_T40c0Kdc","categories":["Priority Education"],"description":"","thumbnail":"https://i.ytimg.com/vi/gh_T40c0Kdc/hqdefault.jpg","url":"https://www.youtube.com/watch?v=gh_T40c0Kdc"},
  {"title":"How to Register on SyllabusGH","youtube_id":"hrlueD3B8cE","categories":["Priority Education"],"description":"","thumbnail":"https://i.ytimg.com/vi/hrlueD3B8cE/hqdefault.jpg","url":"https://www.youtube.com/watch?v=hrlueD3B8cE"},
  {"title":"How to Learn English on DuoLingo","youtube_id":"373MmOVRp_U","categories":["Priority Education"],"description":"","thumbnail":"https://i.ytimg.com/vi/373MmOVRp_U/hqdefault.jpg","url":"https://www.youtube.com/watch?v=373MmOVRp_U"},
  {"title":"How to register on Duolingo","youtube_id":"fNijosbjLnQ","categories":["Priority Education"],"description":"","thumbnail":"https://i.ytimg.com/vi/fNijosbjLnQ/hqdefault.jpg","url":"https://www.youtube.com/watch?v=fNijosbjLnQ"},
  {"title":"How to Complete KYC on Uniti","youtube_id":"Opi45oCpNNs","categories":["Uniti Onboarding"],"description":"","thumbnail":"https://i.ytimg.com/vi/Opi45oCpNNs/hqdefault.jpg","url":"https://www.youtube.com/watch?v=Opi45oCpNNs"},
  {"title":"How to Set your Goals on Uniti","youtube_id":"iKQmZYAyLf8","categories":["Uniti Onboarding"],"description":"","thumbnail":"https://i.ytimg.com/vi/iKQmZYAyLf8/hqdefault.jpg","url":"https://www.youtube.com/watch?v=iKQmZYAyLf8"},
  {"title":"How to Register on the Uniti app","youtube_id":"qYJ8UkRk2Yw","categories":["Uniti Onboarding"],"description":"","thumbnail":"https://i.ytimg.com/vi/qYJ8UkRk2Yw/hqdefault.jpg","url":"https://www.youtube.com/watch?v=qYJ8UkRk2Yw"},
  {"title":"How to Adjust your Priority Goals","youtube_id":"IcT_ZTOIjww","categories":["Uniti Onboarding"],"description":"Step by step instructions to help you review and change the goals you want to learn and achieve through the various apps on your phone.","thumbnail":"https://i.ytimg.com/vi/IcT_ZTOIjww/hqdefault.jpg","url":"https://www.youtube.com/watch?v=IcT_ZTOIjww"},
  {"title":"How to record sales and expenses on Oze","youtube_id":"2xiK9FPR7Ws","categories":["Priority Work"],"description":"Step by step instructions to help you use the Oze app for your business","thumbnail":"https://i.ytimg.com/vi/2xiK9FPR7Ws/hqdefault.jpg","url":"https://www.youtube.com/watch?v=2xiK9FPR7Ws"},
  {"title":"How to Navigate the Ecobank app","youtube_id":"ublR1bnxM2k","categories":["Priority Work","Priority Finance"],"description":"Step by step instructions to help you understand the various features of the Ecobank app, and how to use it.","thumbnail":"https://i.ytimg.com/vi/ublR1bnxM2k/hqdefault.jpg","url":"https://www.youtube.com/watch?v=ublR1bnxM2k"},
  {"title":"How to Find books on Booksmart","youtube_id":"f9E7h5wB7WU","categories":["Priority Education"],"description":"Step by step instructions to help you navigate the Booksmart app and find interesting books to read for yourself, or for your family","thumbnail":"https://i.ytimg.com/vi/f9E7h5wB7WU/hqdefault.jpg","url":"https://www.youtube.com/watch?v=f9E7h5wB7WU"},
  {"title":"How to Navigate the CocoaLink app","youtube_id":"0I4_s9_eYBk","categories":["Priority Work"],"description":"Step by step instructions on how to find content in the CocoaLink app","thumbnail":"https://i.ytimg.com/vi/0I4_s9_eYBk/hqdefault.jpg","url":"https://www.youtube.com/watch?v=0I4_s9_eYBk"},
  {"title":"How to Register on the CocoaLink App","youtube_id":"fpHzo74U0uc","categories":["Priority Work"],"description":"Step by step instructions on how to register on the CocoaLink app for your farming needs.","thumbnail":"https://i.ytimg.com/vi/fpHzo74U0uc/hqdefault.jpg","url":"https://www.youtube.com/watch?v=fpHzo74U0uc"},
  {"title":"How to track your period on Flo","youtube_id":"Y54kZSRdoBU","categories":["Priority Health"],"description":"","thumbnail":"https://i.ytimg.com/vi/Y54kZSRdoBU/hqdefault.jpg","url":"https://www.youtube.com/watch?v=Y54kZSRdoBU"},
  {"title":"How to Find Courses on the Alison App","youtube_id":"NIHDS9foJmQ","categories":["Priority Education"],"description":"Step by step instructions on how to search for courses on the Alison App","thumbnail":"https://i.ytimg.com/vi/NIHDS9foJmQ/hqdefault.jpg","url":"https://www.youtube.com/watch?v=NIHDS9foJmQ"},
  {"title":"How to Register and Find Activities on the Khan Academy Kids Apps","youtube_id":"8QYdOgPEy8Y","categories":["Priority Education"],"description":"Step by step instructions on creating an account and registering on Khan Academy App, setting up your child's profile, and exploring available activities.","thumbnail":"https://i.ytimg.com/vi/8QYdOgPEy8Y/hqdefault.jpg","url":"https://www.youtube.com/watch?v=8QYdOgPEy8Y"},
  {"title":"How to find exercise routines on Home Workout","youtube_id":"uepoUDFNBQk","categories":["Priority Health"],"description":"Step by step instructions on finding programs and exercises in the Home Workout App","thumbnail":"https://i.ytimg.com/vi/uepoUDFNBQk/hqdefault.jpg","url":"https://www.youtube.com/watch?v=uepoUDFNBQk"},
  {"title":"Progress To Goal (P2G) Feedback Surveys","youtube_id":"dnOHXBGQVIo","categories":["Uniti Onboarding"],"description":"Everything you need to know about Progress To Goal Surveys (P2G), why and how to fill out the surveys, and the rewards you can earn for doing so!","thumbnail":"https://i.ytimg.com/vi/dnOHXBGQVIo/hqdefault.jpg","url":"https://www.youtube.com/watch?v=dnOHXBGQVIo"},
  {"title":"How to Register on Booksmart","youtube_id":"CkHh6HSMBLA","categories":["Priority Education"],"description":"Step by step instructions on creating an account and registering on the Booksmart app","thumbnail":"https://i.ytimg.com/vi/CkHh6HSMBLA/hqdefault.jpg","url":"https://www.youtube.com/watch?v=CkHh6HSMBLA"},
  {"title":"How to Register on the Alison app","youtube_id":"7f8JsoXL67E","categories":["Priority Education"],"description":"Step by step instructions on creating an account and registering on the Alison app","thumbnail":"https://i.ytimg.com/vi/7f8JsoXL67E/hqdefault.jpg","url":"https://www.youtube.com/watch?v=7f8JsoXL67E"},
  {"title":"How to Register on the Khan Academy app","youtube_id":"turoz5vNRIk","categories":["Priority Education"],"description":"Step by step instructions on creating an account and registering on the Khan Academy app","thumbnail":"https://i.ytimg.com/vi/turoz5vNRIk/hqdefault.jpg","url":"https://www.youtube.com/watch?v=turoz5vNRIk"},
  {"title":"How to Register and Start a Retirement Fund on the People's Pension Trust app (PPT)","youtube_id":"2fViC4PKJF8","categories":["Priority Finance"],"description":"Step by step instructions on creating an account and registering on the People's Pension Trust app (PPT)","thumbnail":"https://i.ytimg.com/vi/2fViC4PKJF8/hqdefault.jpg","url":"https://www.youtube.com/watch?v=2fViC4PKJF8"},
  {"title":"How to Register on the Ecobank app","youtube_id":"lVporKKHQjQ","categories":["Priority Finance"],"description":"Step by step instructions on creating an account and registering on the Ecobank app","thumbnail":"https://i.ytimg.com/vi/lVporKKHQjQ/hqdefault.jpg","url":"https://www.youtube.com/watch?v=lVporKKHQjQ"},
  {"title":"How to Register on the Fido App","youtube_id":"PTQwcUUCKYI","categories":["Priority Work","Priority Finance","Priority Education"],"description":"Step by step instructions on creating an account and registering on the Fido app","thumbnail":"https://i.ytimg.com/vi/PTQwcUUCKYI/hqdefault.jpg","url":"https://www.youtube.com/watch?v=PTQwcUUCKYI"},
  {"title":"How to Register on Oze","youtube_id":"WTpEGA6r6uE","categories":["Priority Work"],"description":"Step by step instructions on creating an account and registering on the Oze app","thumbnail":"https://i.ytimg.com/vi/WTpEGA6r6uE/hqdefault.jpg","url":"https://www.youtube.com/watch?v=WTpEGA6r6uE"},
  {"title":"How to Register on Home Workout","youtube_id":"7TQwbl7gkgM","categories":["Priority Health"],"description":"Step by step instructions on creating an account and registering on the Home Workout app","thumbnail":"https://i.ytimg.com/vi/7TQwbl7gkgM/hqdefault.jpg","url":"https://www.youtube.com/watch?v=7TQwbl7gkgM"},
  {"title":"How to Register on Flo","youtube_id":"J4Kps4CJUXs","categories":["Priority Health"],"description":"","thumbnail":"https://i.ytimg.com/vi/J4Kps4CJUXs/hqdefault.jpg","url":"https://www.youtube.com/watch?v=J4Kps4CJUXs"},
  {"title":"How to book a consultation with a doctor on the Ghinger Health app","youtube_id":"KBzKzrYVWxo","categories":["Priority Health"],"description":"Step by step instructions on booking phone or video consultations with doctors on the Ghinger Health app","thumbnail":"https://i.ytimg.com/vi/KBzKzrYVWxo/hqdefault.jpg","url":"https://www.youtube.com/watch?v=KBzKzrYVWxo"},
  {"title":"How to Register on the Ghinger Health App","youtube_id":"UfDj-qOZ5P4","categories":["Priority Health"],"description":"Step by step instructions on creating an account and registering on the Ghinger Health app","thumbnail":"https://i.ytimg.com/vi/UfDj-qOZ5P4/hqdefault.jpg","url":"https://www.youtube.com/watch?v=UfDj-qOZ5P4"},
  {"title":"Introduction to Uniti","youtube_id":"P8AjeXzIQx8","categories":["Uniti Onboarding"],"description":"Get to know more about the Uniti Program and how we will support you in your journey to achieve your health, education, work and finance goals.","thumbnail":"https://i.ytimg.com/vi/P8AjeXzIQx8/hqdefault.jpg","url":"https://www.youtube.com/watch?v=P8AjeXzIQx8"},
  {"title":"Navigating the Uniti app","youtube_id":"3Li3KdS05WA","categories":["Uniti Onboarding"],"description":"Learn your way around the Uniti app, the menu and different features and functions.","thumbnail":"https://i.ytimg.com/vi/3Li3KdS05WA/hqdefault.jpg","url":"https://www.youtube.com/watch?v=3Li3KdS05WA"},
  {"title":"Communications with Uniti","youtube_id":"Tqk_p2rmq84","categories":["Uniti Onboarding"],"description":"Learn more about how we get in touch with you and why!","thumbnail":"https://i.ytimg.com/vi/Tqk_p2rmq84/hqdefault.jpg","url":"https://www.youtube.com/watch?v=Tqk_p2rmq84"},
  {"title":"Contacting Uniti Support & Downloading WhatsApp","youtube_id":"ZDs0tjK_7x0","categories":["Uniti Onboarding"],"description":"Learn how to reach out to Uniti Support for any questions you have regarding the Uniti app or program, including rewards.","thumbnail":"https://i.ytimg.com/vi/ZDs0tjK_7x0/hqdefault.jpg","url":"https://www.youtube.com/watch?v=ZDs0tjK_7x0"},
  {"title":"Uniti Rewards","youtube_id":"yIOuMrVWtzw","categories":["Uniti Onboarding"],"description":"Everything you need to know about the Uniti Rewards program, including cashback and free data. Learn how you can earn these rewards just by using your phone!","thumbnail":"https://i.ytimg.com/vi/yIOuMrVWtzw/hqdefault.jpg","url":"https://www.youtube.com/watch?v=yIOuMrVWtzw"},
  {"title":"Finance Goals with Uniti","youtube_id":"6bfHit2a-rE","categories":["Priority Finance"],"description":"How Uniti can help you get closer to your finance goals.","thumbnail":"https://i.ytimg.com/vi/6bfHit2a-rE/hqdefault.jpg","url":"https://www.youtube.com/watch?v=6bfHit2a-rE"},
  {"title":"Education Goals with Uniti","youtube_id":"qBV5Vgk0ow4","categories":["Priority Education"],"description":"How Uniti can help you get closer to your education goals.","thumbnail":"https://i.ytimg.com/vi/qBV5Vgk0ow4/hqdefault.jpg","url":"https://www.youtube.com/watch?v=qBV5Vgk0ow4"},
  {"title":"Work Goals with Uniti","youtube_id":"cLTWUBWDEsk","categories":["Priority Work"],"description":"How Uniti can help you get closer to your work goals.","thumbnail":"https://i.ytimg.com/vi/cLTWUBWDEsk/hqdefault.jpg","url":"https://www.youtube.com/watch?v=cLTWUBWDEsk"},
  {"title":"Health Goals with Uniti","youtube_id":"H-FdNrZohO8","categories":["Priority Health"],"description":"How Uniti can help you get closer to your health goals.","thumbnail":"https://i.ytimg.com/vi/H-FdNrZohO8/hqdefault.jpg","url":"https://www.youtube.com/watch?v=H-FdNrZohO8"},
];

/* ── Category config ── */
const CATEGORIES = [
  { key: "All", color: "" },
  { key: "Uniti Onboarding", color: "#283b8d" },
  { key: "Priority Finance", color: "#af9942" },
  { key: "Priority Health", color: "#3798a6" },
  { key: "Priority Education", color: "#6787c4" },
  { key: "Priority Work", color: "#525aa6" },
] as const;

const categoryColorMap: Record<string, string> = {
  "Uniti Onboarding": "#283b8d",
  "Priority Finance": "#af9942",
  "Priority Health": "#3798a6",
  "Priority Education": "#6787c4",
  "Priority Work": "#525aa6",
};

const FONT_HEADING = "'Euclid Circular A', 'Plus Jakarta Sans', sans-serif";
const FONT_BODY = "'Europa', 'Inter', sans-serif";

/* ── Video card ── */
const VideoCard = ({ video }: { video: Video }) => (
  <a
    href={video.url}
    target="_blank"
    rel="noopener noreferrer"
    className="group block rounded-lg overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)]"
    style={{ background: "#ffffff" }}
  >
    {/* Thumbnail */}
    <div className="relative aspect-video overflow-hidden">
      <img
        src={video.thumbnail}
        alt={video.title}
        loading="lazy"
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
      {/* Play overlay */}
      <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/20 transition-colors duration-300">
        <div
          className="w-12 h-12 rounded-full flex items-center justify-center opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"
          style={{ background: "rgba(34,35,91,0.85)" }}
        >
          <Play size={20} className="text-white ml-0.5" fill="white" />
        </div>
      </div>
    </div>

    {/* Content */}
    <div className="p-4">
      {/* Category tags */}
      <div className="flex flex-wrap gap-1.5 mb-2.5">
        {video.categories.map((cat) => (
          <span
            key={cat}
            className="inline-block rounded-full px-2.5 py-0.5 text-xs font-medium text-white"
            style={{ background: categoryColorMap[cat] || "#22235b", fontFamily: FONT_BODY }}
          >
            {cat}
          </span>
        ))}
      </div>

      {/* Title */}
      <h3
        className="text-base font-semibold leading-snug mb-1"
        style={{ fontFamily: FONT_HEADING, color: "#22235b", letterSpacing: "-0.01em" }}
      >
        {video.title}
      </h3>

      {/* Description */}
      {video.description && (
        <p
          className="text-sm leading-relaxed line-clamp-2"
          style={{ fontFamily: FONT_BODY, color: "#94A3B8" }}
        >
          {video.description}
        </p>
      )}
    </div>
  </a>
);

/* ── Page ── */
const LearnWithUniti = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { All: VIDEOS.length };
    CATEGORIES.forEach((c) => {
      if (c.key !== "All") {
        counts[c.key] = VIDEOS.filter((v) => v.categories.includes(c.key)).length;
      }
    });
    return counts;
  }, []);

  const filtered = useMemo(
    () =>
      activeCategory === "All"
        ? VIDEOS
        : VIDEOS.filter((v) => v.categories.includes(activeCategory)),
    [activeCategory]
  );

  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* ─── Hero ─── */}
        <section
          className="relative overflow-hidden"
          style={{
            background: "radial-gradient(ellipse at center, #1e204a 0%, #0b0c1f 70%)",
          }}
        >
          <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 lg:px-20 py-20 md:py-28 lg:py-36 text-center">
            <h1
              className="text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold text-white leading-[1.08] mb-6"
              style={{ fontFamily: FONT_HEADING, letterSpacing: "-0.02em" }}
            >
              Unlock Your Potential
            </h1>
            <p
              className="text-base md:text-lg leading-relaxed max-w-2xl mx-auto"
              style={{ fontFamily: FONT_BODY, color: "rgba(255,255,255,0.7)" }}
            >
              Step-by-step video guides to help you get the most from your apps and your phone.
            </p>
          </div>
        </section>

        {/* ─── Filter bar + Grid ─── */}
        <section style={{ background: "#0b0c1f" }}>
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-12 md:py-16">
            {/* Category filters */}
            <div className="flex flex-wrap gap-2 mb-10">
              {CATEGORIES.map((cat) => {
                const isActive = activeCategory === cat.key;
                return (
                  <button
                    key={cat.key}
                    onClick={() => setActiveCategory(cat.key)}
                    className="rounded-full px-4 py-2 text-sm font-medium transition-all duration-200"
                    style={{
                      fontFamily: FONT_BODY,
                      background: isActive ? "#283b8d" : "rgba(255,255,255,0.08)",
                      color: isActive ? "#ffffff" : "rgba(255,255,255,0.6)",
                      border: isActive ? "1px solid #283b8d" : "1px solid rgba(255,255,255,0.12)",
                    }}
                  >
                    {cat.key}
                    <span
                      className="ml-1.5 inline-flex items-center justify-center rounded-full text-xs min-w-[20px] h-5 px-1.5"
                      style={{
                        background: isActive ? "rgba(255,255,255,0.2)" : "rgba(255,255,255,0.08)",
                        color: isActive ? "#ffffff" : "rgba(255,255,255,0.5)",
                      }}
                    >
                      {categoryCounts[cat.key]}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Video grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {filtered.map((video) => (
                <VideoCard key={video.youtube_id} video={video} />
              ))}
            </div>

            {filtered.length === 0 && (
              <p
                className="text-center py-16 text-base"
                style={{ fontFamily: FONT_BODY, color: "rgba(255,255,255,0.5)" }}
              >
                No videos found in this category.
              </p>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default LearnWithUniti;
