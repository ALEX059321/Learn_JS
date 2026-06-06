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

    const age = 18;

    if(age >= 18){
        console.log("you are eligible to vote"  );
    }
    else{
        console.log("you are not eligible to vote");
    }






    // else if = contains more if else value in a nested way 


    if(age >= 18){
        console.log("you are an adult");
    }
    else if(age < 18){
        console.log("you are a minor");
    }
    else if(age < 8){
        console.log("you are a child")
    }
    else{
        console.log("you are not born yet");
    }


    // switch case

    const day = 3;

    switch(day){
        case 1:
            console.log("Monday")
            break;
        case 2:
            console.log("tuesday")
            break;
        case 3:
            console.log("Wednesday")
            break;
        case 4:
            console.log("Thursday")
            break;
        case 5:
            console.log("Friday")
            break;
        case 6:
            console.log("Saturday")
            break;
        case 7:
            console.log("Sunday")
            break;
        default:
            console.log("Invalid day")

    }

    OUTPUT: wednesday