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


