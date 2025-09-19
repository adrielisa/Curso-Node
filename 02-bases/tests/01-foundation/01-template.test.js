"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _01_template_1 = require("../../src/js-foundation/01-template");
describe('js-foundation', () => {
    test('emailTemplate should contain a name', () => {
        expect(_01_template_1.emailTemplate).toContain('{{name}}');
    });
    test('emailTemplate should contain {{name}} and {{orderID}}', () => {
        //Puede ser con regex o con toContain
        expect(_01_template_1.emailTemplate).toMatch(/{{name}}/);
        expect(_01_template_1.emailTemplate).toContain('{{orderID}}');
    });
});
