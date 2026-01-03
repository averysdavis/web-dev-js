# Keyboard Events
keyboard events:

keydown - press

keyup - release



function getElem(event)
{
console.log(event.target);
}

function getXY(event)
{
console.log(event.x);
console.log(event.y);
}

function getTime(event)
{
console.log(event.timeStamp);
}
event.key - returns the character of pressed key

event.code - returns which key is physically pressed

KeyboardEvent: key='a' | code='KeyA'

KeyboardEvent: key='Shift' | code='ShiftRight'

KeyboardEvent: key='Q' | code='KeyQ'
event.code is not case sensitive