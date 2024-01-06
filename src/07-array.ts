(()=>{
    let prices = [1,2,3,4,5,6,'hola',true];
    //prices.push('asas');
    prices.push(1212);
    
    let products = ['hola',true];
    products.push(false);

    let mixed: (number|string|boolean|Object)[] = ['hola',true];
    mixed.push(12);
    mixed.push('as');
    mixed.push(true);
    mixed.push({});
    mixed.push([]);

    let numbers = [1,2,3,4,5];
    

})();