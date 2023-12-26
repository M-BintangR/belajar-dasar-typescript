describe("Array", function(){
    it('should same with javascript', function(){
       
        const names : string[] = ["Bintang","Fery","Syahru"];
        const values : number[] = [1,2,3];

        console.info(names);
        console.info(values);

    });

    it('should suport readonly array', function(){
        const hobbies : ReadonlyArray<string> = ["Menulis","Membaca"];

        console.info(hobbies);

        // hobbies[0] = "Coding"; // error
    });
}); 