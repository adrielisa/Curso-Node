"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findFrivById = void 0;
const frivs_1 = require("../data/frivs");
const findFrivById = (id) => {
    return frivs_1.juegosFriv.find((friv) => friv.id === id);
};
exports.findFrivById = findFrivById;
