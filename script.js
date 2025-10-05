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

  insertData(city,country);

  //clear the input fields
  document.getElementById("city").values = '';
  document.getElementById("country").values='';
}
/*
let userName = prompt("Please enter your username");
document.getElementById('userName').textContent = userName;
*/