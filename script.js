// Tahun otomatis di footer
document.getElementById("tahun").textContent = new Date().getFullYear();

// Tandai menu yang sesuai dengan bagian yang sedang terlihat
const links = document.querySelectorAll("nav a");
const sections = document.querySelectorAll("main section[id]");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      links.forEach((link) => {
        link.classList.toggle("active", link.getAttribute("href") === "#" + entry.target.id);
      });
    });
  },
  { rootMargin: "-40% 0px -55% 0px" }
);

sections.forEach((section) => observer.observe(section));
