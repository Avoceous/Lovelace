const button = document.querySelectorAll('button');
button.forEach( button =>{
    button.addEventListener('click',()=>{
        const faq = button.nextElementSibling;
        const icon = button.children[1];

        faq.classList.toggle('show');
        icon.classList.toggle('rotate');
    });
});

const brand = document.getElementById('brand');
brand.addEventListener('click', () => {
    window.location = "./";
});

const navLogin = document.getElementById('navLogin');
navLogin.addEventListener('click', () => {
    window.location = "./login";
});

const floatingBtn = document.getElementById('floatingActionButton');
floatingBtn.addEventListener('click', () => {
    alert("Under Development");
});

const trackOrder = document.getElementById('trackOrder');
trackOrder.addEventListener('click', () => {
    window.location = './tracking';
});

const faq = document.getElementById('faq');
faq.addEventListener('click', () => {
    window.location = './faq';
});

const contact = document.getElementById('contact');
contact.addEventListener('click', () => {
    window.location = './contact';
});

const blog = document.getElementById('blog');
blog.addEventListener('click', () => {
    window.location = './blog';
});