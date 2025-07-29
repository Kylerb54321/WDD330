window.addEventListener("DOMContentLoaded", () => {
  const routes = {
    "": "pages/home.html",
    "#dashboard": "pages/dashboard.html",
    "#live": "pages/live.html",
    "#login": "pages/login.html"
  };

  async function loadContent() {
    const hash = location.hash || "";
    const page = routes[hash] || routes[""];
    const res = await fetch(page);
    const html = await res.text();
    document.getElementById("app").innerHTML = html;
  }

  window.addEventListener("hashchange", loadContent);
  loadContent();
});
