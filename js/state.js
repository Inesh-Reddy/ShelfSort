import { books } from "./data.js";

const createBookAvailabilityStore = () => {
  function getAllBooks() {
    return books;
  }

  function getBookById(id) {
    return books.find((book) => book.id === id);
  }

  return {
    getAllBooks,
    getBookById,
  };
};

const createGradeVault = () => {};
