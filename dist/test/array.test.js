"use strict";
describe("Array", function () {
    it('should same with javascript', function () {
        const names = ["Bintang", "Fery", "Syahru"];
        const values = [1, 2, 3];
        console.info(names);
        console.info(values);
    });
    it('should suport readonly array', function () {
        const hobbies = ["Menulis", "Membaca"];
        console.info(hobbies);
        // hobbies[0] = "Coding"; // error
    });
});
