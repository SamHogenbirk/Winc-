const btn = document.querySelector('#mybutton');
const btn2 = document.querySelector('#mybutton-2');
const body = document.querySelector('body');

btn.addEventListener("click", function () { alert("button clicked!") });

const toggleBackground = () => {

    body.classList.toggle('red-background');
};

btn2.addEventListener('click', toggleBackground);


