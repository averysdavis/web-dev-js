# Animations in JavaScript
setInterval(myFunction, interval);
interval is in milliseconds



clearInterval(setIntervalId);
the id is the variable you set the interval to

var timer = setInterval(grow, 500);


don't call clearInterval immediately after

if(size == desiredSize)
{
clearInterval(timer);
}