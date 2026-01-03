# This Keyword
`function turnRed(element)
{
element.style.color = "red";
}`
element --> parameter  



`<p onclick="turnRed(this)">click me</p>`
this  



`p.addEventListener("click", turnRed);`

`function turnRed()
{
this.style.color = "red";
}`