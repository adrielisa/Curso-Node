import { findFrivById } from "./services/hero.service";

const friv = findFrivById(2);
console.log(friv?.nombre ?? 'Friv not found');