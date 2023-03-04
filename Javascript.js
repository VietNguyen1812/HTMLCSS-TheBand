// // ES 6
// // Method property

// // function person(name, age) {
// //     const salary = "Salary"
// //     return {
// //         name,
// //         age, 
// //         getName() {
// //             return this.name + " " + this.age;
// //         },
// //         [`${salary}ofViet`] : 20000,
// //     }
// // }

// // console.log(person("Viet" , 22));
// // ----------------------------------------------------
// // Default Parameter 
// const getNameES6 = (name = "Sam", age = 30, ...rest) => {
//     console.log(name + " " + age);
//     console.log("rest", rest);
// }

// getNameES6("David", 23, "IT", 220000)
// //---------------------------------------------------------
// //Spread Operators

// const todoList = ["Di hoc", "Da Bong"];
// const todoListMore = ["Di choi", "Tap the duc", ...todoList];
// console.log(todoListMore);

// const person = {
//     name: "David", age: 30,
// }

// const worker = {
//     job: "Work",
//     ...person,
// };

// console.log("worker", worker);

// // Arrow Functions
// const persons = {
//     name: "David",
//     age: 23,
//     getDescription: function () {
//         console.log(
//             "Toi ten la " + this.name + ". Nam nay toi " + this.age + " tuoi"
//             );

//         const getAge = (name) => {
//             console.log(
//                 `ES 6 - Nam nay toi ${this.age} tuoi . Toi ten la ${name}`
//             );
//         }
//         getAge("Sam");
//     }
// }
// persons.getDescription();

// // Destructuring Assignment
// const todoLists = ['di hoc' , "di ngu", "di ve sinh"]
// const [first, ,third] = todoLists
// console.log({first ,third});

// const personal = {
//     name : "david", 
//     job : "it", 
//     salary : 20000,
// }

// const {name , salary} = personal;
// console.log({name , salary});


const connections = ["fred : joe", "joe : mary ", "mary:fred" , "mary:bill"]
const connectfr = connections.map(e => e.split(":"));

console.log(connectfr);

// for(let i = 0 ; i < connectfr.length ; i++)
// {
//     const [name1 , name2] = arr[i];
//     const currentNode = "";
//     const count = 0 ;
//     if()

// }

const ar  = [1 , 2 , 3];

// const total = ar.map((element) => {
//     let sum = 0 ;
//     sum += element;
//     return sum ;
// })

let n ; 
const array = [];
n = array.length;

const Total = (ar) => {
    let sum  = 0 ;
    ar.map(element => {
        sum += element;
    })

    return sum ;
}
    


console.log(Total(ar));

