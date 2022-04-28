//Loading Animation
$(window).on('load', () => {
    $('#loaderContainer').fadeOut(400);
    $('.mainBody').fadeIn(400);
});

//Click Counter Function
let click = 0;
function clickCounter() {
    document.getElementById('clickValue').innerText = ++click;
    click = click;
}

//Toggle Function
function showDrawer() {
    document.getElementById('drawerSideBar').classList.toggle('active');
}

function hideDrawer() {
    document.getElementById('drawerSideBar').classList.toggle('active');
}

//Side Bar Function
const showTransparentEffectWhenBarIconClicked = document.getElementById('bar');
showTransparentEffectWhenBarIconClicked.addEventListener('click', () => {
    document.getElementById('drawerTransparentBackground').style.display = 'block';
});

const hideTransparentEffectWhenBackArrowCliked = document.getElementById('backArrow');
hideTransparentEffectWhenBackArrowCliked.addEventListener('click', () => {
    document.getElementById('drawerTransparentBackground').style.display = 'none';
});

const hideTransparentEffectWhenTapped = document.getElementById('drawerTransparentBackground');
hideTransparentEffectWhenTapped.addEventListener('click', () => {
    $(document).ready(() => {
        window.location = "./";
    });
});

//Redirect Function
const info = document.getElementById('info');
info.addEventListener('click', () => {
    window.location.href = 'https://www.facebook.com/allencasul';
});

//Night Theme Function
const showNightThemeTransparentEffect = document.getElementById('theme');
showNightThemeTransparentEffect.addEventListener('click', () => {
    document.getElementById('nightThemeContainer').style.display = 'block';
    $(document).ready(() => {
        $('#nightThemeTransparentBackground').fadeIn('fast');
    });
});

const hideNightThemeModalWhenTapped = document.getElementById('nightThemeTransparentBackground');
hideNightThemeModalWhenTapped.addEventListener('click', () => {
    $(document).ready(() => {
        $('#nightThemeTransparentBackground').fadeOut(100);
        $('#nightThemeContainer').fadeOut(100);
    });
});

//Night Theme w/ Local Storage
const check = document.getElementById("nightTheme")
if (localStorage.getItem('darkMode') === null) {
    localStorage.setItem('darkMode', "false");
}
const link = document.createElement('link');
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
}checkStatus();