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