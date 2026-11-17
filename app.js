const pages = [
  { label: "Accueil", href: "index.html" },
  { label: "Adoption", href: "adopter.html" },
  { label: "Boutique", href: "boutique.html" },
  { label: "Simulateur", href: "simulateur.html" },
  { label: "Services", href: "services.html" },
  { label: "Calendrier", href: "calendrier.html" },
  { label: "Carte", href: "carte.html" },
  { label: "Tutoriels", href: "tutoriels.html" },
  { label: "Panier", href: "panier.html" },
  { label: "Partenaires", href: "partenaire.html" },
  { label: "Compte", href: "compte.html" },
  { label: "Admin", href: "admin.html" }
];

function renderNav() {
  const nav = document.getElementById("nav");
  if (!nav) return;

  nav.innerHTML = "";

  pages.forEach(page => {
    const a = document.createElement("a");
    a.href = page.href;
    a.textContent = page.label;

    const current = window.location.pathname.split("/").pop();
    if (current === page.href) {
      a.setAttribute("aria-current", "page");
    }

    nav.appendChild(a);
  });
}

window.addEventListener("DOMContentLoaded", renderNav);
