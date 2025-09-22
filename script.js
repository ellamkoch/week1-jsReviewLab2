//create fortuneteller function
function fortuneTeller(name, age) {
    let nameWithAge = ' ';

    nameWithAge = `Name: ${name} and Age: ${age}`;

    return nameWithAge;
}
let userName = prompt("What is your name?");
let userAge = prompt("How old/young do you feel?");

console.log(fortuneTeller(userName, userAge));

