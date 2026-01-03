# Callback Functions and Synchronization
.animate executes async (non-linear)

means that lines execute simultaneously



callback function: passed as a parameter in another function (like .each and .click)

$(selector).animate({params},speed,callbackFunction);
callbackFunction will run after animation is terminated

executes per element



$("div).animate({height:"300px"},"slow", function(){
$(this).text("This element has been animated");}
);