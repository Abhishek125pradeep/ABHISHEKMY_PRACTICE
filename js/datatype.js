// JavaScript primitive data types (Single Value Holder)
// There are five types of primitive data types in JavaScript. They are as follows:

// Data Type	Description
// String	represents sequence of characters e.g. "hello"
// Number	represents numeric values e.g. 100
// Boolean	represents boolean value either false or true
// Undefined	represents undefined value
// Null	represents null i.e. no value at all

// JavaScript non-primitive data types (Multy value Holder)
// The non-primitive data types are as follows:

// Data Type	Description
// Object	represents instance through which we can access members
// Array	represents group of similar values
// RegExp	represents regular expression

let xyz = 789;
var no = 87.35;
console.log(typeof(no));
console.log(typeof(xyz + 5))
console.log(typeof(xyz + 5,"abhishek"))
console.log(typeof(xyz + 5,"hfukrhgkrh"+6548))
console.log(typeof(xyz + 5,"hfukrhgkrh"+6548))
let str = "Nagrale"
console.log(typeof(str))
//boolen data type
//give a output in true or false
let indiaisfathercountry= true;
var pakisthanischildchildcountry = false;
console.log(typeof(indiaisfathercountry));
console.log(typeof(pakisthanischildcountry));
let letter ;//undefine dt
console.log(typeof(letter));

// null data type
var mycode = null;
console.log(typeof(mycode));
//biginit data type
let biginit = 444566666664444123;
console.log(biginit);
var bigno = BigInt(4445666666444474555);
console.log(bigno);
let test = Symbol("Abhishektask");
console.log(typeof(test));
//length property to know about length of array and string;
let car = ["name","string","54487","monicup","area"];//homogenius itom in array
 //lenghth always count 1
 //and indexing always count 0
console.log(car.length);
console.log(car[3]);
console.log(car[4]);
console.log(car[car.length-1]);
console.log(car[car.length-3]);
//var range = ["abh",46444,True,False,45.545]//hetrogenius itoms in array
// empty object
var obj = {}
var list = {
    Name: "abhishek",
    jobrole: "pe",
    locatiom:"nagpur",
    age:25,



}
console.log(list.Name)

//multipledata =[{},{},{}]//array of object

let empmultipledata = [
     {
        Name: "abhishek",
        jobrole: "pe",
        locatiom:"nagpur",
        age:25,},

{
    Name: "ruturaj",
    jobrole: "pe",
    locatiom:"nagpur",
    age:25,},
    {
        Name: "kurnal",
        jobrole: "pe",
        locatiom:"nagpur",
        age:25,}
]

console.log(list);
console.log(empmultipledata[1].Name);







