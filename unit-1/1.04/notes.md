# Creating Elements Using the DOM

`var footNote = document.createElement("p");`
`footNote.innerHTML = "1. From page 5 of <i>Frankenstein</i>";`
can use html tags in innerHTML


`
document.body.appendChild(footNote);`
footnote will appear at the end of the body



`document.body.insertBefore(newElement, existingElement)`


helpers:

.firstElementChild  
.lastElementChild  
.children  
.parentElement  

`console.log(document.body.children);`