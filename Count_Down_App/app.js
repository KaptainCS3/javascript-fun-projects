let counter = 30;
setInterval(function(){
    counter --;
    if(counter >= 0){
        id = document.getElementById('count');
        id.innerHTML = counter;
    }
    if(counter == 0){
        id.innerHTML = "COUNT COMPLETE";
    }
}, 1000)