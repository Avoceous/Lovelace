var options = {
    message: 'A supple and stylish hybrid mobile app User Interface.', // not supported on some apps (Facebook, Instagram)
    subject: 'Lovelace', // fi. for email
    files: ['', ''], // an array of filenames either locally or remotely
    url: 'https://github.com/softDev28/Lovelace',
    chooserTitle: 'Share this app', // Android only, you can override the default share sheet title
};

var sideBarShareText = document.getElementById('sideBarShareText');
sideBarShareText.addEventListener('click', () => {
    window.plugins.socialsharing.shareWithOptions(options);
});

var sideBarShareIcon = document.getElementById('sideBarShareIcon');
sideBarShareIcon.addEventListener('click', () => {
    window.plugins.socialsharing.shareWithOptions(options);
});