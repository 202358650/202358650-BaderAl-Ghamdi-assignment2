# Technical Documentation

## 1. Architecture Overview
The application follows a clean separation of concerns using standard web technologies without external frameworks or libraries:
* **`index.html` (Structure):** Defines the semantic layout (`<header>`, `<main>`, `<section>`, `<footer>`) and connects the stylesheet and JavaScript file.
* **`css/styles.css` (Presentation & Animations):** Handles the middle-centered Flexbox layout, responsive project cards, Dark Mode styling (`.dark-mode`), and keyframe transitions (`@keyframes fadeIn`).
* **`js/script.js` (Behavior & State):** Manages DOM event listeners, live search filtering, `localStorage` persistence, and form validation.

---

## 2. Core Technical Modules

### A. Full-Page Tab Navigation
* **Mechanism:** Each `<button class="tab-btn">` in the navigation bar includes a `data-target` attribute matching the `id` of a `<section class="tab-page">`.
* **CSS State:** By default, `.tab-page` has `display: none`. Only the section with the `.active-tab` class is set to `display: flex`, centering its content vertically and horizontally.
* **JS Execution:** Clicking a navigation button loops through all tabs to remove `.active-tab`, then adds `.active-tab` to the target section and triggers a `0.3s` CSS fade-in animation.

### B. Live Project Search & Empty State Handling
* **Mechanism:** An `input` event listener is attached to `#project-search`.
* **Filtering Logic:** On every keystroke, the script converts the user's query to lowercase and checks if each `.project-card`'s text content (`card.textContent.toLowerCase()`) includes the search string.
* **User Feedback:** Non-matching cards receive the `.hidden` class (`display: none !important`). A counter tracks visible cards; if `visibleCards === 0`, the `#empty-state` paragraph is revealed to guide the user.

### C. Theme Persistence with `localStorage`
* **Mechanism:** Uses the browser's `window.localStorage` API under the key `"theme"`.
* **Initialization:** When the page loads, the script checks `localStorage.getItem("theme")`. If it equals `"dark"`, it immediately applies `.dark-mode` to `document.body` and updates the button label to `☀️ Light`.
* **Toggle Event:** Clicking `#theme-toggle` toggles the `.dark-mode` class on `<body>` and saves the updated state (`"dark"` or `"light"`) back to `localStorage`.

### D. Client-Side Form Validation
* **Mechanism:** Listens for the `submit` event on `#contact-form` and calls `e.preventDefault()` to stop page reload.
* **Validation & Feedback:** Trims values from `#user-name`, `#user-email`, and `#user-message`. If any field is empty, an error message is rendered in red (`#ef4444`) inside `#form-feedback`. When valid, a personalized green confirmation message (`#22c55e`) is displayed and `contactForm.reset()` clears the inputs.