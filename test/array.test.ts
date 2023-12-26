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

        console.info(hobbies[0]);
        console.info(hobbies[1]);

        // hobbies[0] = "Coding"; // error
    });

    it('should suport tuple', function(){
        const person : readonly [string, string, number] = ["Bintang","Fery",18];

        console.info(person);

        console.info(person[0]);
        console.info(person[1]);
        console.info(person[2]);
    });
}); 