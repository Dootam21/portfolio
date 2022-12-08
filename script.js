const name_introduce = 'Hello World';
const box = document.querySelector('.box');
const btn = document.querySelector('.toggle input');
const form = document.querySelector('body');
const text = document.querySelector('.switch .txt-mode');
console.log(text);

var welcome = name_introduce.split('');

function getWelcome(){
    welcome.forEach((e, index) =>{
        var x = document.createElement('SPAN');
        x.innerText = e;
        x.style = ` animation:textJumping ${(welcome.length-1)/10}s ease infinite alternate;animation-delay:${index/10}s`;
        box.appendChild(x);
    })
}
getWelcome();

btn.addEventListener('click', function(){
    form.classList.toggle('theme');
    if(text.innerText === 'Dark Mode'){
        text.innerText = 'Light Mode';
    } 
    else if(text.innerText === 'Light Mode'){
        text.innerText = 'Dark Mode';
    }
})