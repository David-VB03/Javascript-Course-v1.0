const simbol=Symbol("id");
let valueRandom;

let animal={
    name:"russian",
    age:"2",
    color:"white",
    eyes_Color:"blue",
    favorite_food:"meat",
}
let price=1000;
let isAvailable=true;
let PriceAllCountry=250515616516554n;
let PI=3.14;

function calculatemyIMC(height,weight){
    let imc=weight/(height*height);
    return imc;
}

let toy_price=250;
console.log(typeof valueRandom); //undefined
console.log(typeof animal); //object
console.log(typeof PriceAllCountry);
console.log(typeof PI);
console.log(typeof simbol);
console.log(calculatemyIMC(1.60,53));
console.log(typeof calculatemyIMC); //function

let capturaVal=typeof toy_price;
console.log(capturaVal);
console.log(typeof capturaVal); //string


let total=toy_price*"Hello Main Boss";
console.log(total); //NaN
console.log(typeof total); //number

console.log("This is the 'price' of the toy ");
console.log(`${toy_price}`); //This is the 'price' of the toy ${toy_price}