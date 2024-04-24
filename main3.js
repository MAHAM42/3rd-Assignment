"use strict";
// ASSIGNMENT NO 03:
/*
store a person's name in a variable, and then peint prson's name in lowercase, uppercase, and titlecase.
*/
console.log("ASSIGNMENT NO 03");
const personName = "Maham Shahid";
// lowercase 
console.log(personName.toLocaleLowerCase());
// Upercase 
console.log(personName.toLocaleUpperCase());
// titlecase
let firstletter = personName.charAt(0).toUpperCase();
let restletters = personName.slice(1).toLowerCase();
let titlecase = firstletter + restletters;
console.log(titlecase);
