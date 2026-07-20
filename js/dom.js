// WHY: dom.js only knows how to PAINT data it's given. It never decides
// WHAT the data should be, and never talks to state.js directly.

function renderBookCard(book) {
  // TODO: given ONE book object { id, title, author, isAvailable },
  // select that card by data-book-id (or build a new card element if
  // this is first render) and update its class/content to reflect
  // isAvailable (e.g. toggle an "available"/"borrowed" class).
  //
  // You said yesterday you already built this in isolation — reuse
  // that function here unchanged if it already takes a single book
  // object as its only argument.
}

function renderBookList(books) {
  // TODO: loop over `books` and call renderBookCard(book) for each.
  // This should NOT duplicate markup logic — every card, whether on
  // first load or after a toggle, goes through renderBookCard().
  //
  // Also: make sure each card element gets a data-book-id attribute
  // set to book.id here — app.js's delegated listener depends on this
  // to know which card was double-clicked.
}

export { renderBookCard, renderBookList };
