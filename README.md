# Bader | Interactive Developer Portfolio (Assignment 2)

**Live demo:** [https://202358650.github.io/202358650-BaderAl-Ghamdi-assignment2/](https://202358650.github.io/202358650-BaderAl-Ghamdi-assignment2/)

![Portfolio screenshot](assets/images/screenshot.png)

---

## Project Description

This repository contains Assignment 2 of my personal developer portfolio website. It builds on the initial version from Assignment 1 and adds JavaScript interactivity: tab navigation between sections, live project search, a saved light/dark theme preference, and contact form validation with clear user feedback.

---

##  Features

1. **Tab Navigation:** Switches between the **About**, **Projects**, and **Contact** sections without reloading the page, with a fade-in transition.
2. **Live Project Search:** Filters project cards by title and description as the user types. Shows an empty-state message when nothing matches.
3. **Persistent Dark/Light Mode:** Toggles the theme and saves the choice in `localStorage`, so it is restored on the next visit.
4. **Contact Form Validation:** JavaScript checks that no field is empty, and the browser's built-in `type="email"` check blocks a badly formatted email. The user then sees an error or a confirmation message.

---

## How to Use

| Feature | How to use it |
|---------|---------------|
| Tabs | Click **About**, **Projects**, or **Contact** in the navigation bar. |
| Search | Open **Projects** and type in the search bar. Cards filter instantly. Clear the box to show all projects. |
| Theme | Click the 🌙 / ☀️ button in the top-right corner. Your choice is remembered. |
| Contact form | Fill in your name, email, and message, then click **Send Message**. Errors appear below the form. |

---

## Technologies

- HTML
- CSS (Flexbox, transitions, keyframe animations)
- Vanilla JavaScript (DOM manipulation, event listeners, `localStorage`)

---

## Project Structure

```text
assignment-2/
├── README.md
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── script.js
├── assets/
│   └── images/
│       ├── screenshot.png
│       ├── snsCloud.png
│       └── starGame.png
├── docs/
│   ├── ai-usage-report.md
│   └── technical-documentation.md
└── .gitignore
```

---

## Setup Instructions (Run Locally)

**Requirements:** a modern web browser (Chrome, Firefox, Safari, or Edge). No installation or build step is needed.

1. Clone the repository:
   ```bash
   git clone https://github.com/202358650/202358650-BaderAl-Ghamdi-assignment2.git
   ```
2. Go into the project folder:
   ```bash
   cd 202358650-BaderAl-Ghamdi-assignment2
   ```
3. Run the site using **one** of these options:
    - **Option A:** Double-click `index.html` to open it in your browser.
    - **Option B (recommended):** Open the folder in VS Code, install the **Live Server** extension, right-click `index.html`, and choose **Open with Live Server**. The page reloads automatically when you edit files.

---

## Browser Compatibility

Tested on:

| Browser / Device | Result |
|------------------|--------|
| Chrome (macOS) | ✅ Works |
| Safari (macOS) | ✅ Works |
| Firefox (macOS) | ✅ Works |

The layout is designed for desktop and tablet widths.
---

##  AI Usage Summary

I used AI tools as a learning and review assistant during this assignment. Claude was used to plan the assignment tasks, review my JavaScript logic for the tabs and search features, review my CSS, and draft documentation templates. I wrote all the code myself and tested every feature in the browser.

Full details, including the usage log and declaration, are in [`docs/ai-usage-report.md`](docs/ai-usage-report.md).

---

##  Documentation

- [Technical Documentation](docs/technical-documentation.md): how each feature works internally
- [AI Usage Report](docs/ai-usage-report.md): AI tools, usage log, and declaration

---

## 👤 Author

**Bader Alghamdi**
Student ID: 202358650

