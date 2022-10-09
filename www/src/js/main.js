//Loading Animation
$(window).on('load', () => {
    $('#overlayWrapper').fadeOut(300);
    $('#mainBody').fadeIn(300);
});

//Drawer Function
const showDrawer = document.getElementById('bars');
const hideDrawer = document.getElementById('drawerOverlay');
const hideSearchContainer= document.getElementById('back');

showDrawer.addEventListener('click', () => {
    document.getElementById('drawerSideBar').classList.toggle('active');
    $('#drawerOverlay').fadeIn('fast');
});

hideDrawer.addEventListener('click', () => {
    document.getElementById('drawerSideBar').classList.toggle('active');
    $('#drawerOverlay').fadeOut('fast');
});

hideSearchContainer.addEventListener('click', () => {
    $('#searchOverlayContainer').fadeOut('fast');
});