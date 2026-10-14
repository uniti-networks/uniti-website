import { useEffect, useRef, useState } from "react";

export default function LegalDraftWatermark() {
  const ref = useRef<HTMLDivElement>(null);
  const [rows, setRows] = useState(1);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const observer = new ResizeObserver(([entry]) => {
      if (entry) setRows(Math.max(1, Math.ceil(entry.contentRect.height / 320)));
    });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} aria-hidden="true" className="legal-draft-watermark pointer-events-none absolute inset-0 z-0 overflow-hidden select-none">
      {Array.from({ length: rows }, (_, index) => (
        <div key={index} className="h-80 flex items-center justify-around">
          <span className="block -rotate-[30deg] text-8xl font-extrabold leading-none">DRAFT</span>
          <span className="hidden sm:block -rotate-[30deg] text-8xl font-extrabold leading-none">DRAFT</span>
        </div>
      ))}
    </div>
  );
}