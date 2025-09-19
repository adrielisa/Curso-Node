"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const get_age_plugin_1 = require("../../src/plugins/get-age.plugin");
describe('plugins/get-age.plugin.ts', () => {
    test('getAge() should return the age of a person', () => {
        const birthdate = '2005-04-15';
        const age = (0, get_age_plugin_1.getAge)(birthdate);
        expect(typeof age).toBe('number'); //age must be a number
    });
    test('getAge() should return current age', () => {
        const birthdate = '2005-04-15';
        const age = (0, get_age_plugin_1.getAge)(birthdate);
        const calculatedAge = new Date().getFullYear() - new Date(birthdate).getFullYear();
        expect(age).toBe(calculatedAge);
    });
    test('getAge should return 0 years', () => {
        const spy = jest.spyOn(Date.prototype, 'getFullYear').mockReturnValue(1995);
        const birthdate = '1995-10-21';
        const age = (0, get_age_plugin_1.getAge)(birthdate);
        expect(age).toBe(0);
        expect(spy).toHaveBeenCalled();
    });
});
