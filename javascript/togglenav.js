function showSidebar(){
    const sidebar = document.querySelector('.togglemenu');
    sidebar.style.display = 'flex';
}
const hideSidebar  = () =>{
    const sidebar = document.querySelector('.togglemenu');
    sidebar.style.display = 'none';
}
const closeMenu = () =>{
    const menu = document.querySelector('.togglemenu');
    menu.style.display = 'none';

}