(()=>{
    /*let myNUmber: number;
    let myString:string;*/

    let muNull:null = null;
    let myUndefined:undefined = undefined;

    let myNumber: number | null  = null;
    myNumber = 12;

    let myString :string | undefined = undefined;
    myString = 'asas';

    function hi(name:string | null){
        let hello = 'hola ';
        if(name){
            hello += name.toLowerCase();
        }else{
            hello+='nobody';
        }
        console.log(hello)
    }
    function hiV2(name:string | null){
        let hello = 'hola ';
        hello+=name?.toLowerCase()||'nobody';
        console.log(hello)
    }
    hi('Nicolas');
    hi(null);
    hiV2('Nicolas');
    hiV2(null);

})();