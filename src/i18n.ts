export type Language = "fr" | "en";

export function localize(url: URL) {
  const lang: Language = url.pathname === "/en" || url.pathname.startsWith("/en/") ? "en" : "fr";
  const t = (fr: string, en: string) => lang === "en" ? en : fr;
  const href = (path: string) => lang === "en" ? (path === "/404.html" ? "/en/404/" : `/en${path}`) : path;
  const pagePath = url.pathname.replace(/^\/en(?=\/|$)/, "") || "/";
  const frenchPath = pagePath === "/404/" ? "/404.html" : pagePath;
  const englishPath = frenchPath === "/404.html" ? "/en/404/" : `/en${frenchPath}`;
  return { lang, t, href, frenchPath, englishPath };
}
