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


