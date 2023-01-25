console.log('javascript is running!');

// this is js block comment   the let statement creates a variable-a chunk of computer memory that can hold refrences to data that you want to save. we're storing a refrence to an element on the page with this line- we're telling javascript to look fr the element with the id we specify iside of round brackets.//
// document refers to index. html page; queryselector is how js use css tp select elements on the page//

//step1 - select the elements you want the user to intract with//

let choclate_cone = document.querySelector("#choclate_cone");

// what happens when the  events are triggred//
function logid(){
    console.log(this.id);
}

// step 2- how do you want the user to intract with the element?

choclate_cone.addEventListener('click',logid);
// what happens when the  events are triggred//

let square_icecream = document.querySelector("#square_icecream");

function logid(){
    console.log(this.id);
}
square_icecream.addEventListener('click',logid);


let teddy_icecream = document.querySelector("#teddy_icecream");

function logid(){
    console.log(this.id);
}
teddy_icecream.addEventListener('click',logid);


let ranbow_icecream = document.querySelector("#ranbow_icecream");

function logid(){
    console.log(this.id);
}
ranbow_icecream.addEventListener('click',logid);



let blue_icecream = document.querySelector("#blue_icecream");

function logid(){
    console.log(this.id);
}
blue_icecream.addEventListener('click',logid);



let cloud_icecream = document.querySelector("#cloud_icecream");

function logid(){
    console.log(this.id);
}
cloud_icecream.addEventListener('click',logid);



let heart_icecream = document.querySelector("#heart_icecream");

function logid(){
    console.log(this.id);
}
heart_icecream.addEventListener('click',logid);


let emogi_icecream = document.querySelector("#emogi_icecream");

function logid(){
    console.log(this.id);
}
emogi_icecream.addEventListener('click',logid);


let ranbow2_icecream = document.querySelector("#ranbow2_icecream");

function logid(){
    console.log(this.id);
}
ranbow2_icecream.addEventListener('click',logid);



let triangle_icecream = document.querySelector("#triangle_icecream");

function logid(){
    console.log(this.id);
}
triangle_icecream.addEventListener('click',logid);
