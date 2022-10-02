const homeIcon = document.getElementById('homeIcon');
homeIcon.addEventListener('click', () => {
    window.location = './';
});

const sideBarGithubText = document.getElementById('sideBarGithubText');
sideBarGithubText.addEventListener('click', () => {
    window.location = 'https://github.com/softDev28/Lovelace';
});

const search = document.getElementById('search');
search.addEventListener('click', () => {
    $('#searchOverlayContainer').fadeIn(100);
});