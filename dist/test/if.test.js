"use strict";
describe('If Statement', function () {
    it('should support in typescript', function () {
        const examValue = 90;
        if (examValue > 80) {
            console.info("Good");
        }
        else if (examValue > 60) {
            console.info("Not Bad");
        }
        else {
            console.info("Try Again");
        }
    });
    it('should support ternary operator', function () {
        const value = 80;
        const say = value >= 75 ? "Congrulations" : "Try Again";
        console.info(say);
    });
    it('should support switch statement', function () {
        function sayHello(name) {
            switch (name) {
                case "Bintang":
                    return "Hi Bintang";
                case "Fery":
                    return "Hello Fery";
                default:
                    return "Hello Everyone";
            }
        }
        console.info(sayHello("Bintang"));
        console.info(sayHello("Fery"));
        console.info(sayHello(null));
    });
});
