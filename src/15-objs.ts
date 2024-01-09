(()=>{
    const login = (data:{email:string, password:string}) =>{
        console.log(data.email,data.password);
    }
    login({
        email:"correo",
        password:"contraseña"
    });

    type Sizes = 'S'|'M'|'L'|'XL';

    const products: any[] = [];

    const addProduct = (data:{
        title:string,
        createdAt:Date,
        stock:number,
        size?:Sizes
    })=>{
        products.push(addProduct)
    }

    addProduct({
        title:'prod1',
        createdAt: new Date(1993,1,1),
        stock:12
    });

    console.log(products)

})();