import { books } from "./data.js";

// WHY: Single private store for book availability. No file outside this
// closure may ever mutate `books` directly — all reads/writes go through
// the methods returned below.
const createBookAvailabilityStore = () => {
  function getAllBooks() {
    // TODO: return a copy of `books`, not the live reference.
    // (You already decided .map(book => book) here — confirm you're
    // comfortable this is a SHALLOW copy and that's an acceptable
    // tradeoff for how dom.js will use it, read-only.)
  }

  function getBookById(id) {
    // TODO: find the matching book, then return a CLONE of that single
    // object (not the original reference). Think: spread syntax.
  }

  function toggleBookAvailability(id) {
    // TODO (merged method — do both in one call):
    // 1. Find the real book inside the private `books` array by id.
    // 2. Flip its isAvailable value (mutate the PRIVATE array here —
    //    this is the one place in the whole app allowed to do that).
    // 3. Return a CLONE of the updated book (not the live reference),
    //    so dom.js has exactly what it needs to repaint one card.
  }

  return {
    getAllBooks,
    getBookById,
    toggleBookAvailability,
  };
};

// WHY: Tracks student grade records. Separate concern from book
// availability — don't let this module know anything about books.
const createGradeVault = () => {
  // TODO: same pattern as above — private data, controlled public methods.
  // Not needed for FR-1. Stub for now, build out with FR-3.
};

export { createBookAvailabilityStore, createGradeVault };
