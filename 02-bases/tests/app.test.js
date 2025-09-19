"use strict";
describe('App', () => {
    test('should be defined', () => {
        expect(true).toBe(true);
    });
});
describe('Test in the App file', () => {
    test('Should be true', () => {
        //1.- Arrange
        const num1 = 10;
        const num2 = 20;
        //2.- Act
        const result = num1 + num2 + 5;
        //3.- Assert
        expect(result).toBe(35);
    });
});
