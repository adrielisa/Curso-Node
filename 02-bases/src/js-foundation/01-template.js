"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.emailTemplate = void 0;
exports.emailTemplate = `
    <div>
        <h1>Hi, {{name}}</h1>
        <p>Thanks for your order.</p>
        <p>Order ID: {{orderID}}</p>
    </div>
`;
