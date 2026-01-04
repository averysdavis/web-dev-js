# Storing Data with Local Storage
`localStorage.setItem("key",value");`
key and value must be strings (can be converted)  
`var retrieveValue = localStorage.getItem("key");`
DNE: returns null  
or  
`var retreiveValue = localStorage.user;`
DNE: returns undefined  

null and undefined are both false (boolean)  

`if(localStorage.getItem("key"))`

`if(localStorage.key)`
returns false or true depending on existence