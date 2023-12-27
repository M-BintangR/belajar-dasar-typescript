"use strict";
describe('Function', function () {
    it('should support function in typescript', function () {
        function sayHello(name) {
            return `Hello ${name}`;
        }
        expect(sayHello("Bintang")).toBe("Bintang");
        function printHello(name) {
            console.info(`Hello ${name}`);
        }
        printHello("Bintang");
    });
});
