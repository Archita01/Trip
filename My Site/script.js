const btns = document.querySelectorAll("buttons");
const icon = document.querySelector("i");

btns.forEach( btn => {
    btn.addEventListener('click',Oncheck(ev));
})

function Oncheck(ev){
    let id = ev.currentTarget.id;
    let btn = document.getElementById(id);
    if(icon.classList.contains('fa-plus'))
    {
        icon.classList.remove('fa-plus');
        icon.classList.add('fa-check');
    }
    btn.style.backgroundColor = 'green';
    btn.style.color='white';
}