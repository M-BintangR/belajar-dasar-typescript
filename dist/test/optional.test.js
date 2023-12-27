"use strict";
describe('Optional', function () {
    it('should support null and undifined', function () {
        function sayHello(name) {
            if (name) {
                console.info(`Hello ${name}`);
            }
            else {
                console.info('Hello');
            }
        }
        sayHello("Bintang");
        const name = undefined;
        sayHello(name);
        sayHello(null);
    });
});
