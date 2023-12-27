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
});
export {};
