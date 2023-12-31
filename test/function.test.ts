
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

    it('should support function overloading', function(){
        function callMe(value: number) : number;
        function callMe(value: string) : string;
        function callMe (value: any) : any {
            if(typeof value == "number"){
                return value;
            }else if(typeof value == "string"){
                return value;
            }
        }

        expect(callMe(100)).toBe(100);
        expect(callMe("Bintang")).toBe("Bintang");
    });

    it('should support function as parameter', function(){
        function sayHello(name : string, filter: (name : string) => string ) : string{
            return `Hello ${filter(name)}`;
        }

        function toUpper(name : string) : string{
            return name.toUpperCase();
        }

        expect(sayHello("Bintang", toUpper)).toBe("Hello BINTANG");

        // secara langsung
        expect(sayHello("Bintang", function(name: string): string {
            return name.toUpperCase();
        })).toBe("Hello BINTANG");

        // arrow function
        expect(sayHello("Bintang", (name: string): string => name.toUpperCase())).toBe("Hello BINTANG");
    });
});