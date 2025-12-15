const getUserNum = +prompt( `Plase Enter The Number` );
//console.log( getUserNum );
if( !isNaN( getUserNum ) && getUserNum > 0 && getUserNum <= 50 ){
    //console.log( getUserNum );
    for( let i = 1; i <= 10; i ++ ){
        console.log( `${getUserNum} X ${i} = ${i * getUserNum}` );
    }
}else{
    console.error(`Please Enter a valid number`);
}