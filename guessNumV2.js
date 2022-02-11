setInterval(() =>{
    let num = parseInt(prompt("Guess a the number from 1 to 10: "));
    const mistryNum = Math.floor(Math.random() * 10) + 1;
    let i = 0;
    while( num !== mistryNum){
        console.log(`wrong guesses where: ${num}`);
        i++;
        num = parseInt(prompt("Guess the again!! from 1 to 10: "));
    }
    if(num == mistryNum){
        alert(`Congrats You Guess Correctly`);
        confirm(`You guessed wrongly${0x1f354} ${i} times`);
    }
},)