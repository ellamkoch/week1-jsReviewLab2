//create fortuneteller function
function fortuneTeller(name, age) {
    let nameWithAge = '';
    // name rules
    if(name.length > 7) { // more than 7 letters message
        nameWithAge += `${name} will travel the world and collect many stories and `;
    }
    if (name.length < 5) { // less than 5 letters message
        nameWithAge += `${name} will stumble upon unexpected treasure soon and `;
    }
    
    if (name.length >= 5 && name.length <= 7) { // between 5 and 7 letters message
        nameWithAge += `${name} will cross paths with a mysterious stranger and `;
    }

 
    // age rules
    if (age < 18) { // under 18 message
        nameWithAge += `will master a skill that surprises everyone.`;
    }

    if (age >= 18 && age <= 25) { // between 18 and 25 message
        nameWithAge += `will find joy in an unexpected friendship.`;
    }

    if (age >= 26 && age <= 40) { // between 26 and 40 message
        nameWithAge += `will make a bold decision that changes their path.`;
    }

    if (age >= 41 && age <= 61) { // between 41 and 60 message
        nameWithAge += `will inspire others with wisdom and humor.`;
    }
    if (age > 61) { // over 60 message
        nameWithAge += `will enjoy laughter and peace in abundance.`;
    }
    // return name and age
    nameWithAge += `Name: ${name} and Age: ${age}`;

    return nameWithAge;
}
let userName = prompt(`What is your name?`);
let userAge = prompt(`How old/young do you feel?`)*1; // Converts input to a number

console.log(fortuneTeller(userName, userAge));

