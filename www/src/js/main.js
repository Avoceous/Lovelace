//Loading Animation
$(window).on('load', () => {
    $('#overlayWrapper').fadeOut(300);
    $('#mainBody').fadeIn(300);
});

//Drawer Animation
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

