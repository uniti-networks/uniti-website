import { useState, useMemo } from "react";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface Video {
  title: string;
  description: string;
  thumbnail: string;
  youtubeUrl: string;
  playlist: string;
  tags: string[];
}

const sampleVideos: Video[] = [
  { title: "Getting Started with Uniti", description: "Learn how to set up and start using the Uniti app.", thumbnail: "", youtubeUrl: "https://youtube.com", playlist: "Uniti", tags: ["register", "getting-started"] },
  { title: "Setting Up Your Profile", description: "Complete your profile and set your digital goals.", thumbnail: "", youtubeUrl: "https://youtube.com", playlist: "Uniti", tags: ["register", "profile"] },
  { title: "Navigating the Dashboard", description: "A walkthrough of the Uniti app dashboard.", thumbnail: "", youtubeUrl: "https://youtube.com", playlist: "Uniti", tags: ["getting-started"] },
  { title: "Finding a Doctor Near You", description: "Use Uniti to locate healthcare providers in your area.", thumbnail: "", youtubeUrl: "https://youtube.com", playlist: "Health", tags: ["doctor", "health"] },
  { title: "Booking a Telemedicine Appointment", description: "Step-by-step guide to book a remote consultation.", thumbnail: "", youtubeUrl: "https://youtube.com", playlist: "Health", tags: ["doctor", "telemedicine"] },
  { title: "Health Insurance Basics", description: "Understanding digital health insurance options.", thumbnail: "", youtubeUrl: "https://youtube.com", playlist: "Health", tags: ["health", "insurance"] },
  { title: "Online Learning Platforms", description: "Explore educational resources available through Uniti.", thumbnail: "", youtubeUrl: "https://youtube.com", playlist: "Education", tags: ["education", "learning"] },
  { title: "Digital Skills for Employment", description: "Build essential digital skills for the modern workplace.", thumbnail: "", youtubeUrl: "https://youtube.com", playlist: "Education", tags: ["education", "skills"] },
  { title: "Children's Education Tools", description: "Tools and resources for children's digital learning.", thumbnail: "", youtubeUrl: "https://youtube.com", playlist: "Education", tags: ["education", "children"] },
  { title: "Finding Remote Work", description: "How to find and apply for remote work opportunities.", thumbnail: "", youtubeUrl: "https://youtube.com", playlist: "Work", tags: ["work", "remote"] },
  { title: "Freelancing Basics", description: "Getting started with freelancing through digital platforms.", thumbnail: "", youtubeUrl: "https://youtube.com", playlist: "Work", tags: ["work", "freelancing"] },
  { title: "Building a Digital CV", description: "Create a professional digital resume.", thumbnail: "", youtubeUrl: "https://youtube.com", playlist: "Work", tags: ["work", "cv"] },
  { title: "Opening a Savings Account", description: "Digital savings accounts and how to get started.", thumbnail: "", youtubeUrl: "https://youtube.com", playlist: "Finance", tags: ["savings", "finance"] },
  { title: "Mobile Money Transfers", description: "Send and receive money using mobile platforms.", thumbnail: "", youtubeUrl: "https://youtube.com", playlist: "Finance", tags: ["finance", "mobile-money"] },
  { title: "Budgeting with Apps", description: "Learn to track spending and create budgets digitally.", thumbnail: "", youtubeUrl: "https://youtube.com", playlist: "Finance", tags: ["finance", "budgeting"] },
  { title: "Understanding Microloans", description: "Access and manage microloans through digital services.", thumbnail: "", youtubeUrl: "https://youtube.com", playlist: "Finance", tags: ["finance", "loans"] },
  { title: "Goal Tracking in Uniti", description: "Set and track your personal development goals.", thumbnail: "", youtubeUrl: "https://youtube.com", playlist: "Uniti", tags: ["goals", "getting-started"] },
  { title: "Community Features", description: "Connect with other Uniti users in your community.", thumbnail: "", youtubeUrl: "https://youtube.com", playlist: "Uniti", tags: ["community"] },
];

const playlists = ["All", "Uniti", "Health", "Education", "Work", "Finance"];

const LearnWithUniti = () => {
  const [activePlaylist, setActivePlaylist] = useState("All");
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const [visibleCount, setVisibleCount] = useState(9);

  const allTags = useMemo(() => {
    const tags = new Set<string>();
    sampleVideos.forEach((v) => v.tags.forEach((t) => tags.add(t)));
    return Array.from(tags).sort();
  }, []);

  const filtered = useMemo(() => {
    let vids = sampleVideos;
    if (activePlaylist !== "All") vids = vids.filter((v) => v.playlist === activePlaylist);
    if (activeTag) vids = vids.filter((v) => v.tags.includes(activeTag));
    return vids;
  }, [activePlaylist, activeTag]);

  const visible = filtered.slice(0, visibleCount);

  return (
    <>
      <Navbar />
      <main className="pt-16">
        <section className="section-padding">
          <div className="container-wide">
            <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-4">Learn with Uniti</h1>
            <p className="text-center text-foreground text-lg mb-10">Video tutorials to help you get the most out of your digital journey.</p>

            {/* Playlist pills */}
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              {playlists.map((p) => (
                <button
                  key={p}
                  onClick={() => { setActivePlaylist(p); setVisibleCount(9); }}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                    activePlaylist === p
                      ? "bg-accent text-accent-foreground"
                      : "bg-section-alt text-foreground hover:bg-border"
                  }`}
                >
                  {p}
                </button>
              ))}
            </div>

            {/* Tags */}
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {allTags.map((t) => (
                <button
                  key={t}
                  onClick={() => { setActiveTag(activeTag === t ? null : t); setVisibleCount(9); }}
                  className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                    activeTag === t
                      ? "bg-heading text-primary-foreground"
                      : "bg-section-alt text-muted-foreground hover:text-foreground"
                  }`}
                >
                  #{t}
                </button>
              ))}
            </div>

            {/* Video grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {visible.map((v, i) => (
                <a
                  key={i}
                  href={v.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block"
                >
                  <div className="aspect-video rounded-xl bg-section-alt border-2 border-dashed border-border mb-3 flex items-center justify-center overflow-hidden group-hover:border-accent/40 transition-colors relative">
                    {v.thumbnail ? (
                      <img src={v.thumbnail} alt={v.title} className="w-full h-full object-cover" />
                    ) : (
                      <span className="text-sm text-muted-foreground">Thumbnail</span>
                    )}
                    <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors flex items-center justify-center">
                      <ExternalLink className="w-8 h-8 text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>
                  <h3 className="font-heading text-base font-semibold text-heading group-hover:text-accent transition-colors">{v.title}</h3>
                  <p className="text-sm text-foreground mt-1">{v.description}</p>
                  <div className="flex gap-2 mt-2 flex-wrap">
                    {v.tags.map((t) => (
                      <span key={t} className="text-xs text-muted-foreground">#{t}</span>
                    ))}
                  </div>
                </a>
              ))}
            </div>

            {visible.length < filtered.length && (
              <div className="text-center mt-12">
                <Button
                  onClick={() => setVisibleCount(visibleCount + 9)}
                  size="lg"
                  variant="outline"
                  className="rounded-full px-10"
                >
                  Load More
                </Button>
              </div>
            )}

            {filtered.length === 0 && (
              <p className="text-center text-muted-foreground py-12">No videos found for this filter combination.</p>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default LearnWithUniti;
