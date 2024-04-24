// ASSIGNMENT NO 03:

/*
store a person's name in a variable, and then peint prson's name in lowercase, uppercase, and titlecase. 
*/

console.log("ASSIGNMENT NO 03");

const personName: string = "Maham Shahid"; 

// lowercase 
console.log(personName.toLocaleLowerCase());

// Upercase 
console.log(personName.toLocaleUpperCase());

// titlecase
let firstletter: string = personName.charAt(0).toUpperCase();
let restletters: string = personName.slice(1).toLowerCase();

let titlecase = firstletter + restletters;

console.log(titlecase);