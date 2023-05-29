// Question 1

/*
1. Variable - a variable is a value assigned to an identifier, so you can reference and use it later the program. (it is also a container that holds information in our RAM) 

2. Value - it is a data type.

3. Data type - is a value we assign to a variable. Primitive data is a string, Numbers, Boolean, Undefined & Null

4. Initialization- We can assign data to our variables using the "=" assignment operator.

5. Tell me the difference between let, var, and const.
    let- we use let if you want to be able to reassign a values.
    var- we use var if we want to use the hoisting behavior. var is not good to use. Let is the best to use.
    const- We use const when we don’t want the value of a variable to change.

6. What is a variable scope? - variable Scope refers to  what variables and functions is a avalible in the code

7. When can you decide when to use a for or while, forEach and do while loop?
    for - when we want to repeat code a specfic number of times.
    while - when we want to reapeat code as long as the expression is true.
    forEach - when we want to repeat code in an array or object.
    do while - when we want to repeat code at least once
8. Define hoisting and variable scoping? 
    hoisting- is moving a function delcaration to the top of a file.
    variable Scoping- refers to  what variables and functions is a avalible in the code
*/

function fullName(){
    let fullName = "Codi Kader"
    console.log(fullName);
}

fullName()


// Question 2

let firstName = "Codi";
let lastName = "Kader";
let age = 22;

let subjects = [
    "maths", 
    "Bio",
    "Business",
    "Geography",
    "Hospitality"
];

let address = [
    "Imam Haron Road",
    314,
    "Landowne",
    "Cape Town",
    "South Africa"
];

console.log(firstName);
console.log(lastName);
console.log(age);
console.log(subjects);
console.log(address);

// Question 3

function btnResult(){
    let numb1 = +document.querySelector("#numb1").value
    let operator = document.querySelector("#operator").value
    let numb2 = +document.querySelector("#numb2").value
    let result = document.querySelector("#ds-answer")

    if (operator == "+"){
         result.innerText = numb1 + numb2;
    }else if (operator == "-"){
         result.innerText = numb1 - numb2;
    } else if (operator == "*"){
         result.innerText = numb1 * numb2;
    }else if (operator == "/"){
         result.innerText = numb1 / numb2;
    }
}

// Question 4

// i learnt this method from freecodecamp.com

function reverseString(str) {
     let subject = ""; 
    for (let string = str.length -1; string >= 0; string--){
        subject += str [string]; 
    }
    return subject; 
}

console.log(reverseString('programming')); /* shows on the console */

// console.dir(new String()); 
// answer from joel

let subject = "programming"; 

console.log(subject.split("").reverse().join(""));


// Question 5 


let namesAnddobs = [
    {
        name: "Codi",
        dob: 2000-03-08
    },
    {
        name: "Keeno",
        dob: 2002-06-04
    },
    {
        name: "Masood",
        dob: 2003-09-16
    },
    {
        name: "Uthmaan",
        dob: 2000-06-21
    },
    {
        name: "Imtiyaaz",
        dob: 1999-12-01
    }
]

console.log(namesAnddobs[2].name);

function age1(dob) {
    let diff_ms = Date.now() - dob.getTime();
    let age_dt = new Date(diff_ms);

    return Math.abs(age_dt.getFullYear() - 2003);
    
}

age1(new Date(2003-09-16));

console.log(age1(new Date(2003-09-16)));
