// const person = {
//     name: "Artem",
//     age: 20,
//     adress : {
//         city : "Vtb", 
//         street : "str",
//         number : "12",
//     },
//     hobbie :  [
//        "fotball"
//     ],
//     walk(){
// console.log("Я умею ходить")
//     }
// }
// // person.walk()





// const product =  {
// "apple" : 1.2,
// "banana":0.8,
// "orange":1.5,
// "mango":2,
// }
// const productNames =Object.keys(product);

// // console.log(productNames)
// // const productPrices = Object.values(product);
// // console.log(productPrices)

// productNames.forEach(key=> {
//     console.log("Название товара:", key, "Цена товара:", product[key])
    
// });

// const arrayOfArrays =  Object.entries(product);

// for (let i = 0; i<arrayOfArrays.length; i++){
//     console.log("\nТовар номер",i+1,": ")
//     for (let j = 0; j<2 ; j++){
//         console.log(arrayOfArrays[i][j])
//     }

// };


// // const newPerson  = Object.create(person)
// // newPerson.city ="Moscow"
// // newPerson.isImpoyed = true;

// // console.log(newPerson.name)


// // for (let key in newPerson){
// //     console.log(key + ":" + newPerson[key])
// // }

// // console.log("\nNext\n\n")
// // for (let key in newPerson){
// //     if (person.hasOwnProperty(key)){
// //         console.log(key + ":" + newPerson[key])
// //     }
// // }



// // console.log()
// // console.log("city:", friend.city)

// // friend['age'] = 19
// // console.log(friend.age)

// // friend.city = "Minsk"
// // console.log(friend.city)
// const copyOriginal = {...original}
// copyOriginal.name = "Artem";
// console.log(original.name)
// console.log(copyOriginal.name)

// copyOriginal.adress.city = "Vitebsk"
// console.log(original.adress.city)
// console.log(copyOriginal.adress.city)



// const person ={
//     age : 19,
    
// }

// Object.defineProperty(person, "name", {
//     value: "A" , writable : false,
// });
 
// console.log(Object.getOwnPropertyDescriptor(person,"name"))

// person.name = "B";
// console.log(person.name);
// function findmax() {
//     let values = Array.from(arguments);
//     if (arguments.length === 0) return undefined;
//     return  console.log( Math.max(...values))
// }
// findmax(1,5,10);
// findmax(-5,-10,-1);
// findmax();

// const user = {
//     name : "alice",
//     sayHi() {
//         console.log(`hi ${this.name}`)
//     }
// }
// const bos = {
//     name :  "bos"
// };
// user.sayHi.call(bos);

// стрелочная проверка полиндрома
// const polindrom = (string) => string === string.split("").reverse().join("");
// console.log(polindrom("123321"));


// function makeCounter() {
//     let count = 0;
//     return {
//         addCount() {
//             count++;
//         },
//         cons() {
//             console.log(count);  
//         },
//         minus() {
//             count--;
//         }
        
//         }
//     }
// let counter = makeCounter();
// counter.addCount();
// counter.addCount();
// counter.cons();
// counter.minus();
// counter.cons();

// function createMultiplae (factor) {
//     return function (x) {
//         return x * factor;
//     }

// }

// console.log(createMultiplae(2)(3))

// let first = createMultiplae(2);
// console.log(first(3))
// 1 1 2 3 5 8 

// const users = [​
//       { name: "Alice", age: 25 },​
//       { name: "Bob", age: 20 },​
//       { name: "Charlie", age: 30 },​
//       { name: "David", age: 22 }​
//     ];

//  const  filterByAge =  (userList,ageLimit) => 
//     userList

//     // let array =Object.keys(users)
//     // Object.age() > ageLimit
//     return 

//  }




// (function(a,b){
// return console.log(a*b);
// })(10,5);

// function  Car (model,speed = 60) {
//     this.model = model;
//     this.speed = speed;

//     this.addSpeed = function (value) {
//         this.speed += value;
//     }
// }

// Car.prototype.getSpeed = function () {
//     return this.speed;
// }

// let ncar = new Car ("bmw");
// console.log(ncar.getSpeed());
// ncar.addSpeed(10);
// console.log(ncar.getSpeed());

class Person {
    #age;
    constructor (age) {
        this.#age = age;
    }
    get age () {
        return this.#age;
    }
    set age (value) {
        if (value > 0 || value <100 ) {
            this.#age = value;
        } else {
            console.log ("no");
        }
    }

}
const person1 =  new Person(1);
console.log(person1.age)
person1.age = 10;
console.log(person1.age)
person1.age = -10;
console.log(person1.age)