import { Employee, Manager } from '../src/employee';
import { Seller } from "../src/seller";
import { sayHello } from '../src/say-hello';

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

    it('should support indexable interface for non index number', function(){

        interface StringDirectionary {
            [key: string] : string;
        }

        const directionary : StringDirectionary = {
            "name": "Bintang",
            "address": "Indonesia",
        }

        console.info(directionary);

        expect(directionary["name"]).toBe("Bintang");
        expect(directionary["address"]).toBe("Indonesia");

    });

    it('should support extends interface', function(){

        const employee : Employee = {
            id: "1",
            name: "Bintang",
            division: "IT",
        };

        const manager : Manager = {
            id: "1",
            name: "Muh Bintang",
            division: "IT",
            numberOfEmployees: 12,
        }

        console.info(employee);
        console.info(manager);

    });

    it('should support function in interface', function(){

        const person : Person = {
            name: "Muhammad Bintang",
            sayHello: function(name: string) : string {
                return `Hello ${name} my name is ${this.name}`;
            } 
        }

        console.info(person.name);
        console.info(person.sayHello("Fery Fadul"));

    });

    it('should support intersection types', function(){

        interface HasName {
            name: string,
        }

        interface HasId {
            id: string,
        }

        type Domain = HasName & HasId;

        const domain : Domain = {
            id: "1",
            name: "Bintang",
        };

        console.info(domain);

    });

    it('should support types assertions', function(){
        const person : any = {
            name: "Bintang",
            age: 19,
        };

        const person2 : Person = person as Person;

        console.info(person2);
    });
});