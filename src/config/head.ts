const faviconScript = `
function listenToFaviconIfAvailable() {
  const favicon = document.querySelector('link[rel="shortcut icon"]'); 
  if(!favicon) {
      window.setTimeout(listenToFaviconIfAvailable,500);
      return;
  }
  document.addEventListener("visibilitychange", () => {
    const hidden = document.hidden;
    let file = hidden ? "/favicon-hidden.svg" : "/favicon.svg";
    favicon.setAttribute("href", file);
  });
}
listenToFaviconIfAvailable();
`;

export const head = [
  {
    tag: "meta",
    attrs: {
      "theme-color": "#663399",
    },
  },
  {
    tag: "script",
    attrs: {
      defer: true,
    },
    content: faviconScript,
  },
  {
    tag: "script",
    attrs: {
      src: "https://cdn.usefathom.com/script.js",
      "data-site": "LBAADTSF",
      defer: true,
    },
  },
];
