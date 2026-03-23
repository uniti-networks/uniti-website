import { useEffect } from "react";

interface PageMetadata {
  title: string;
  description: string;
  ogTitle: string;
  ogDescription: string;
  ogUrl: string;
  ogImage?: string;
  twitterTitle?: string;
  twitterDescription?: string;
}

const setMeta = (property: string, content: string, isProperty = true) => {
  const attr = isProperty ? "property" : "name";
  let el = document.querySelector(`meta[${attr}="${property}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, property);
    document.head.appendChild(el);
  }
  el.content = content;
};

export function usePageMetadata(meta: PageMetadata) {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = meta.title;

    setMeta("description", meta.description, false);
    setMeta("og:title", meta.ogTitle);
    setMeta("og:description", meta.ogDescription);
    setMeta("og:url", meta.ogUrl);
    setMeta("og:type", "website");
    setMeta("og:image", meta.ogImage ?? "/og-image.png");
    setMeta("twitter:card", "summary_large_image", false);
    setMeta("twitter:title", meta.twitterTitle ?? meta.ogTitle, false);
    setMeta("twitter:description", meta.twitterDescription ?? meta.ogDescription, false);

    return () => {
      document.title = prevTitle;
    };
  }, [meta.title, meta.description, meta.ogTitle, meta.ogDescription, meta.ogUrl, meta.ogImage, meta.twitterTitle, meta.twitterDescription]);
}
