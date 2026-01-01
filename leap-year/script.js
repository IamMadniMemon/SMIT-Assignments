let getUsername = +prompt('Please Enter The Year');
let getComDate = new Date( getUsername, 0, 1 );
let getYear = getComDate.getFullYear();
// console.log( getYear );

if( getYear % 400 == 0 ){
    console.log( `${getYear} Leap Year is year main 366 days the` );
}else if( getYear % 100 == 0 ){
    console.log( `${getYear} Leap Year is year main 366 days the` );
}else if( getYear % 4 == 0 ){
    console.log( `${getYear} Leap Year is year main 366 days the` );
}else{
    console.log( `${getYear} Leap Year Nae Hai` );
}









