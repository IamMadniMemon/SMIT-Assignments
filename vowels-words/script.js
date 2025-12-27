let getUsername = prompt('Please Enter Your Name');
let arr = getUsername.split('');
let vowelWords = ['a', 'e', 'i', 'o', 'u'];
//console.log( arr );

for (let i = 0; i < arr.length; i++) {
    let magicNumber = i + 1;
    let printing;
    if (arr[i] == vowelWords[0] || arr[i] == vowelWords[1] || arr[i] == vowelWords[2] || arr[i] == vowelWords[3] || arr[i] == vowelWords[4]) {
        //console.log(arr[i]);
         printing = ` is vowel word`;
    }else{
        printing = ``;
    }
    console.log( arr[i] + printing );
}
