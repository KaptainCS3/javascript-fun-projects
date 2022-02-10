let counter = 30;
setInterval(function(){
    counter --;
    if(counter >= 0){
        id = document.getElementById('count');
        id.innerHTML = counter;
    }
    if(counter == 0){
        id.innerHTML = "COUNT COMPLETE";
        document.getElementById('count').style.fontSize = "2em";
    }
}, 1000)