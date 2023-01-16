console.log('javascript is running!');

// this is js block comment   the let statement creates a variable-a chunk of computer memory that can hold refrences to data that you want to save. we're storing a refrence to an element on the page with this line- we're telling javascript to look fr the element with the id we specify iside of round brackets.//
// document refers to index. html page; queryselector is how js use css tp select elements on the page//

//step1 - select the elements you want the user to intract with//

let bitmapgraphic = document.querySelector("#bitmapgraphic");

// what happens when the  events are triggred//
function logid(){
    console.log(this.id);
}

// step 2- how do you want the user to intract with the element?

bitmapgraphic.addEventListener('click',logid);
// what happens when the  events are triggred//