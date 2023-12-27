
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
});