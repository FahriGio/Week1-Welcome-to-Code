// Problem
// Mirip seperti soal nomor 3, tapi tampilkan juga panjang kata masing-masingnya!


let word4 = 'wow JavaScript is so cool';
let exampleFirstWord4 = word4.substring(0, 3);
let firstWordLength = exampleFirstWord4.length;
let SecondWord4 = word4.substring(4, 14);
let ScLength = SecondWord4.length;
let ThirdWord4 = word4.substring(15, 17);
let ThLength = ThirdWord4.length;
let FourthWord4 = word4.substring(18, 20);
let FoLength = FourthWord4.length;
let FifthWord4 = word4.substring(21, 25);
let FifLenght = FifthWord4.length;

console.log('First Word: ' + exampleFirstWord4 + ', with length: ' + firstWordLength);
console.log('Second Word: ' + SecondWord4 + ', with length: ' + ScLength);
console.log('Third Word: ' + ThirdWord4 + ', with length: ' + ThLength);
console.log('Fourth Word: ' + FourthWord4 + ', with length: ' + FoLength);
console.log('Fifth Word: ' + FifthWord4 + ', with length: ' + FifLenght);