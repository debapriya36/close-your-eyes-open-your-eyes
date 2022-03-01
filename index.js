
const closedEyes=document.querySelector('.close');

const openEyes=document.querySelector('.open');

closedEyes.addEventListener('click',f);

openEyes.addEventListener('click',g);

function f()
{
    openEyes.classList.add('active');
    closedEyes.classList.remove('active');
}

function g()
{
    closedEyes.classList.add('active');
    openEyes.classList.remove('active');
}

