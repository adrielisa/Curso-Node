import { getUserByIDCallback } from "../../src/js-foundation/03-callbacks";

describe('js-foundation/03-callback', () => {
    
    test('getUserByIDCallback should return an error if user does not exist', (done) => {
        const id = 10;
        getUserByIDCallback(id, (error, user) => {
            expect(error).toBe(`User not found with id ${id}`)
            expect(user).toBeUndefined();
            done();
        })
    })

    test('getUserByIDCallback should return the user ID and his name', (done) => {
        const id = 2
        getUserByIDCallback(id, (error, user) => {
            expect(error).toBeUndefined();
            expect(user).toEqual({ id: 2, name: 'Jane Doe' });
            done();
        });
    })
});