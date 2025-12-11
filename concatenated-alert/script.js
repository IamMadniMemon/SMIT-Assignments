// if( 2 % 2 == 0 ){
//   console.log( 'Even Number' );
// }else{
//   console.log( 'Odd Number' );
// }
let getName = prompt( 'Please Enter Your Name' );
let getAge = +prompt( 'Please Enter Your Age' );
//console.log( typeof(getAge), typeof(getName) )
//alert( `Congeates! ${getName}, You'r ${getAge} years old` );;
let currentTime = new Date();
let getYear = currentTime.getFullYear();

alert( `Your birth year is ${getYear - getAge}` );
