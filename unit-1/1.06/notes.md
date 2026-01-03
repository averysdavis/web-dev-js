# Functions in HTML
no javascript: static  



javascript: dynamic, change on user interaction  



`function functionName(parameter)
{
//code
console.log(parameter)
var p = document.getElementById("p");
p.style.color = "red";
}`


events trigger actions  

`<p id="p">change me</p>
<button onclick = "myFunction()">click me</button>`
event listener 

`document.getElementById("rand").addEventListener("click", randomNum);`