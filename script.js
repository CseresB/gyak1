function myFunction(){
let x = document.getElementById("p1");
  x.style.color="green";
  x.style.border="dashed";
}

function myMsg(){
let y = "Message in the console";
console.log(y);
}

function changeContent(){
let p2 = document.getElementById("p2");
p2.textContent="Changed content";
}

function processFormData(){
  //Access the form
  let form = document.getElementById("myForm");
  //Access the elements by name and get values
  let city = form.elements.city;
  let country = form.elements.country;


  console.log(city,country);
  

  //clear the input fields
  document.getElementById("city").values = '';
  document.getElementById("country").values='';
}


function greet(){
  let name = prompt();
  alert("Welcome "+name+"!");
}

function checkTicked(){
  let box = document.getElementById("c1");
  console.log(box.checked);
}

//greet();

//payment form
function processFormData(){
  let cardNumber = form.elements.number.value;
  let holder = form.elements.holder.value;
  let method = form.elements.pay.value;

  console.log(cardNumber + " " + holder+ " " + method);
}


/*
let x = confirm("Proceed payment?");
console.log(x)
*/


/*
let userName = prompt("Please enter your username");
document.getElementById('userName').textContent = userName;
*/