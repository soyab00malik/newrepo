//alearts in js 
// alert("apna school");

// console.log is used to log (print) a message to the console.
// console.log("sapna collage");
 
// variable declaration
// let name="soyab malik";
// console.log(name);
// const x = null;
// let y = undefined;

// console.log(y);
//boolean data types
// isfollow = false;
//keywords for variable declaration
// let (vaiable cannot be re-declare; block keyword)

// const don't let any variable to be update
// const age = 55;

// typeof(age)-- (to check variable type)

// Objects in js is array or collection elements
// is A kind of structure in Js
// const student = {
//     fullName : "Soyab name",
//     age : 20,
//     cgpa : 8.2,
//     isPass :true,
// };

// keys are the variable in object.
// console.log(student.fullName);
// console.log(student.cgpa);

// String can add number but in this way "123"+123=123123;

// Operator and conditin statement in Js
// for power  ("a**b ="a **b);
// === for strict to compare according to data type
// console.log("A =",1);

// prompt is pop message but it can take input return string value only
// let name1 = prompt("hello");

// for-of loop int string
// let str = "ApnaCollege";

// for (let i of str){
//     console.log(i);
// }
 
// for-in loop
// for (let key in student){
//     console.log("key",key, "value =", student[key]);
// }

// Template litrals is to include variables is single line easy output
// example
//  string interpolation

//  let output = `the name of person ${str}  `;
//  console.log(output);
//  string methods in Js 
// these are similar like c-Language

// Function
// str.toUpperCase();
// str.toLowerCAse();
// str.trim(); (removes whitespaces)
// Metods always make new string or copy of original string
// str.slice(1,3(not include in part of str));
// Merge function  str1.concat(str2); or str1 +str2;

// str.replaceAll("apna","sapna"); (selp explanery its to replace the character)
// String are immutable in js 
// characters cannot be change in string 


// Array in Js 
// let marks = [97,98,988]

// splice method in js arrey.splic(add,remove,replace)
// puch() start from end or unshit start adding for stating position
/*
FUNCTION IN JS

function myFunction(){
console.log("hello world ");

}

// function call
myfunction();

Arrow function 
const arrowSum = (a,b) =>{
    console.log(a+b);
    };

    forEach Loop mathod is only for Arrays Not for strings.
    
    arr.forEach((val, idx, arr) =>{
        work that to
        });

    arr.forEach((val) =>{
        console.log(val);
        }) ;
**Functions can be pass as perimeter in  other function
** Higher order function are which takes or return funtion as parameter.

some more Methods
Map is to create new array or a copy
arr.map(callbackFnx(value,index,array))

let newArr = arr.map((val) =>{
    return val*2;
});



Filter methods(to choose or select only give )

let newArr = oldArr.filter((val) =>{
    return val%2 !==0;
});

Reduce methods(to multiple intput to simple one output)

let output =arr.reduce((result,current) =>{
     return result + current;
    })


***DOM WHEN A WEB PAGE IS LOADED TH BROWSER CREATES A DOCUMENT OBJECT MODEL OF THE PAGE
dom is part of windows object
dom-the document we by our self 

cosole.dir(windows.document); (dir shows properties and methods of dom)
                                     Window=
                                       ||
                                       ||
                                  document(DOM)
                                       ||
                                       ||
                                      html
                                       ||
                                       ||
                       +----------------------------------+         
                       ||                                ||
                       ||                                ||
                       head                             body
                                                         ||
                                                         ||
                                                +------------------+
                                               div               script


Dynamic change in code we use java script

Dom manupulatin 
let heading = document.getElementById("heading");
document.getElementByClassName("");
document.getElementByTagName("");
console.log(heading);

Query Selector 
document.querySelector("myId/,myClass,tag");
document.querySelectorAll("myId/,myClass,tag");
give nodelist

properties

tagName : reurns tag for element noded
innerText : returns th text constent of the element and all its children
innerHTML : returns the plain text or HTML content in the  element
tectContent : returns textual content even for hidden elements

console.dir(document.querySelector("div").children);
let heading = document.getElementById("heading");
console.log(heading);


for(div of divs){
  div.innerText = `changes it to 1`;
}


ATTRIBUTES IN JS (get.attribute is to access or change the attribut in js)

attributes are like class or src href 

div.getAttribute("id");  -->(id is the type of attribute you want)
para.setAttribute("p","newpara"); -->(to change attribute value)

toStyle-->(you can change any of css easly)
div.style.backgroundColor="green";


**INSERT ELEMENTS( add new element)

let newBtn = document.createElement("button");

div.append(el) -->adds at the end of node (inside)
div.prepend(el) --> adds at the start of node (inside)
div.before(el) --> adds before the node (outside)
div.after(el) --> adds after the node (outside)

eg-->let newBtn = document.createElement("button");
newBtn.innerText ="click me!";
let div = document.querySelector(".box");

div.append(newBtn);
****SET QUERY SHORT WAy to wirte query***
document.querySelector(".box").append(newBtn);

To REMOVE Elemet of 

newheading.remove();

Class list 
para.classList.add("newClass");
para.classList
para.classs.remove("newClass")


***EVENTS IN JS
the change in the state of and object is known as an Event

.mouse event (click , double click)
.keyboard events(keypress ,keyup , keydown )
/form events *submit etc.)
print event &many more

Event object--> e variable saves all infomation about event


tn.onclick = (e) => {
  
}
node.event 

if we handle event inline vs js 
js have more priroity


Event Listener ---> the call back refernce should be same to remove

node.addEventListener(event,callback)
node.removeEventListener(event, callback)
Example
btn.addEventListener("click",(eve) => {
    cosold.log("button1");
    });

    Remove 

    cost handler3 = () => {
        cosole.log("button1 was clicked ")}

    btn.addEventListener("click",handler3);
    btn.removeEventListener("click",handler3);


    example 
    using event handler
    let body =document.querySelector("body");
let btn = document.querySelector("#btn");

let currentMode= "light";


btn.addEventListener("click", () =>{
    if(currentMode =="light"){
    body.style.backgroundColor="white";
     currentMode = "dark"
    }
    else{
    body.style.backgroundColor="black";currentMode = "light";
    }
});



*/        





// GAME FOR ROCK SCISSORS



// let btn =document.querySelector("#btn");
// let rock = document.querySelector("#rock");
// let paper = document.querySelector("#paper");
// let scissor = document.querySelector("#scissor");

// let you= document.querySelector("#ou");
// let comp= document.querySelector("#comp");
// let men=0;
// let compges=0;

// rock.addEventListener("click", () =>{
//     let n =Math.floor(Math.random() * 3)+1;
//     if(n==3){
//         men++;
//         btn.style.backgroundColor="green";
//         btn.innerText="You Win: Rock beats Scissros";
//       }
//       else if(n==2){compges++;
//         btn.style.backgroundColor="red";
//         btn.innerText="You Lose: Paper beats rock";
//       }
//      else if(n==1){
//         btn.style.backgroundColor=" #080830";
//         btn.innerText="Its a Draw";
//       }
//       you.innerText=`${men}`;
//       comp.innerText=compges;
   
// });

// paper.addEventListener("click", () =>{
//     let n =Math.floor(Math.random() * 3)+1;
//     if(n==1){men++;
//         btn.style.backgroundColor="green";
//         btn.innerText="You Win: Paper beats Rock";
//       }
//       else if(n==3){compges++;
//         btn.style.backgroundColor="red";
//         btn.innerText="You Lose: scissor beats Paper";
//       }
//       else if(n==2){
//         btn.style.backgroundColor=" #080830";
//         btn.innerText="Its a Draw";
//       }
//       you.innerText=men;
//       comp.innerText=compges;
// });

// scissor.addEventListener("click", () =>{
//     let n =Math.floor(Math.random() * 3)+1;
//     if(n==2){men++;
//         btn.style.backgroundColor="green";
//         btn.innerText="You Win: scissors beats Paper";
//       }
//       else if(n==1){compges++;
//         btn.style.backgroundColor="red";
//         btn.innerText="You Lose: Rock beats Scissors";
//       }
//       else if(n==3){
//         btn.style.backgroundColor=" #080830";
//         btn.innerText="Its a Draw";
//       }
//       you.innerText=men;
//       comp.innerText=compges;
// });

// OBJECT IN JS (It is an entity having stte and behavior (properties and method).
// const student ={
//     fullName: "shradha khapra",
//     marks:94.4,
//     printMarks: function() {
//         console.log("marks =",this.marks); //student.marks
//     },
// };

// object have prototype in objects free (prototype contain method and function)

// const employee={
//     calcTax() {
//         console.log("tax rate is 10%")
//     },
// }

// const soyab={             
//     sallry:5000,
// };

// soyab.__proto__ = employee;//prototype is null type object

// **If prototype and object have same name class (it all choose object class)


// CLASSE IN JSON
// class is a program-code template for creating objects

// Those objects will have some state (variables) & some behaviour (function) inside if 

// it work like blue print for object
// class myClass{
//     start(s ) {
//         console.log(`hell ${s}`);
//     }

//     stop() {
//         console.log("non-stop");
//     }
// }
// //Add class with object
// let lthall = new myClass();

// lthall.start(9);


//Constructor() method is:
// -> automatically invoked by new 
// initalizes Object

// class ToyotaCar {
//     constructor() {
//         console.log("creating new object");
//     }
// }
//  Constructor work when we initialize something
// The first call is constructor


// inheritance in JS

// inheritance is passing down properties &methods from parent class to child class.

// class parent {
//      hello() {
//         console.log("hello");
//      }
// }

// class child extends parent {

// }

// let obj = child();



// SUPER KEYWORD

// the super keyword is used to call the construcor of its parent class to access the parent's properties and methods.

// super(args) //calls Parent's constructor

// super.parentMethod(args)


// class parent {
//     constructor(name) {
//         this.species = "hemo sapiens";
//         this.name = name;
//     }
//     eat() {
//         console.log("eat");
//     }
// }

// class Child extends parent {
//     constructor(name) {
//         super(name);
//     }
//     work() {
//         super.eat();
//     }
// }

// let engObj = new Child("hello");

//Error handling 

// try {}
//     normal code 
// } catch (err) {
//     console.log (err);
// }

// asyncronous
// not follow the flow of code 


console.log("one");
setTimeout(() =>{
    console.log("kiyu");
},2000);
console.log("three");