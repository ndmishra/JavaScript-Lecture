// Types of Data Types-
//1.Primitive
// 7 types: string ,number, Boolean,Bigint,symbol, null,undefined

const score =100
const scorevalue =100.3

const IsLoggedIn =true
const outsideTemp =null
let  UserEmail;


const id = Symbol("123")
const AnotherId =("123")

console.log(id==AnotherId)



// 2. Reference Type(Non Primitive)
//Types : Array, Objects and Functions

const Heros =["Akshay","Amitabh","Rajeev"]   //Array

console.log(Heros)

let myObj ={
     Name:"Narayan",
     Age:25

}  // Object

const  myFunction = function(){

    console.log("Hello Narayan")
} // Function

console.log(typeof myFunction)