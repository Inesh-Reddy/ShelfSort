// data.js
// WHY: Centralized seed data so state.js, analytics.js, and dom.js all
// consume the same shape — no module invents its own mock data.

const students = [
  { id: 1, name: "Alice", score: 92 },
  { id: 2, name: "Bob", score: 80 },
  { id: 3, name: "Charlie", score: 60 },
  { id: 4, name: "Diana", score: 75 }, // WHY: exactly on the B threshold — good edge case for categorizeStudents()
  { id: 5, name: "Ethan", score: 89 }, // WHY: just below A threshold — tests boundary logic
  { id: 6, name: "Fiona", score: 45 },
  { id: 7, name: "Gaurav", score: 100 },
  { id: 8, name: "Hina", score: 68 },
];

const books = [
  {
    id: 101,
    title: "Clean Code",
    author: "Robert C. Martin",
    isAvailable: true,
  },
  {
    id: 102,
    title: "You Don't Know JS",
    author: "Kyle Simpson",
    isAvailable: false,
  },
  {
    id: 103,
    title: "Eloquent JavaScript",
    author: "Marijn Haverbeke",
    isAvailable: true,
  },
  {
    id: 104,
    title: "DOM Enlightenment",
    author: "Cody Lindley",
    isAvailable: false,
  },
  {
    id: 105,
    title: "Design Patterns",
    author: "Gang of Four",
    isAvailable: true,
  },
  {
    id: 106,
    title: "Functional-Light JS",
    author: "Kyle Simpson",
    isAvailable: true,
  },
];

// WHY: Frozen at the source — data.js only ever exports raw arrays.
// Any component that needs a "modified" version must copy it via
// map/filter/spread in analytics.js, never mutate these directly.
Object.freeze(students);
Object.freeze(books);
