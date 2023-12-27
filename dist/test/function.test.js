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
    it('should support function overloading', function () {
        function callMe(value) {
            if (typeof value == "number") {
                return value;
            }
            else if (typeof value == "string") {
                return value;
            }
        }
        expect(callMe(100)).toBe(100);
        expect(callMe("Bintang")).toBe("Bintang");
    });
    it('should support function as parameter', function () {
        function sayHello(name, filter) {
            return `Hello ${filter(name)}`;
        }
        function toUpper(name) {
            return name.toUpperCase();
        }
        expect(sayHello("Bintang", toUpper)).toBe("Hello BINTANG");
        // secara langsung
        expect(sayHello("Bintang", function (name) {
            return name.toUpperCase();
        })).toBe("Hello BINTANG");
        // arrow function
        expect(sayHello("Bintang", (name) => name.toUpperCase())).toBe("Hello BINTANG");
    });
});
