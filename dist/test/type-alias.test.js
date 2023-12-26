describe("Type Alias", function () {
    it('should should support in javascript', function () {
        const category = {
            id: 1,
            name: "Handphone",
        };
        const product = {
            id: "2",
            name: "Samsung s20",
            price: 20000000,
            category: category,
        };
        console.info(category);
        console.info(product);
        // product.description = "Handphone bagus"; // error
    });
});
export {};
