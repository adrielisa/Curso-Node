import { emailTemplate } from '../../src/js-foundation/01-template';

describe('js-foundation', () =>{
    test('emailTemplate should contain a name', () =>{
        expect(emailTemplate).toContain('{{name}}');
    });

    test('emailTemplate should contain {{name}} and {{orderID}}', () =>{
        //Puede ser con regex o con toContain
        expect(emailTemplate).toMatch(/{{name}}/); 
        expect(emailTemplate).toContain('{{orderID}}');
    } )
})