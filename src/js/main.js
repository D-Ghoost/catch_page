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
    // position -> se esconde el navbar
    if(window.scrollY >= 2017 ){
        console.warn('Se debe esconder');
        navDesk.classList.add('navdesk-off');
        navMobil.classList.add('navmobil-off');
    }else{
        console.warn('Se debe mostrar');
        navDesk.classList.remove('navdesk-off');
        navMobil.classList.remove('navmobil-off');  
    }
}