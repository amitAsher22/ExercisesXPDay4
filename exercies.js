// Exercise 1 : Information


// Instructions
// Part I

// Create a function called infoAboutMe() that takes no parameter.
// The function should console.log a sentence about you (ie. your name, age, hobbies ect…).
// Call the function.

// function infoAboutMe(){
//     let myName = "amit";
//     let myAge = 26;
//     let myHobbies = ["play hand ball with friends" , "go out to restruants"];
//     let TheSentence = `my name is : ${myName} and my age is :${myAge} , my hobbies are '${myHobbies[0]}' and '${myHobbies[1]}'`
//     console.log(TheSentence);
// }

// infoAboutMe()



// Part II

// Create a function called infoAboutPerson(personName, personAge, personFavoriteColor) that takes 3 parameters.
// The function should console.log a sentence about the person (ie. “You name is …, you are .. years old, your favorite color is …”)
// Call the function twice with the following arguments:
// infoAboutPerson("David", 45, "blue")
// infoAboutPerson("Josh", 12, "yellow")



// function infoAboutPerson(personName, personAge, personFavoriteColor){
//     let TheSentence = `my name is ${personName} you are ${personAge} years old, my favorite color is ${personFavoriteColor}`
//     console.log(TheSentence);
// }

// infoAboutPerson("David" , 45 , "blue");
// infoAboutPerson("Josh" , 12 , "Yellow");



// Add a parameter personHobbies to the function infoAboutPerson(personName, personAge, personFavoriteColor, personHobbies).
// The function should
// console.log a sentence about the person (ie. “You name is …, you are .. years old, your favorite color is …”)
// console.log the person’s hobbies one by one (ie. loop through the array of hobbies).
// Call the function twice with the following arguments:
// infoAboutPerson("David", 45, "blue", ["tennis", "painting"])
// infoAboutPerson("Josh", 12, "yellow", ["videoGame", "hanging out with friends", "playing cards"])

// function infoAboutPerson(personName, personAge, personFavoriteColor, personHobbies){
//    for(let i = 0; i < personHobbies.length; i++){
//     TheSentence = `my name is ${personName} you are ${personAge} years old, my favorite color is ${personFavoriteColor} and my hobbies are ${personHobbies}`
    
//    }
//    console.log(TheSentence);
    
// }

// infoAboutPerson("David", 45, "blue", ["tennis", "painting"]);

// infoAboutPerson("Josh", 12, "yellow", ["videoGame", "hanging out with friends", "playing cards"])



////////////////////////////////////////////////////////////////////////////////////////////  Exercise 2 : Keyless Car


// Exercise 2 : Keyless Car

// Instructions
// Ask the user for their age, and save the value to a variable.
// Create a function called checkDriverAge() that will notify the user if they are permitted to drive. They must be at least 18 to drive.
// if the user is too young, alert “Sorry, you are too young to drive this car. Powering off”
// if the user is old enough, alert “You are old enough to drive, Powering On. Enjoy the ride!”
// if the user just turned 18, alert “Congratulations on your first year of driving. Enjoy the ride!”
// Call the function.
// Instead of using prompt to ask the user for their age, have the checkDriverAge() function accept a parameter age.


//  ageUser = Number(prompt("write your age please"));

// function checkDriverAge(ageUser){
//     if(ageUser < 18){
//         console.log("you must be at least 18 to drive, sorry");
//     }
//     else if(ageUser > 18){
//         console.log("You are old enough to drive, Powering On. Enjoy the ride! ");
//     }else if(ageUser === 18){
//         console.log("Congratulations on your first year of driving. Enjoy the ride! ");
//     }
// }

// checkDriverAge(ageUser)

//////////////////////////////////////////////////////////////////////////////// Exercise 3

// Exercise 3: Odd Or Even

// Instructions
// Create a function called checkNumber() that takes no parameter.
// In the function, loop through numbers 0 to 100.
// Add an if/else block
// If the number is even, console.log "the number <number> is even"
// Else, console.log "the number <number> is odd"
// Call the function

// function checkNumber(){
//     for(var i = 0; i <= 100; i++){
//         if(i % 2 == 0 ){
//             console.log(`the number ${i} is even`);
//         }else{
//             console.log(`the number ${i} is odd`);
//         }
//     }
// }

// checkNumber()


///////////////////////////////////////////////////////////////////////////////  Exercise 4

// Exercise 4 : Tips


// Instructions
// John created a simple tip calculator to help calculate how much to tip when he and his family go to restaurants.

// The calculator has the following rules:
// 1. Tip 20% when the bill is less than $50,
// 2. Tip 15% when the bill is between $50 and $200,
// 3. Tip 10% if the bill is more than $200.



// Ask John for the amount of the bill.
// Create the program explained above.
// In the end, John would like to know:
// Tip amount.
// Final bill (bill + tip).
// (NOTE: To calculate 20% of a value, simply multiply it with 20/100 = 0.2)

// let amountBill = Number(prompt("write the amount of your bill , please"))


// function calculator (amountBill){
//     let twenty = amountBill * (20/100)
//     let fifnty = amountBill * (50/100)
//     let ten = amountBill * (50/100)
//    if(amountBill < 50){
//        console.log(`the tip is 20% from bill is ${twenty} , Final bill is : ${twenty + amountBill}`);
//    }else if(amountBill >= 50 && amountBill <= 200 ){
//     console.log(`the tip is 20% from bill is ${fifnty} , Final bill is : ${fifnty + amountBill}`);
//    }else if(amountBill > 200){
//     console.log(`the tip is 20% from bill is ${ten} , Final bill is : ${ten + amountBill}`);
//    }
// }

// calculator(amountBill)



///////////////////////////////////////////////////////////////////////////////  Exercise 5


// Exercise 5 : Find The Numbers Divisible By 23

// Instructions
// Create a function call isDivisible() that takes no parameter.
// In the function, loop through numbers 0 to 500.
// Console.log all the numbers divisible by 23.
// At the end, console.log the sum of all numbers that are divisible by 23.

// Outcome : 0 23 46 69 92 115 138 161 184 207 230 253 276 299 322 345 368
// 391 414 437 460 483
// Sum : 5313


// function isDivisible(){
//   let sum = 0 
//     for(let i = 0; i <= 500; i++){
//       if(i % 23 ===0 ){
//           console.log(`This number ${i} is divided by 23 `);
//           console.log(`the sum of numbers is : ${sum += i}`);
//       }

     
//     }
   
// }

// isDivisible()


///////////////////////////////////////////////////////////////////////////////  Exercise 6


// Exercise 6 : Amazon Shopping

// Instructions
// let amazonBasket = {
//     glasses: 1,
//     books: 2,
//     floss: 100
// }
// Create a function called checkBasket().
// It should:
// prompt the user for an item
// let the user know if the item is in the basket
// Hint: Use the in keyword inside the conditional




// function checkBasket(){
//     let amazonBasket = {
//         glasses: 1,
//         books: 2,
//         floss: 100
//     }
//     let answerUser = prompt("writem item from basket")
//     for(item in amazonBasket){
     
//        if(answerUser == item){
//            console.log(`this item ${item} is in the basket`);
//        }else{
//            console.log(`your item  is not into item `);
//        }
//     }
// }

// checkBasket()


///////////////////////////////////////////////////////////////////////////////  Exercise 7



// Exercise 7 : Shopping List
// Instructions
// let stock = { 
//     "banana": 6, 
//     "apple": 0,
//     "pear": 12,
//     "orange": 32,
//     "blueberry":1
// }  

// let prices = {    
//     "banana": 4, 
//     "apple": 2, 
//     "pear": 1,
//     "orange": 1.5,
//     "blueberry":10
// } 
// Add the stock and prices objects to your js file.

// Create an array called shoppingList with the following items: “banana”, “orange”, and “apple”. It means that you have 1 banana, 1 orange and 1 apple in your cart.

// Create a function called myBill() that takes no parameters.

// The function should return the total price of your shoppingList. In order to do this you must follow these rules:
// The item must be in stock.
// If the item is in stock find out the price in the prices object.
// Call the myBill() function.
// Bonus: If the item is in stock, decrease the item’s stock by 1


// let stock = { 
//     "banana": 6, 
//     "apple": 0,
//     "pear": 12,
//     "orange": 32,
//     "blueberry":1
// }  

// let prices = {    
//     "banana": 4, 
//     "apple": 2, 
//     "pear": 1,
//     "orange": 1.5,
//     "blueberry":10
// } 


// let shoppingList = ["banana" , "orange" , "apple"];

// function myBill(){
//     for(item in stock){
//         for(MyList of shoppingList){
//             if(item === MyList){
//                 console.log(`the item is : ${item} and it's in the stock `);
//             }
//         }
        
//     }
  

// }

// myBill()


///////////////////////////////////////////////////////////////////////////////  Exercise 8