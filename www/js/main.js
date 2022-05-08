//Loading Animation
$(window).on('load', () => {
    $('#loaderContainer').fadeOut('fast');
    $('#mainBody').fadeIn('fast');
});

const floatingBtn = document.getElementById('floatingActionButton');
floatingBtn.addEventListener('click', () =>{
    window.location = './';
});

//Drawer Function
const showDrawer = document.getElementById('bar');
const hideDrawer = document.getElementById('drawerOverlay');

showDrawer.addEventListener('click', () => {
    document.getElementById('drawerSideBar').classList.toggle('active');
    $('#drawerOverlay').fadeIn('fast');
});

hideDrawer.addEventListener('click', () => {
    document.getElementById('drawerSideBar').classList.toggle('active');
    $('#drawerOverlay').fadeOut('fast');
});
    
//Night Theme Function
const showTheme = document.getElementById('theme');
const hideTheme = document.getElementById('nightThemeOverlay');

showTheme.addEventListener('click', () => {
    $('#nightThemeOverlay').fadeIn('fast');
    $('#nightThemeContainer').fadeIn('fast');
});

hideTheme.addEventListener('click', () => {
    $('#nightThemeOverlay').fadeOut('fast');
    $('#nightThemeContainer').fadeOut('fast');
});

//Night Theme Local Storage
const check = document.getElementById("nightTheme");
const link = document.createElement('link');

if (localStorage.getItem('darkMode') === null) {
    localStorage.setItem('darkMode', "false");
}

link.rel = 'stylesheet';
document.getElementsByTagName('HEAD')[0].appendChild(link);

//This function gets called every time the checkbox is clicked
function changeStatus() {
    if (localStorage.getItem('darkMode') === "true") {
        localStorage.setItem('darkMode', "false");
        link.href = '';
    } else {
        localStorage.setItem('darkMode', "true");
        link.href = './css/night.css';
    }
}

//This function will save night theme in local storage
function checkStatus() {
    if (localStorage.getItem('darkMode') === "true") {
        check.checked = true;
        link.href = './css/night.css';
    } else {
        check.checked = false;
        link.href = '';
    }
} checkStatus();