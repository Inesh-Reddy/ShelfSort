import { createBookAvailabilityStore } from "./state.js";
import { renderBookCard, renderBookList } from "./dom.js";

// WHY: app.js is the ONLY file that knows both state.js and dom.js
// exist. Neither of those modules should import each other.

const bookStore = createBookAvailabilityStore();

function init() {
  // TODO 1: get the initial book list from bookStore.getAllBooks()
  // TODO 2: pass it to dom.js's renderBookList() for first paint
  // TODO 3: attach ONE dblclick listener to the parent container
  //         (not per-card — event delegation)
}

function handleBookContainerDblClick(event) {
  // TODO:
  // 1. Use event.target.closest('[data-book-id]') to find the actual
  //    card that was double-clicked (handles clicks on nested elements
  //    like an icon or span inside the card too).
  // 2. If nothing matched (closest returns null), bail out early —
  //    guard clause, don't let it crash.
  // 3. Read the book id off that element's dataset.
  // 4. Call bookStore.toggleBookAvailability(id) — capture what it
  //    returns (the updated book).
  // 5. Pass that updated book into dom.js's renderBookCard() to
  //    repaint just that one card.
}

init();
