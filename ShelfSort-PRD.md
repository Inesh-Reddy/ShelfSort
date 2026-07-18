# ShelfSort — Product Requirements Document (PRD)

**Version:** MVP-1 (Vanilla JS Sprint)
**Owner:** You (Founding Engineer)
**Stack constraint:** HTML + CSS (Flexbox/Grid) + Vanilla JS only. No frameworks, no backend, no DB — that arrives in a later sprint.

---

## 1. Problem Statement

A university library + TA team currently tracks book borrow status and student grades in disconnected spreadsheets. They need a single-page dashboard that:

- Shows book availability at a glance
- Lets staff toggle borrow status with one interaction (double-click)
- Surfaces grade distribution analytics
- Warns staff if bad weather means the library should close early

## 2. Goals

- G1: Encapsulated, tamper-proof state (closures) for borrow counts and grade records
- G2: Pure, composable analytics functions (map/filter/reduce) with zero mutation
- G3: Responsive dashboard shell (Grid for page layout, Flexbox for card internals)
- G4: One external data dependency (Weather API) wired via `fetch` + JSON

## 3. Non-Goals (explicitly out of scope this sprint)

- No persistence (localStorage, DB) — state resets on page reload
- No routing / multi-page navigation
- No build tooling (Webpack/Vite) — plain `<script>` tags only
- No authentication

## 4. Architecture

### 4.1 Module Responsibility Table

| File           | Owns                                                                                                               | Must NOT contain                                 |
| -------------- | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------ |
| `data.js`      | Raw seed arrays: `students[]`, `books[]`                                                                           | Any function logic, DOM refs                     |
| `state.js`     | Closure factories: `createBorrowCounter()`, `createGradeVault()` — private counters/flags exposed only via methods | `document.*`, `fetch`                            |
| `analytics.js` | Pure functions: `categorizeStudents()`, `averageGrade()`, `borrowRate()` — all via map/filter/reduce               | Mutation of input arrays, `document.*`           |
| `dom.js`       | Reusable render helpers: `renderStudentCard()`, `renderBookCard()`, `toggleBorrowedClass()`                        | Business logic, data transformation, `fetch`     |
| `weather.js`   | `fetchWeather(city)` — fetch + JSON.parse/stringify, returns a promise                                             | DOM writes, state mutation                       |
| `app.js`       | **Entrypoint.** Imports all modules, decides execution order, wires event listeners                                | Reusable logic of its own — it only orchestrates |

### 4.2 Entrypoint Sequence (`app.js`)

1. Load `students`/`books` from `data.js`
2. Instantiate state: `const gradeVault = createGradeVault(students)`
3. Run initial analytics pass → pass result into `dom.js` render functions
4. Attach **one delegated** `dblclick` listener on the card container (not per-card)
5. On load, call `weather.js` → update the "stay open late?" advisory banner

### 4.3 Script Load Order (`index.html`)

```
data.js → state.js → analytics.js → dom.js → weather.js → app.js
```

## 5. Functional Requirements

| ID   | Requirement                                                                                                       | Module            |
| ---- | ----------------------------------------------------------------------------------------------------------------- | ----------------- |
| FR-1 | Double-clicking a book card toggles `isAvailable` and updates its class                                           | dom.js + state.js |
| FR-2 | Grade average recalculates via `reduce`, memoized per dataset reference                                           | analytics.js      |
| FR-3 | Students grouped into A/B/C categories on render                                                                  | analytics.js      |
| FR-4 | Weather advisory banner shows "open late" / "close early" based on fetched condition                              | weather.js        |
| FR-5 | All counters (borrow count, grade edits) are unreachable from browser devtools console except via exposed methods | state.js          |

## 6. Data Model

```js
// data.js
const students = [
  { id: 1, name: "Alice", score: 92 },
  // ...
];

const books = [
  { id: 101, title: "Clean Code", isAvailable: true },
  // ...
];
```

## 7. Constraints & Guardrails

- No magic numbers — grade thresholds live in `GRADE_THRESHOLDS` const
- No direct array/object mutation — always return new copies
- Every function >1 responsibility gets a `// WHY:` business-reason comment
- `dom.js` functions take data as arguments — never reach into global state directly

## 8. Acceptance Criteria (Friday MVP)

- [ ] Page loads with Grid-based dashboard shell, no console errors
- [ ] All book/student state lives behind closures — not accessible as global vars
- [ ] Double-click toggles borrow status visually and in state
- [ ] Analytics panel shows live average grade + borrow rate, sourced from pure functions
- [ ] Weather banner populates from live fetch within 2s of page load
- [ ] Zero direct DOM logic inside `state.js` or `analytics.js`

## 9. Day-by-Day Build Trace

See execution blueprint (Sun–Fri) — each day's build strictly implements the prior day's lesson (1-day recall buffer).
