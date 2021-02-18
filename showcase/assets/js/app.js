// creating the navigator for small screen sizes
const hamburger = document.querySelector('.hamburger');
const hamSpan1 = document.querySelector('.hamburger .span-1');
const hamSpan2 = document.querySelector('.hamburger .span-2');
const hamSpan3 = document.querySelector('.hamburger .span-3');
const darkOverlay = document.querySelector('.dark-overlay');
const nav = document.querySelector('.top-navigator .nav-1');

hamburger.addEventListener('click', () => {
    nav.classList.toggle('show');
    darkOverlay.classList.toggle('show');
    hamburger.classList.toggle('transform');
});
darkOverlay.addEventListener('click', () => {
    nav.classList.toggle('show');
    darkOverlay.classList.toggle('show');
    hamburger.classList.toggle('transform');
});

//creating the share post animation
const sharePostBtn = document.querySelector('.share-post-btn');
const sharePostMenu = document.querySelector('.share-blog-con');

sharePostBtn.addEventListener('click', () => {
    sharePostMenu.classList.toggle('show');
});
sharePostBtn.addEventListener('focusout', () => {
    sharePostMenu.classList.toggle('show');
});