let guestNum = prompt("Guest the number");
let mistryNum = Math.floor(Math.random () * 10) + 1;
    if(guestNum == mistryNum)
alert(`You guest correctly!! mistryNum is ${mistryNum}`);
    else if(guestNum > 10)
    alert("Out of range refresh and guest again!!");
else
alert(`Try Again!! mistryNum is ${mistryNum}`);
