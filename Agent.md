# agent.md — Copilot Rules (Read Before Coding)

## 0) Golden Rule
Before writing or editing anything: **read this file**, then **scan the current codebase** to reuse what already exists.  
Goal: **clean, minimal, scalable, maintainable** code.

---

## 1) Tech Stack (Mandatory)
### Frontend
- **React + TypeScript**
- **Tailwind CSS**
- Component-based architecture (small reusable components)

### Backend
- **Node.js + TypeScript + Express**
- **MongoDB** (via Mongoose or native driver, choose one and stay consistent)

---

## 2) Must Be Responsive (Non-negotiable)
- Every page and component must be **fully responsive** (mobile-first).
- Use Tailwind breakpoints correctly (`sm`, `md`, `lg`, `xl`) and test common widths.
- Avoid fixed widths/heights unless truly necessary. Prefer flex/grid + responsive utilities.
- Navigation, forms, buttons, and typography must remain usable on **mobile**.

---

## 3) File Size Limits (Hard Limits)
### Frontend
- No file should exceed **400 lines**.
- If a file grows: extract components, hooks, utils, or styles.

### Backend
- No file should exceed **500 lines**.
- If a file grows: split routes/services/controllers/validators.

---

## 4) Structure & Folders (Mandatory)
### Frontend suggested structure
- `src/components/` → reusable UI components
- `src/pages/` → page-level components
- `src/layouts/` → layout shells (navbar/footer wrappers)
- `src/routes/` → router configuration
- `src/api/` → ALL HTTP calls (no fetch/axios in components)
- `src/hooks/` → custom hooks
- `src/utils/` → helpers (pure functions)
- `src/types/` → TypeScript types/interfaces
- `src/assets/` → images/icons/fonts
- `src/styles/` → global styles if needed (Tailwind base config)

### Backend suggested structure
- `src/server.ts` / `src/app.ts` → app bootstrap
- `src/routes/` → route definitions only
- `src/controllers/` → request/response logic only
- `src/services/` → business logic
- `src/models/` → MongoDB models/schemas
- `src/middlewares/` → auth, validation, error handling
- `src/validators/` → request validation schemas
- `src/utils/` → helpers
- `src/config/` → env/config
- `src/types/` → shared types

---

## 5) No Duplicate Files / No Useless Files (Critical)
**Never create a new file if an existing file can be extended or refactored.**

Before creating any file:
1. Search the project for similar functionality.
2. Reuse or modify existing components/modules.
3. Delete dead code and unused files when discovered.
4. Avoid duplicates like `Button.tsx`, `Button2.tsx`, `NewButton.tsx`, etc.

If you must create a file:
- It must be justified (no duplication), named clearly, and placed in the correct folder.

---

## 6) Keep Code Minimal & Optimized
- Prefer **simple** solutions.
- Avoid over-engineering (no unnecessary abstraction).
- Avoid long repetitive code: create small reusable components/hooks/utils.
- Avoid creating 500 lines when it can be done in 150 lines.
- Keep dependencies minimal; don’t add libraries unless truly necessary.

---

## 7) Frontend Rules
- **No API calls inside components/pages** → use `src/api/`.
- Use strong typing: define DTO/types in `src/types/`.
- Keep components small:
  - UI components: presentational + reusable
  - Page components: compose UI + call hooks/services
- Prefer Tailwind utilities; avoid big custom CSS.

---

## 8) Backend Rules
- Routes should be thin: call controllers.
- Controllers should be thin: validate input, call services, return response.
- Services contain business logic (no Express req/res objects).
- Centralized error handling middleware.
- Validate inputs (body/query/params) before using them.
- Never leak secrets in logs or responses.

---

## 9) API Design & Naming
- Use consistent naming:
  - `GET /api/...` fetch
  - `POST /api/...` create
  - `PUT/PATCH /api/...` update
  - `DELETE /api/...` delete
- Responses should be consistent:
  - `{ success: true, data: ... }`
  - `{ success: false, error: { message, code? } }`

---

## 10) Security Basics (Always)
- Sanitize/validate inputs.
- Use environment variables for secrets.
- Never commit secrets.
- Add rate limiting / basic protections if exposing auth endpoints.
- Use CORS properly.

---

## 11) Before You Finish a Task (Checklist)
- ✅ Responsive on mobile (no broken layout)
- ✅ No duplicate files / no unused files created
- ✅ File line limits respected
- ✅ API calls centralized in `src/api/`
- ✅ Clean naming & folder placement
- ✅ Types added where needed
- ✅ No unnecessary code or dependencies
- ✅ Build passes (TypeScript errors = not acceptable)

---

## 12) Communication Style (How to Work With Me)
When you propose changes, keep it short and clear:
- What you changed
- Where you changed it
- Why it’s minimal and clean
If something is ambiguous, ask a short question instead of guessing.


# 13) Existing Project Protection (Top Priority)

This project is already in production / in progress.

STRICTLY FORBIDDEN:
- Deleting files without clear justification
- Overwriting existing components
- Rebuilding full pages without validation
- Modifying validated architecture
- Renaming files arbitrarily

MANDATORY:
- Always analyze before acting
- Always adapt before replacing
- Always propose before modifying

---

# 14) “Zero Mess” Policy

The project must remain clean at all times.

FORBIDDEN:
- Temporary files
- Forgotten test files
- Duplicate components
- Useless commented code
- Unused functions

If code is useless → remove it properly.

---

# 15) Anti-Code-Bloat Policy

Goal: Keep everything SIMPLE.

FORBIDDEN:
- Repeating code
- Useless copy-paste
- Creating multiple files for one logic
- Writing 500 lines when 200 are enough

MANDATORY:
- Factorize
- Reuse
- Simplify

---

# 16) Mandatory Review Before Validation

Before considering any task finished:

You must check:

- Mobile responsiveness
- Basic accessibility
- Performance
- TypeScript typing
- Readability
- Clear naming
- Folder structure compliance

No “draft” code is accepted.

---

# 17) Naming Conventions (Mandatory)

### Frontend
- Components: PascalCase (e.g. ProjectCard.tsx)
- Hooks: camelCase starting with "use" (useProjects.ts)
- Utils: camelCase (formatDate.ts)
- Folders: kebab-case (project-cards/)

### Backend
- Files: kebab-case (user-controller.ts)
- Classes: PascalCase
- Functions: camelCase

Never use vague names:
❌ test.ts / new.ts / temp.ts  
✅ project-service.ts

---

# 18) Minimum Documentation Requirement

Each important module must contain:

- A header comment explaining its purpose
- Clear types/interfaces
- Functions understandable without reading the whole project

No “opaque” code.

---

# 19) Reinforced Security Policy

Always verify:

- Input validation
- XSS protection
- Injection protection
- Proper error handling
- Secure logging

Never leave console.log in production.

---

# 20) Dependency Management

Before installing any library:

1) Check if it is really necessary
2) Check if it is actively maintained
3) Check its size
4) Check security status

Prefer simple in-house code when possible.

---

# 21) “One Problem = One Solution” Rule

Each feature must have:

- One folder
- One logic
- One responsibility

No mixing.

---

# 22) Mandatory Workflow Process

Before any feature:

1) Read agent.md
2) Explore the project
3) Identify existing code
4) Propose a plan
5) Implement
6) Test
7) Clean
8) Document

No step may be skipped.

---

# 23) UX/UI Quality (Non-Negotiable)

Each interface must be:

- Intuitive
- Smooth
- Clean
- Readable
- Accessible

No unnecessary scrolling.
No hidden elements without reason.

---

# 24) “No Magic Code” Rule

FORBIDDEN:
- Hardcoded values without explanation
- Obscure logic
- Temporary hacks

Everything must be justified.

---

# 25) Final Rule: Responsibility

Every line of code must be explainable clearly.

If you cannot explain it simply,
it must be refactored.


# 26) File Size Limit & Mandatory Code Splitting

No frontend file may exceed 400 lines of code.
No backend file may exceed 400 lines of code.

This rule is STRICT and NON-NEGOTIABLE.

---

## When a File Becomes Too Large

If a file approaches the limit:

MANDATORY:

- Split logic into multiple components
- Extract reusable parts
- Create custom hooks (frontend)
- Create services/modules (backend)
- Move utilities to utils/
- Separate routes, controllers, and business logic

FORBIDDEN:

- Ignoring the limit
- Compressing code to save lines
- Reducing readability
- Putting everything in one file

---

## React Architecture Rule

React is designed for modular components.

MANDATORY:

- One main component = multiple sub-components
- One file = one responsibility
- Large UI blocks = separate components
- Complex logic = custom hooks
- Reusable logic = utils/

Example:

❌ OnePage.tsx (600 lines)  
✅ Page.tsx (200) + Header.tsx + Form.tsx + Card.tsx + usePageLogic.ts

---

## Backend Architecture Rule

Backend code must also be split.

MANDATORY:

- Separate routes
- Separate controllers
- Separate services
- Separate validation
- Separate utils

Example:

❌ user.ts (550 lines)  
✅ user.routes.ts + user.controller.ts + user.service.ts + user.validation.ts

---

## No “Fake Splitting”

Splitting only to bypass the limit is forbidden.

Forbidden example:
- Multiple files with duplicated logic

Splitting must improve:

- Readability
- Reusability
- Maintainability

---

## Refactoring Obligation

If a file exceeds the limit:

You must refactor immediately before adding new features.

No exception.

---

## Goal

The goal is:

- Small files
- Clear logic
- Easy navigation
- Scalable architecture
- Professional frontend and backend structure


# 27) Mandatory Internationalization (No Hardcoded Text)

All user-visible text must be fully translated.

NO hardcoded language is allowed in the code.

---

## Forbidden

- Hardcoded strings in components
- Text written directly in JSX/HTML
- Inline labels, titles, placeholders, or messages
- Language-specific content inside logic

Examples (FORBIDDEN):

❌ <h1>Contact Us</h1>
❌ const title = "Our Services";

---

## Mandatory

All texts must be stored in the translation system.

MANDATORY:
- Use the existing i18n/translation system
- Store texts in language files (JSON, TS, etc.)
- Reference keys only in components
- Support all active languages

Examples (REQUIRED):

✅ <h1>{t("contact.title")}</h1>
✅ t("services.web.title")

---

## Supported Languages

Every new page must be translated for:

- French
- English
- Spanish
- Chinese
- And all other supported languages

No page is considered complete without full translation.

---

## Page Creation Rule

When creating a new page:

You MUST:

1) Add translation keys
2) Add values in all language files
3) Use translation functions in components
4) Test language switching

Creating a page without translations is forbidden.

---

## No Temporary Language

Temporary hardcoded text is NOT allowed.

Forbidden:
- "TODO translate"
- "Temp text"
- "Later"

All texts must be translated immediately.

---

## Validation Rule

Before validation of any feature:

You must verify:

- No visible hardcoded text
- All languages work correctly
- No missing keys
- No fallback errors

If any language is broken → fix before merging.
