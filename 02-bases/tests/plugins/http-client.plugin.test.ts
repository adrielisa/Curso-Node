import { httpClientPlugin } from "../../src/plugins/http-client";

describe('plugins/http-client.plugin.ts', () => {
    test('httpClientPlugin.get() should return a string', async () => {
        const data = await httpClientPlugin.get('http://jsonplaceholder.typicode.com/todos/1')
        expect(data).toEqual({
            "userId": 1,
            "id": 1,
            "title": "delectus aut autem",
            "completed": expect.any(Boolean)
        });
    });
    
    test('httpClientPlugin should have the methods POST, PUT, DELETE', () =>{
        expect (typeof httpClientPlugin.post).toBe('function');
        expect (typeof httpClientPlugin.put).toBe('function');
        expect (typeof httpClientPlugin.delete).toBe('function')
    }) 
});