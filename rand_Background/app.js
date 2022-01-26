//udemdy project exercise
const button = document.querySelector('button');
const header = document.querySelector('h1');
button.addEventListener('click',function(){
    const r = Math.floor(Math.random()* 255);
    const g = Math.floor(Math.random()* 255);
    const b = Math.floor(Math.random()* 255);
    const ranBgColor = (`rgb(${r},${g},${b})`);
    document.body.style.backgroundColor = ranBgColor;
    header.innerText = ranBgColor;
    header.style.color = '#000';
});
