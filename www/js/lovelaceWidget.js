//Loading Animation
$(window).on('load', () => {
    $('.loaderContainer').fadeOut(1500);
});
//Drawer Function
function showDrawer() {
    document.getElementById('drawerSideBar').classList.toggle('active');
}
function hideDrawer() {
    document.getElementById('drawerSideBar').classList.toggle('active');
}
//Click Counter Function
let click = 0;
function clickCounter() {
    document.getElementById('clickValue').innerText = ++click;
    click = click;
}
//Drawer Transparent Background Function
const showTransparentEffect = document.getElementById('bar');
showTransparentEffect.addEventListener('click', () => {
    document.getElementById('drawerTransparentBackground').style.display = 'block';
});
const hideTransparentEffect = document.getElementById('backArrow');
hideTransparentEffect.addEventListener('click', () => {
    document.getElementById('drawerTransparentBackground').style.display = 'none';
});
const hideTransparentEffectWhenTapped = document.getElementById('drawerTransparentBackground');
hideTransparentEffectWhenTapped.addEventListener('click', () => {
    document.getElementById('drawerSideBar').style.display = 'none';
    document.getElementById('drawerTransparentBackground').style.display = 'none';
    window.location = "./";
});
//Search Transparent Background Function
const showSearchTransparentEffect = document.getElementById('searchIcon');
showSearchTransparentEffect.addEventListener('click', () => {
    document.getElementById('searchTransparentBackground').style.display = 'block';
    document.getElementById('searchBarContainer').style.display = 'block';
});
const hideSearchTransparentEffect = document.getElementById('searchBackArrow');
hideSearchTransparentEffect.addEventListener('click', () => {
    document.getElementById('searchBarContainer').style.display = 'none';
    document.getElementById('searchTransparentBackground').style.display = 'none';
});
const hideSearchTransparentEffectWhenTapped = document.getElementById('searchTransparentBackground');
hideSearchTransparentEffectWhenTapped.addEventListener('click', () => {
    document.getElementById('searchBarContainer').style.display = 'none';
    document.getElementById('searchTransparentBackground').style.display = 'none';
});
$(document).ready(() => {
    $('#searchIcon').click(() =>  {
        $('#searchTransparentBackground');
    });
});
//Redirect Function
let homeRedirect = document.getElementById('homeIcon');
homeRedirect.addEventListener('click', () =>  {
    window.location.href = './';
});
//Dark Theme Function
const bodyTheme = document.getElementById('theme');
bodyTheme.addEventListener('change', () => {
    document.body.classList.toggle('dark');
});