// =========================
// SCROLL REVEAL ANIMATION
// =========================

const cards = document.querySelectorAll(
    ".skill-card, .project-card, .certificate-card, .about-content, .education-card"
);

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    },
    {
        threshold: 0.15
    }
);

cards.forEach((card) => {
    observer.observe(card);
});


// =========================
// CURRENT YEAR
// =========================

const copyright = document.querySelector(".copyright");

if (copyright) {
    copyright.textContent =
        `© ${new Date().getFullYear()} Suhani Chaurase. All rights reserved.`;
}


// =========================
// NAVBAR SCROLL EFFECT
// =========================

window.addEventListener("scroll", () => {

    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {
        navbar.style.background = "rgba(5, 8, 7, 0.95)";
    } else {
        navbar.style.background = "rgba(5, 8, 7, 0.78)";
    }

});
