const loaderBG = document.createElement('div');
const mainBody = document.querySelector('html');
loaderBG.classList.add('loader-bg')

document.addEventListener('readystatechange', () => {
    console.log(document.readyState)
});

if (document.readyState == 'interactive') {
    mainBody.appendChild(loaderBG);
} else if (document.readyState == 'complete') {
    mainBody.appendChild(loaderBG);
}