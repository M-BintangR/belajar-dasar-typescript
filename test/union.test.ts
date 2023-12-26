describe("Union", function(){
    it('should should support in javascript', function(){
        let sample : number | string | boolean = "Bintang";
        console.info(sample);
        sample = 100;
        console.info(sample);
        sample = true;
        console.info(sample);
    });

    it('should support typeof operator', function(){
        function proses(value : number | string | boolean){
            if(typeof value == "string"){
                value.toUpperCase();
            }else if(typeof value == "number"){
                value + 2;
            }else{
                !value;
            }
        }

        expect(proses("Bintang")).toBe("Bintang");
        expect(proses(100)).toBe(102);
        expect(proses(true)).toBe(false);
    });
}); 