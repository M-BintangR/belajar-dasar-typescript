describe('Interface', function () {
    it('should support in typescript', function () {
        const seller = {
            id: "1",
            name: "Muhammmad Bintang",
            address: "KOTA MAKASSAR",
            nib: "123123321",
            npwp: "321321123",
        };
        console.info(seller);
        seller.name = "Toko Bintang"; // ini bisa 
        // seller.nib = "12345678"; // error ❌
    });
    it('should support function interface', function () {
        const add = (value1, value2) => {
            return value1 + value2;
        };
        expect(add(2, 2)).toBe(4);
    });
    it('should support indexable interface', function () {
        const names = ["Muhammad Bintang", "Fery Fadul Rahman", "Muh Ilham"];
        console.info(names[0]);
        console.info(names[1]);
        console.info(names[2]);
    });
    it('should support indexable interface for non index number', function () {
        const directionary = {
            "name": "Bintang",
            "address": "Indonesia",
        };
        console.info(directionary);
        expect(directionary["name"]).toBe("Bintang");
        expect(directionary["address"]).toBe("Indonesia");
    });
});
export {};
