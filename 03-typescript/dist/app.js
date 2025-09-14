"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hero_service_1 = require("./services/hero.service");
const friv = (0, hero_service_1.findFrivById)(2);
console.log(friv?.nombre ?? 'Friv not found');
