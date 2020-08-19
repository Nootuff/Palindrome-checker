var response = document.querySelectorAll(".response");
  
var inputHolder = document.getElementById("inputHolder");

inputHolder.addEventListener("mousedown", function (){
  for (var i=0; i < response.length; i++) {
  response[i].style.opacity = "0";
}}); //hides answers again when input box is clicked.

function palindrome() {
let value = document.getElementById("input").value; //This acts as the parameter, taking the value of the input text box.
let holder = value.toLowerCase().replace(/[^a-z0-9]+/g, "").split(""); //This uses 3 methods and regex to eliminate any spaces between letters make everything lowercase and remove any non alphanumeric symbols.
let count = (holder.length %2 == 0) ?  holder.length / 2: (holder.length-1) / 2 ; //Using a ternary operator this assigns a number to this let so that it is always half of the total length of the input string.
let first = holder.slice(0, count).join("");
let second = holder.slice(holder.length - count, holder.length).reverse().join(""); //Using count as a numerical value these 2 lines cut the string in half, ignoring the central character if it is an odd numbered length as that doesn't matter. THey are then turned back into strings and second is reversed so both can be accurately compared
let result = (first == second) ? true : false; //Final ternary, if the 2 modified strings of characters are the same then result = true.
  if(value.length <= 1){
    nothing.style.opacity = "1";
  } else if(result == true){
correct.style.opacity = "1";
} else {
wrong.style.opacity = "1";
}  //This decides which message is displayed. 
}


