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
    it('should support function default value', function () {
        function sayHello(name = "Guest") {
            return `Hello ${name}`;
        }
        expect(sayHello("Bintang")).toBe("Hello Bintang");
        expect(sayHello()).toBe("Hello Guest");
    });
    it('should support rest parameter', function () {
        function sum(...values) {
            let total = 0;
            for (const value of values) {
                total + value;
            }
            return total;
        }
    });
    it('should support optional parameter', function () {
        function sayHello(firstname, lastname) {
            return `Hello ${firstname} ${lastname !== null && lastname !== void 0 ? lastname : ''}`;
        }
        expect(sayHello("Bintang")).toBe("Hello Bintang");
        expect(sayHello("Muhammad Bintang")).toBe("Hello Muhammad Bintang");
    });
});
