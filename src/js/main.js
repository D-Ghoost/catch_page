const navDesk = document.querySelector('.navdesk');
const navMobil = document.querySelector('.navmobil');
const navMobil_list = document.querySelector('.navmobil__list-menu');
const iconMenuMobil = document.querySelector('.navmobil__menu');


iconMenuMobil.addEventListener('click', toggleMenu);



function toggleMenu(){
    let isOpenMenu = navMobil_list.classList.contains('hiden-menu');
    if(!isOpenMenu){
        navMobil_list.classList.add('hiden-menu');
    }else{
        navMobil_list.classList.toggle('hiden-menu');
    }
}


window.onscroll = function () {
    let isOpenMenu = navMobil_list.classList.contains('hiden-menu');
    if(window.scrollY !== 0){
        navDesk.classList.add('add-color');
        navMobil.classList.add('add-color');
        navMobil_list.classList.add('add-color');
    }else{
        navDesk.classList.remove('add-color');
        navMobil.classList.remove('add-color');
        
    }
}