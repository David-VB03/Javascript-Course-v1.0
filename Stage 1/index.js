const singlerose_price=8;
const lily_price=10;
const tulip_price=2;

let roses_quantity=70;
let lilies_quantity=50;
let tulips_quantity=120;


roses_quantity-=20;
lilies_quantity-=30;


let rosesValue=singlerose_price * roses_quantity;
let liliesValue=lily_price * lilies_quantity;
let tulipsValue=tulip_price * tulips_quantity;    

let total=rosesValue+liliesValue+tulipsValue;


console.log("Rose - unit price: ",singlerose_price ," quantity: ",roses_quantity," total price: ",rosesValue);
console.log("Lily - unit price: ",lily_price," quantity: ",lilies_quantity," total price: ",liliesValue);
console.log("Tulip - unit price: ",tulip_price,  " quantity: ",tulips_quantity ," total price: ",tulipsValue);
console.log("total price of all flowers: ",total);




let FirstUser_name="Maxwell Wright";
let SecondUser_name="Raja Villareal";
let thirdUser_name="Helen Richards";

let FirstUser_phone="0191 719 6495";
let SecondUser_phone="0866 398 2895";
let thirdUser_phone="0800 111";

let firstUser_email="Curabitur_egestas.nunc";
let secondUser_email="poulpser_egestas.nunc";
let thirdUser_email="libero@convalidis.nunc";

console.log("");
console.log("First user name: ",FirstUser_name," phone number: ",FirstUser_phone," email: ",firstUser_email);
console.log("Third user name: ",thirdUser_name," phone number: ",thirdUser_phone," email: ",thirdUser_email);