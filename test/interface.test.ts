import { Seller } from "../src/seller";

describe('Interface', function(){
    it('should support in typescript', function(){

        const seller : Seller = {
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

    it('should support function interface', function(){
        interface AddFunction {
                (value1: number, value2: number): number;
        }

        const add : AddFunction = (value1: number, value2: number) : number => {
            return value1 + value2;
        }

        expect(add(2,2)).toBe(4);

    });

    it('should support indexable interface', function(){

        interface StringArray {
            [index: number] : string;
        }

        const names : StringArray = ["Muhammad Bintang","Fery Fadul Rahman","Muh Ilham"];

        console.info(names[0]);
        console.info(names[1]);
        console.info(names[2]);

    });
});