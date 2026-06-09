//Variables var let const

//tempral dead zone

// console.log(a);
// var a = 10; OUTPUT: undifined





//DATA TYPES



// primitives: number, string, boolean, null, undefined, symbol

// non-primitives/references: object, array, function
// let a = "hello";
// let a = Symbol("hello");
// now both a varaiable are diffrent because of symbol 


// let a = [10,20,39];
// let b = a;
// b.pop();


// control statements

//if else 

    // const age = 18;

    // if(age >= 18){
    //     console.log("you are eligible to vote"  );
    // }
    // else{
    //     console.log("you are not eligible to vote");
    // }






    // else if = contains more if else value in a nested way 


    // if(age >= 18){
    //     console.log("you are an adult");
    // }
    // else if(age < 18){
    //     console.log("you are a minor");
    // }
    // else if(age < 8){
    //     console.log("you are a child")
    // }
    // else{
    //     console.log("you are not born yet");
    // }


    // switch case

    // const day = 3;

    // switch(day){
    //     case 1:
    //         console.log("Monday")
    //         break;
    //     case 2:
    //         console.log("tuesday")
    //         break;
    //     case 3:
    //         console.log("Wednesday")
    //         break;
    //     case 4:
    //         console.log("Thursday")
    //         break;
    //     case 5:
    //         console.log("Friday")
    //         break;
    //     case 6:
    //         console.log("Saturday")
    //         break;
    //     case 7:
    //         console.log("Sunday")
    //         break;
    //     default:
    //         console.log("Invalid day")

    // }

    // OUTPUT: wednesday


    //LOOPS

    //for loop 

    // pattern 
  /* 
  for(start; end; change;){}
            or
  for(initilization; condition; increment/decrement){}
  */

//   for(let i = 1; i < 101; i++){
//     console.log("hello world");
//   }



// while loop

//pattern
/*
while(end){}
     or 
while(condition){}
*/
// let i = 1;
// while(i < 101){

//     console.log(i);
//     i++;
// }

// do while loop = the code will run at least once even if the condition is false

//pattern 
/* 
do{initialization/change}
while(condition/end)
*/


// let i = 12;
// do{
//     console.log(i)
//     i++;
// }while(i < 2);  // here i wrote that the loop must shall be execcuted until i is less than 2 but i is already declared as 12 so its false but the loop will run at least once because of do while loop

//outpu: 12

// break and continue
// for (let i = 1; i < 101; i++){
//     console.log(i)
//     if(i === 12){
//         break; // it will break the loop when i is 12
//     }
// }


// for(let i = 1; i< 101; i++){
//     if(i === 10){
//         continue; // it will skip the iteration when i is 10 and continue with the next iteration
//     }
//     console.log(i);
// }

// print the multiplication table of 5
// for(let i = 1; i < 11; i++){
//     console.log(`5 * ${i} = ${5 * i}`);  //${} is used to insert the value of the variable in the string dynamically and it shall be used inside the backticks `` which is called template literals
// }

// sum of first 100 natural numbers


// let sum = 0;
// for (let i = 1; i < 101; i++){
  
//   sum = sum + i;
//   console.log(sum)
// }

// divisible by 3 between 1 and 50
// for(let i = 1; i < 51; i++){
//   if(i % 3 === 0){
//     console.log(i)
//   }
// }

// find numbers which are divisible by both 3 and 5 between 1 and 100
// for(let i = 1; i<101; i++){
//   if(i%3 === 0 && i%5 === 0){
//     console.log(i)
//   }
// }

// print first 5 odd numbers between 1 to 100 using the break statement

// let count = 0
// for(let i = 1; i < 101; i++){
//   if(i % 2 === 1){
//     count++;
//     console.log(i);
//   }
//   if(count === 5)break;
// }  



//FUNCTIONS

// declaration 

// function greet(){
//   console.log("hello world");
// }  

// greet(); // calling the function to execute the code inside the function body

// function with parameters


// let name = "john";l
// function greet(name){
//   console.log(`hello ${name}`);
// }

// greet("john"); // output: hello john


//fat arrow function ES6     

// () fat
// => arrow   

// const greet = ()=> {
//   console.log("hello world");
// }

// fat arrow function with parameters
// let name = "raj"
// const greet = (name) =>{
//   console.log(`hello ${name}`);
// }
// greet(name);    must write the parameter in the function call to get the output otherwise it will be undefined

// solving equations using functions

//ADDing two numbers

// function add(V1, V2){
//   console.log(V1 + V2);
// }



// add(45, 99); // output: 144



//first class function = a function that can be treated as a value and can be passed as an arguement to another function or can be returned from another function.
// let intro = (name) =>{
//          name();}


// intro(function(){
//   console.log("hello im learning javascript and this is a frist calss function");
// })



//Higher order funaction = a function that accepts a function in its parameters or returns a function in its body  



// function greetings(name){
//           name();  //accepting a function in the place of a parameter so its a higher order function now  
// }


// greetings(function() {
//   console.log("hello world" )
// })




//RETURN IN HIGHER ORDER FUNCTION


// function greet(){
//   return function(){
//     console.log("this is a higher order function ")
//   }
// }


// greet()()  // call it twice first for the greet function and the secodn is for the execution of the function that is in the return of the greet function.




//PURE VS IMPURE FUNCTION

//PURE = A FUNCTION THAT DOES NOT INFLUENCE THE VALUES OF ITS SURROUNDING CODE EXCEPT ITS OWN BODY

// let a = 10
// const greet = () =>{
//          console.log("this is a pure functon because this function does not effect the outer code except its own")
// }

// greet();

// //IMPURE
// const increment = () => {
//   a++
// }

// increment();

// console.log(a) //output = 11 as the increment function changed the value of "a" variable


//closures = a function that returns a function and that child function uses a variable that is declared in its parent function

// function greet(){
//   let name = "Alex"
//   return function(){
//     console.log(`hello ${name}`)
//   }
// }

// greet()() // as we can see that the greet function has a child function in return that is using the name variable in the console window but that name varaiable is declared inside its paremt function (greet) and so we would need to call both functions in order to make it work so i called the greet function twice by using the double parantheses this is called a closure



//lexical scoping = the scope of those variables that are declared in the function so it means that if a varaible declared in a function you cannot access that variable outside og that function this is called the lexicle scoping of a a varible,
                                                                                   //   OR 
//Lexical scoping in JavaScript means that the accessibility of a variable is strictly determined by its physical position within the written source code.


// const sum = () => {
//   let a = 20  // a variable is accessible inside the whole sum function because it exists in a parent function 
//   function sum2(){
//     let b = 40 // b variable is only acccessible in function sum 2 and sum3 function  
//     function sum3(){
//       let c = 60 // c is only accessible in the sum3 function
//     }
//   }
// }


//IIFE (immediately invoked function expressions ) = a function that does not has any name but is called just after the function declaration

// (function(){
//   console.log("this is a IIFE function")
// })(); // (); just called after the declaration 

// question = use rest parameter to accept any number of scores and return the total

// function getscores(...score){
// let total = 0;
// score.forEach(function(val){
//   total = total+val 
  
// })
// return total;  // return the value outside of your child function or if its not there then the function the parameters is written
// }


// console.log(getscores(10,20,90,200,784,343));



//pass a function into another function and execute it inside

// function greet(name){
//   name();
// }

// greet(function(){      // basically we are telling the js engine that access a function that is in the function called "greet" and console "here we go"
//   console.log("here we go")
// })


//ARRAYS: okay so if we talk about the other languages an array is called a collection that could store the multiple values of the same data types but since javascript supports the dynamic arrays so the arrays in js could store multiple values of different data types such as strings integer boolean etc. these are zero indexed means that the index shall start from the 0 not 1 ypu could perform different actions with the stored values in array by using the arrays properties, it starts with []



//CREATING AN ARRAY 

// 
// must use the sequare brackets to make an array 


//accessing the value stored in array

// console.log(arr[4]) // it starts with the 0 so if you want to access the 5th value of the array then it index number would be 4 


//modifying a value in an array

// arr[4] = 99;   // we told it to change the value of the 4th indexed value to the 99 and now in the place of 50 there should be 99
// console.log(arr[4]) 
   //OUTPUT = 99



   // array methods = a function that remains on the top of an object and performs some specific operations with the array.

   // push = adding a value in the array 


  //  arr.push(499); // a new value 499 is added to our array in the last (after 50)

   //pop = removing a value 

  //  arr.pop(); // 499 that was added using the push is removed these operations always works in LIFO (last in first out) however we could delete or add a value at a specifc location by defining the index number 

   // unshift = adds the value in the index of 0 of an array 

  // arr.unshift(786); // added a number 786 in the 0th ndex number of the array
  
  
  //splice     // for removing the value from the array it takes two values in its parentheses first one is for = where to remove the value and the 2nd one is for = how many value you wanna remove from it 
  
  
  //arr.splice(2,3) // the first field chose the 3rd indexed value and the 2nd value removed the 3 values from the chosen location of the array  

// slice = same as the splice but when you use this it wont change the values of the main index but instead it would make the changes in a new array which we could store into a avariable to acess it, it would just create a copy of the array then would make the changes into 

// let newarr = arr.slice(0,3)  // it created the copy of the "arr" array then made changes into it so for accessing the new copied array we stored that new copied array in a variable called = "newarr" and now we could acess the new copied arr and could check the changes into it.


//reverse = it reverses the array (changes the main array does not makes the copy like the slice)

//arr.reverse();  // the array shall be shown now in the reverse order


// sort = it accepts a function in its parentheses which returns a value and it accepts two variables in it parameters it is used to make the array in an ascending order or in decending order


// let newarr = arr.sort(function(a,b){  // accepts two parameters u could write any alphabet here it does not requires to be declared to the outside of the function
//   return b-a // a-b for acending b-a for decending
// })



// foreach = foreach accepts a function in its parentheses and a variable in it paarameter so the value could be stored into this and whatever you will write in that function shall be performed with th every single value in array

// arr.forEach(function(val){
//   console.log(val+5);  // now 5 would be added in the all values that are availble in the array 
// })


// map: use whenever you want to create a new array but on the basis of some other array data it accepts a function and it must be return and we could perform some actions in thatv new array and it would not change the values of the previous array bt would take take data from it and shall show it in new array it accepts a parameter


// let newarr = arr.map(function(val){
//         if(val> 50) return val;  // it would take data from the array called "arr" but would create a new array so we could save that new array in some variable to access its value and in the function it is defined that only those values should be shown those are greater than the 50 so it would only show them and in the place of smaller value there will be "undefined"
// })


// filter = also creates a new array like the map but it accepts only those values that are true for the given condition in the function and it also should be must return] true or false 


//reduce = combinning all the values and reducing the array to the only one value 


// let newarr = arr.reduce(function(accumalator,val){
//    return accumalator+val 
// },0)  // it gave the total of all the values those were available in the array 


//find = same as map but it finds a specific value in the array and it accepts a function and a parameter variable and after return you could write your condition "val === 1" find 1 in the parameter called the val and all of this should be stored in the new variable so we could access it 


//some = gives an output in boolean according to the condition accepts a function and a parameter to store the value and also could be stored into a variable to access the value must be return the condition 


//every = just like the && operator all the values must be true according to the condition otherwise it would give false 



// destructuring: storing some values of an array into a variable so it could be accessed later 


// let [a,b,,d] = arr;  // indexed 0 , 1 and 3th are saved into a varible a b and d 

// console.log(a)
// this is called the destructuring in arrays 

// spread operators in arrays 


// let arr2 = [...arr]  // all the values of arr array is copied and saved into a variable called arr2 and using the spread operator (...) we didnt have to put all the values manually


//objects: a collection of data that stores different values of different data types under a title {}

// declaring a object 

// let obj = {
//   name: "raj",
//   age: 22,
//   branch: "CSE",

// }

// acccessing the values of obj 


// console.log(obj.name)  // output "raj"


// only the properties defined in the object would be able to be accessed like this 

// nesting in objects 


// const user = {   // in this object some values are under other objects this is called the nesting of objects 
//   name: "raj",
//   address:{
//     state: "Punjab",
//     pin: 111111,
//     class:{
//       branch: "CSE"
//     }

//   }
// }


// // acccessing the nestedbject


// console.log(user.address.class.branch);  // OUTPUT: CSE 

// // all the values name must be the same as declared in the objects otherwise it shall throw an error 

