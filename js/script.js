// 1. FULL PAGE TABS
const tabButtons = document.querySelectorAll(".tab-btn");
const tabPages = document.querySelectorAll(".tab-page");

tabButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
        tabButtons.forEach((b) => b.classList.remove("active"));
        tabPages.forEach((page) => page.classList.remove("active-tab"));

        btn.classList.add("active");
        const targetId = btn.getAttribute("data-target");
        document.getElementById(targetId).classList.add("active-tab");
    });
});

// 2. LIVE SEARCH BAR
const searchInput = document.getElementById("project-search");
const projectCards = document.querySelectorAll(".project-card");
const emptyState = document.getElementById("empty-state");

if (searchInput) {
    searchInput.addEventListener("input", () => {
        const searchText = searchInput.value.toLowerCase().trim();
        let visibleCards = 0;

        projectCards.forEach((card) => {
            const cardText = card.textContent.toLowerCase();
            if (cardText.includes(searchText)) {
                card.classList.remove("hidden");
                visibleCards++;
            } else {
                card.classList.add("hidden");
            }
        });

        emptyState.classList.toggle("hidden", visibleCards > 0);
    });
}

// 3. DARK MODE WITH LOCALSTORAGE
const themeBtn = document.getElementById("theme-toggle");

if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
    themeBtn.textContent = "☀️ Light";
}

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    const isDark = document.body.classList.contains("dark-mode");
    localStorage.setItem("theme", isDark ? "dark" : "light");
    themeBtn.textContent = isDark ? "☀️ Light" : "🌙 Dark";
});

// 4. CONTACT FORM VALIDATION
const contactForm = document.getElementById("contact-form");
const feedback = document.getElementById("form-feedback");

contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("user-name").value.trim();
    const email = document.getElementById("user-email").value.trim();
    const message = document.getElementById("user-message").value.trim();

    if (!name || !email || !message) {
        feedback.style.color = "#ef4444";
        feedback.textContent = "Please fill in all fields before sending.";
        return;
    }

    feedback.style.color = "#22c55e";
    feedback.textContent = `Thanks ${name}! Your message has been sent.`;
    contactForm.reset();
});