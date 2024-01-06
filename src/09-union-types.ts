(()=>{
    let userId: string|number;
    userId = 1212;
    userId = 'asasa';

    function greeting(myText:string|number){
        if(typeof myText === 'string'){
            console.log(`string ${myText}`)
        }else{
            console.log(`number ${myText}`)
        }
    }

    greeting('asas');
    greeting(12.2222);

})();