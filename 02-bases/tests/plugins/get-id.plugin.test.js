"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const get_id_plugin_1 = require("../../src/plugins/get-id.plugin");
describe('plugins/get-id.ts', () => {
    test('getUUID() should return a UUID', () => {
        const uuid = (0, get_id_plugin_1.getUUID)();
        expect(typeof uuid).toBe('string');
        expect(uuid.length).toBe(36);
    });
});
