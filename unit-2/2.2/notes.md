# Iterating with jQuery
.each iterates through list of selected elements

use when you want to get info from a group of elements

$(selector).each(function(){
//function code
});
like a loop



$("li").each(function(){
var text = $(this).text();
console.log(text);
});


two parameters



$("selector").each(function(index,element){});
index represents the count during iteration

element represents the current element

index is required if you want to use element



$("li").each(function(){
var text = $(this).text();
console.log(index + " . " + text);
});
console:

0 . Do Homework