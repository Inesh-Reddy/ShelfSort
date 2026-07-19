import { students, books } from "./data.js";
import { createBookAvailabilityStore, createGradeVault } from "./state.js";

const gradeVault = createGradeVault(students);
console.log("ShelfSort initialized.");
