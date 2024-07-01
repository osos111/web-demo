let menu = document.querySelector('#menu-icon');
let navBara = document.querySelector('.navbar');


let sections = document.querySelector('#menu-icon');
let navs = document.querySelector('header nav a');
window.onscroll=()=>{
    sections.forEach(sectionaya => {
        let top =window.scrollY;
        let offset =sectionaya.offsetTop-150;
        let height = sectionaya.offsetHeight;
        let id = sectionaya.getAttribute('id');
        if(top >=offset&&top<offset+height){
            navs.forEach(links =>{
              links.classList.remove('active');
              document.querySelectorAll('header nav a [href*=' +id+']').classList.add('active')
            })
            // rolls through each section in navbara when added to the menu icon 
        }
    });
}
menu.onclick=()=>{
    menu.classList.toggle('bx-x');
    navBara.classList.toggle('active');

}
// adjustments on display to be added to css .. 
// so it becomes compitable on every device..