let askAboutBill = +prompt( `Your Bill Is` );
let userPayment = +prompt( `Your Amount` );
let paymentRound = Math.ceil( userPayment );
//console.log( paymentRound );

if( userPayment >= askAboutBill && userPayment != askAboutBill ){
   let remainigAmount =  userPayment - askAboutBill; 
   if( remainigAmount <= 4 ){
        alert( `Your Reaminig Amount is ${remainigAmount}`);
   }else if( remainigAmount <= 9 ){
        alert( `Your Total Remainig is ${remainigAmount}. Please take it 1 chocolate and chocolate cost is 5 Ruppes. Now your remaining Amount is ${remainigAmount - 5}. Please take it`);
   }else if( remainigAmount <= 10 ){
        alert( `Your Total Remainig is ${remainigAmount}. Please take it 2 chocolates and per chocolate cost is 5 Ruppes. Now your remaining Amount is ${remainigAmount - 10}.`);
   }
}

