import { useEffect } from "react";

const SITE_URL = "https://boghdaddy-personal-portfolio.vercel.app";
const SITE_NAME = "Mohamed Boghdaddy";

function setMetaByName(name, content) {
  let tag = document.querySelector(`meta[name="${name}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("name", name);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}

function setMetaByProperty(property, content) {
  let tag = document.querySelector(`meta[property="${property}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("property", property);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}

function setCanonical(url) {
  let link = document.querySelector('link[rel="canonical"]');
  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", "canonical");
    document.head.appendChild(link);
  }
  link.setAttribute("href", url);
}

function setJsonLd(id, data) {
  let script = document.getElementById(id);
  if (!data) {
    if (script) script.remove();
    return;
  }
  if (!script) {
    script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = id;
    document.head.appendChild(script);
  }
  script.textContent = JSON.stringify(data);
}

/**
 * Updates document title, meta description, canonical URL, and OG/Twitter tags
 * per route. This is a CSR-only SPA (Create React App), so this does not replace
 * server-rendered per-route meta for crawlers that don't execute JS — but it does
 * correctly set tab titles, in-app share previews, and is picked up by crawlers
 * (including Google) that render JavaScript before indexing.
 */
export default function useDocumentMeta({ title, titleIsFull = false, description, path = "", jsonLd = null, jsonLdId = "page-jsonld" }) {
  useEffect(() => {
    const fullTitle = titleIsFull ? title : title ? `${title} | ${SITE_NAME}` : SITE_NAME;
    const url = `${SITE_URL}${path}`;

    document.title = fullTitle;
    if (description) setMetaByName("description", description);
    setCanonical(url);

    setMetaByProperty("og:title", fullTitle);
    setMetaByProperty("og:url", url);
    if (description) setMetaByProperty("og:description", description);

    setMetaByName("twitter:title", fullTitle);
    if (description) setMetaByName("twitter:description", description);

    if (jsonLd) setJsonLd(jsonLdId, jsonLd);

    return () => {
      if (jsonLd) setJsonLd(jsonLdId, null);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [title, description, path, jsonLdId]);
}

export { SITE_URL, SITE_NAME };
