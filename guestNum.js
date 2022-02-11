let guestNum = prompt("Guest the number");
let mistryNum = Math.floor(Math.random () * 10) + 1;
if( guestNum == mistryNum)
alert("You guest correctly!!");
else if(guestNum > 10)
alert("You are out of range");
else if(guestNum > mistryNum - 1)
alert("You Miss by a value of 1");
else if(mistryNum > guestNum - 1)
alert("You Miss by a value of -1");
else
alert("Try Again!!");