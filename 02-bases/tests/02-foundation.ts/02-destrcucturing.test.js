"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _02_destructuring_1 = require("../../src/js-foundation/02-destructuring");
describe('js-foundation/02-destructuring', () => {
    test('Characters shoul contain all expected principal heroes', () => {
        _02_destructuring_1.characters.forEach(hero => {
            expect(_02_destructuring_1.characters).toContain(hero);
        });
    });
});
