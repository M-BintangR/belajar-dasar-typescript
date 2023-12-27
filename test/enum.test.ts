import { Customer, CustomerType } from "../src/enum";

describe('Enum', function(){
    it('should support in javascript', function(){
        const customer : Customer = {
            id: "1",
            name: "Muhammad Bintang",
            type: CustomerType.GOLD,
        }

        console.info(customer);
    });
});