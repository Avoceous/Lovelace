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
        link.href = './src/css/night.css';
    }
}

//This function will save night theme in local storage
function checkStatus() {
    if (localStorage.getItem('darkMode') === "true") {
        check.checked = true;
        link.href = './src/css/night.css';
    } else {
        check.checked = false;
        link.href = '';
    }
} checkStatus();