//This cordova plugin will allow user to share the app.
var options = {
    message: 'A supple and stylish hybrid mobile app UI.', // not supported on some apps (Facebook, Instagram)
    subject: 'Lovelace', // fi. for email
    files: ['', ''], // an array of filenames either locally or remotely
    url: 'https://github.com/softDev28/Lovelace',
    chooserTitle: 'Let your friends try this app', // Android only, you can override the default share sheet title
};

let shareText = document.getElementById('shareText');
shareText.addEventListener('click', () => {
    window.plugins.socialsharing.shareWithOptions(options, onSuccess);
});

let shareIcon = document.getElementById('shareIcon');
shareIcon.addEventListener('click', () => {
    window.plugins.socialsharing.shareWithOptions(options);
});

let contactText = document.getElementById('contactText');
contactText.addEventListener('click', () => {
    window.plugins.socialsharing.shareWithOptions(options);
});

let contactIcon = document.getElementById('contactText');
contactIcon.addEventListener('click', () => {
    window.plugins.socialsharing.shareWithOptions(options);
});
