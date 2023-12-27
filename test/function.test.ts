
describe('Function', function(){
    it('should support function in typescript', function(){
        function sayHello(name: string) : string {
            return `Hello ${name}`;
        }

        expect(sayHello("Bintang")).toBe("Bintang");

        function printHello(name: string) : void {
            console.info(`Hello ${name}`);
        }

        printHello("Bintang");
    });

    it('should support function default value', function(){
        function sayHello(name: string = "Guest") : string {
            return `Hello ${name}`;
        }

        expect(sayHello("Bintang")).toBe("Hello Bintang");
        expect(sayHello()).toBe("Hello Guest");
    });

    it('should support rest parameter', function(){
        function sum(...values : number[]) : number {
            let total= 0;
            for(const value of values){
                total + value;
            }
            return total;
        }

    });

    it('should support optional parameter', function(){
       function sayHello(firstname : string, lastname? : string) : string {
        return `Hello ${firstname} ${lastname ?? ''}`;
       }

       expect(sayHello("Bintang")).toBe("Hello Bintang");
       expect(sayHello("Muhammad Bintang")).toBe("Hello Muhammad Bintang");
    });
});