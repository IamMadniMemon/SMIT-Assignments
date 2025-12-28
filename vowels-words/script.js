let getUsername = prompt('Please Enter Your Name');
let toLower = getUsername.toLowerCase();
let arr = toLower.split('');
//console.log( arr );
let vowelWords = ['a', 'e', 'i', 'o', 'u'];
let countVowelWords = 1;
let isContains = `Your name is contains 0 vowel words`;

for (let i = 0; i < arr.length; i++) {
    if ( arr[i] == vowelWords[0] || arr[i] == vowelWords[1] || arr[i] == vowelWords[2] || arr[i] == vowelWords[3] || arr[i] == vowelWords[4] ) {
        isContains = `Your name is contains ${countVowelWords++} vowel words`;
    }
}
alert( isContains );
