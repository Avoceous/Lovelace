//Loading Animation
$(window).on('load', () => {
    $('#overlayWrapper').fadeOut(300);
    $('#mainBody').fadeIn(300);
});

//Sidebar Drawer Animation
const showDrawerContainer = document.getElementById('bars');
showDrawerContainer.addEventListener('click', () => {
    document.getElementById('drawerSideBar').classList.toggle('active');
    $('#drawerOverlay').fadeIn('fast');
});

const hideDrawerContainer = document.getElementById('drawerOverlay');
hideDrawerContainer.addEventListener('click', () => {
    document.getElementById('drawerSideBar').classList.toggle('active');
    $('#drawerOverlay').fadeOut('fast');
});

//Search Animation
const showSearchContainer = document.getElementById('search');
showSearchContainer.addEventListener('click', () => {
    $('#searchOverlayContainer').fadeIn(80);
});

const hideSearchContainer= document.getElementById('back');
hideSearchContainer.addEventListener('click', () => {
    $('#searchOverlayContainer').fadeOut(80);
});

//Floating Action Button Drawer Animation
const showFloatingActionButtonDrawerContainer = document.getElementById('floatingActionButton');
showFloatingActionButtonDrawerContainer.addEventListener('click', () => {
    document.getElementById('floatingActionButtonDrawer').classList.toggle('active');
    $('#floatingActionButtonDrawerOverlay').fadeIn('fast');
});

const hideFloatingActionButtonDrawerContainer = document.getElementById('closeFloatingActionButtonDrawer');
hideFloatingActionButtonDrawerContainer.addEventListener('click', () => {
    document.getElementById('floatingActionButtonDrawer').classList.toggle('active');
    $('#floatingActionButtonDrawerOverlay').fadeOut('fast');
});