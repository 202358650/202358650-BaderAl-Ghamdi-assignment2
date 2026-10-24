# AI Usage Report

**Student:** Bader Alghamdi
**ID:** 202358650
**Course:** SWE363, Assignment 2

---

## 1. AI Tools Used

| Tool | Model | How I used it |
|------|-------|---------------|
| Claude (claude.ai) | Claude Opus 5.5 | Planning the assignment, reviewing my JavaScript and CSS, explaining concepts, finding bugs, and drafting documentation templates |

---

## 2. How AI Supported My Work

I used Claude mainly as a **reviewer and tutor, not a code generator**. For the JavaScript features, I asked for hints and an evaluation of my approach first, then wrote the code myself and sent it back for review.

- **Planning:** Claude reviewed my Assignment 1 code against the Assignment 2 brief and produced a to-do list. It also pointed out existing problems: junk lines at the top of `index.html`, a theme toggle that needed two clicks the first time, a README that described folders that did not exist, and no media queries.
- **Tab navigation:** I designed the idea (an `active` class plus `querySelectorAll`) and asked Claude to evaluate it before writing any code. It suggested "remove from all, then add to one" instead of an `if` statement, and warned me that `display: none` cannot be transitioned, so I used a keyframe animation. I wrote the JavaScript myself.
- **Live search:** I asked only for hints. Claude gave guiding questions (which event to use, how to normalize text, how to count matches for the empty state). I wrote the search code myself, and Claude reviewed it and explained how `classList.toggle(class, force)` works.
- **Contact form:** I wrote the validation myself. Claude pointed out that `type="email"` does not validate when `preventDefault()` is used, so invalid emails were being accepted.
- **CSS:** Claude suggested a full stylesheet for the form, search bar, and feedback. I found it overcomplicated and wrote my own simpler CSS instead. 
- **Documentation:** Claude produced templates for `README.md`, this report, and `technical-documentation.md`. I filled in my details and checked every claim against my actual code.

---

## 3. Usage Log

| ID | Tool (model) | Date | Purpose | Files affected | What you changed and how you verified it |
|----|--------------|------|---------|----------------|------------------------------------------|
| C01 | Claude (Claude Opus 5.5) | 2026-10-19 | Review A1, plan A2 to-do list, evaluate tab idea, hints for search, review JS/CSS, documentation templates | `index.html`, `js/script.js`, `css/styles.css`, `README.md`, `docs/*` | Used as a plan and review only. Wrote the tab, search, and form JS myself and tested each one in the browser. Fixed the bugs it pointed out (junk HTML lines, theme toggle, mobile overflow) and retested at phone width in DevTools. |
| A01 | Claude (Claude Opus 5.5) | 2026-10-19 | Suggested CSS for the contact form, search bar, feedback animations | `css/styles.css` | Rejected most of it as overcomplicated and wrote my own CSS. <!-- TODO: list any parts you did keep, e.g. font: inherit, media query --> |
| A02 | Claude (Claude Opus 5.5) | 2026-10-19 | README template | `README.md` | Filled in the repo name, live link, author info, and tested browsers. Removed claims that did not match my code. Checked that the clone and setup steps work. |
| A03 | Claude (Claude Opus 5.5) | 2026-10-19 | Technical documentation template | `docs/technical-documentation.md` | Checked each feature description against `script.js` and `styles.css`. <!-- TODO: say what you corrected, e.g. localStorage key name, email check method --> |
| A04 | Claude (Claude Opus 5.5) | 2026-10-19 | AI usage report template | `docs/ai-usage-report.md` | Checked that every entry matches what actually happened, and added the declaration with my details. |

---

## 4. Critical Evaluation of AI Output

AI output was not always correct or suitable. These are cases where I questioned or rejected it:

1. **Wrong accessibility advice.** Claude first told me to add `aria-selected` to my tab buttons. When I asked why, it corrected itself: `aria-selected` only works together with `role="tablist"` and `role="tab"`, and by itself on a plain button it is invalid. I decided not to add ARIA roles for now and listed it as a future improvement.
2. **Overcomplicated CSS.** The suggested stylesheet added CSS variables, extra animations, and selectors that my site did not need. I wrote my own simpler version and only used the review feedback.
3. **Checking my own understanding.** I didn't just accept answers. For example, I asked why `aria-selected` was needed when the tabs already worked, and why the `.hidden` class uses `!important`, so I could explain both myself.

---

## 5. What I Learned

- How to show and hide sections with classes and `querySelectorAll` instead of separate pages.
- Why the `input` event is the right event for live search, and how `classList.toggle(name, condition)` works.
- That CSS cannot transition from `display: none`, and how keyframe animations solve this.
- That `type="email"` validation is skipped when a submit is handled by JavaScript with `preventDefault()`.
- How specificity works and when `!important` is acceptable (utility classes like `.hidden`).
- How to test responsive layouts at phone widths in DevTools.

** Bader Alghamdi
**ID:** 202358650
