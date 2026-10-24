# Technical Documentation

**Project:** Interactive Developer Portfolio (Assignment 2)
**Author:** Bader Alghamdi (202358650)
**Course:** SWE363

---

## 1. Overview

The site is a single-page portfolio built with plain HTML, CSS, and JavaScript. There is no framework, no build step, and no backend. All interactivity runs in the browser from one script file (`js/script.js`), which is loaded at the end of `<body>` so every element already exists when the script runs.

| File | Responsibility |
|------|----------------|
| `index.html` | Page structure: navigation bar, three tab sections (About, Projects, Contact), footer |
| `css/styles.css` | Layout, light/dark colors, tab visibility, animations, responsive rules |
| `js/script.js` | Tab switching, live search, theme toggle + `localStorage`, form validation |
| `assets/images/` | Project screenshots |

---

## 2. Page Structure

```
<header class="navbar">
  <nav class="nav-links">         → three .tab-btn buttons (data-target="about|projects|contact")
  <button id="theme-toggle">      → light/dark switch
<main class="page-container">
  <section id="about"    class="tab-page active-tab">
  <section id="projects" class="tab-page">   → #project-search, .projects-grid, #empty-state
  <section id="contact"  class="tab-page">   → #contact-form, #form-feedback
<footer>
```

Each tab button's `data-target` value matches the `id` of the section it opens. This is the link between the buttons and the pages.

---

## 3. Features

### 3.1 Tab Navigation

**Goal:** show one section at a time without reloading the page.

**Elements:** `.tab-btn` (buttons) and `.tab-page` (sections).

**How it works:**
1. `querySelectorAll` collects all tab buttons and all tab pages.
2. A `click` listener is attached to each button.
3. On click:
   - `active` is removed from **every** button and `active-tab` is removed from **every** page.
   - `active` is added to the clicked button.
   - The button's `data-target` is read, and `active-tab` is added to the section with that `id`.

**CSS:**
- `.tab-page { display: none; }` hides every section by default.
- `.tab-page.active-tab { display: flex; animation: fadeIn 0.3s ease; }` shows the selected one with a fade-in.
- `.tab-btn.active` gets a white color and a blue bottom border.

**Design decisions:**
- **Reset all, then activate one.** This is simpler than finding the currently active tab first, and it can never leave two tabs open at once.
- **Two different class names** (`active` for buttons, `active-tab` for pages) so styling a button never accidentally affects a section.
- **The About section has `active-tab` in the HTML**, so the page is not blank before the first click.
- **A keyframe animation instead of a transition**, because CSS cannot transition from `display: none`. The animation replays every time a section becomes visible.

---

### 3.2 Live Project Search

**Goal:** filter project cards while the user types.

**Elements:** `#project-search` (input), `.project-card` (cards), `#empty-state` (message).

**How it works:**
1. An `input` event listener runs on every change to the search box, including typing, pasting, and deleting.
2. The search text is normalized with `.toLowerCase().trim()`.
3. Each card's full text (`card.textContent`, which covers the title and description) is lowercased.
4. `includes()` checks whether the card text contains the search text.
   - Match: the `hidden` class is removed and the visible counter goes up.
   - No match: the `hidden` class is added.
5. After the loop, `emptyState.classList.toggle("hidden", visibleCards > 0)` hides the "no projects found" message if anything matched and shows it if nothing did.

**CSS:** `.hidden { display: none !important; }`. The `!important` makes sure `.hidden` always wins over other rules that set `display` on the cards, since both selectors have the same specificity.

**Design decisions:**
- **The `input` event rather than `keyup` or `change`.** `change` only fires when the input loses focus, and `keyup` misses pasting and clearing.
- **Both sides are lowercased**, so "AWS", "aws", and "Aws" all match.
- **An empty search shows every card.** `"anything".includes("")` is always `true`, so no special case is needed.
- **The `if (searchInput)` guard** prevents errors if the script runs on a page without a search box.

---

### 3.3 Dark / Light Theme with `localStorage`

**Goal:** let the user switch themes and remember the choice.

**Elements:** `#theme-toggle` (button), `body` (receives the `dark-mode` class).

**How it works:**
1. On page load, the script reads the saved theme from `localStorage`. If it is `"dark"`, the `dark-mode` class is added to `body` and the button label is updated.
2. On click, `dark-mode` is toggled on `body`.
3. The new theme (`"dark"` or `"light"`) is written to `localStorage`.
4. The button text switches between the dark and light labels.

<!-- TODO: check these steps against your real code: the key name you used in localStorage.setItem/getItem, and the exact button labels -->

**CSS:** default (light) colors are set on `body`. Dark colors are set on `body.dark-mode` and on dark-mode rules for elements like `.project-card` and `.search-input`. Background and text colors use `transition` so the switch is smooth.

**Design decisions:**
- **A class on `body`** instead of inline styles, so all theme colors stay in the CSS file.
- **`localStorage`** keeps the preference after the browser is closed, which is the data-handling requirement.

---

### 3.4 Contact Form Validation

**Goal:** stop empty or invalid submissions and tell the user what happened.

**Elements:** `#contact-form`, `#user-name`, `#user-email`, `#user-message`, `#form-feedback`.

**How it works:**
1. A `submit` listener calls `e.preventDefault()` so the page does not reload.
2. All three values are read and trimmed, so input that is only spaces counts as empty.
3. **Empty check:** if any field is empty, a red error message is shown ("Please fill in all fields before sending.") and the function returns early.
4. **Email check:** if the email format is invalid, an error message asks for a valid email.
   <!-- TODO: describe exactly how you check the email (checkValidity(), a regex, or includes("@")) -->
5. **Success:** a green confirmation message that includes the user's name is shown, and `contactForm.reset()` clears the form.

**Design decisions:**
- **`.trim()` before checking**, so " " is not accepted as a name.
- **Early `return`** keeps the success code from running after an error.
- **Personalized success message** (`Thanks ${name}!`), so the user sees clearly that the submission worked.
- The form is front-end only: no message is actually sent to a server.

---

## 4. Animations and Transitions

| Effect | Where | Implementation |
|--------|-------|----------------|
| Fade-in when switching sections | `.tab-page.active-tab` | `@keyframes fadeIn` (opacity 0→1, translateY 10px→0) |
| Card lift on hover | `.project-card:hover` | `transform: translateY(-5px)` with `transition` |
| Tab underline on hover/active | `.tab-btn` | `transition` on color and border-color |
| Smooth theme change | `body` | `transition` on background-color and color |

All effects are short (0.2–0.3s) so they don't distract or slow the page down.

---

## 5. User Feedback and Error Handling

| Situation | What the user sees |
|-----------|--------------------|
| Search matches nothing | "No projects found matching your search. Try another word!" |
| Form submitted with empty fields | Red error message asking to fill in all fields |
| Invalid email format | Red error message asking for a valid email |
| Form submitted correctly | Green "Thanks [name]! Your message has been sent." |

---

## 6. Responsive Design

- Flexbox with `flex-wrap` lets the project cards stack on narrow screens.
- Cards use `width: 100%; max-width: 280px;` so they shrink on small phones instead of overflowing.
- A `@media (max-width: 600px)` rule reduces the gap between the nav buttons and moves the theme button closer to the edge so they do not overlap.

<!-- TODO: remove any of these bullets that are not in your final CSS -->

---

## 7. Browser Compatibility

Everything uses standard, widely supported features (`classList`, `querySelectorAll`, `dataset`/`getAttribute`, `localStorage`, template literals, arrow functions, Flexbox, CSS keyframes). There are no vendor prefixes or polyfills.

| Browser | Tested | Result |
|---------|--------|--------|
| Chrome (macOS) | ✅ | Works |
| Safari (macOS) | ✅ | Works |
| Firefox (macOS) | ✅ | Works |

---

## 8. Known Limitations and Future Improvements

- The contact form does not send messages anywhere. A future version could connect it to a backend or a form service.
- Tabs do not update the URL hash, so refreshing always opens About and you can't link directly to a tab.
- Tab buttons do not use ARIA roles (`role="tab"`, `aria-selected`) yet. Adding them would improve screen reader support.
- Project cards are written by hand in the HTML. Rendering them from a JavaScript array would make adding projects easier.
