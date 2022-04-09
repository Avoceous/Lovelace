//Quit App Function
function onDeviceReady(){
    document.addEventListener('backbutton', onBackButton, false);
}
function onBackButton(){
    darkTransparentContainer = document.getElementById('darkTransparentContainer');
    closePopup = document.getElementById('closePopup');
    exitApp = document.getElementById('exitApp');
    darkTransparentContainer.classList.add('show');
    closePopup.addEventListener('click', function(){
        darkTransparentContainer.classList.remove('show');
    });
    exitApp.addEventListener('click', function(){
        darkTransparentContainer.classList.remove('show');
        setTimeout(function(){
            navigator.app.exitApp();
        },500);
    });
}
document.addEventListener('deviceready', function(){
    onDeviceReady();
});
//Drawer Function
function showDrawer(){
    document.getElementById('drawerSideBar').classList.toggle('active');
}
function hideDrawer(){
    document.getElementById('drawerSideBar').classList.toggle('active');
}
//Click Counter Function
let click = 0;
function clickCounter(){
    document.getElementById('clickValue').innerText = ++click;
    click = click;
}
