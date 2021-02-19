const loaderBG = document.createElement('div');
const loaderCircle1 = document.createElement('div');
const loaderCircle2 = document.createElement('div');
const mainBody = document.querySelector('html');
loaderBG.classList.add('loader-bg')
loaderBG.appendChild(loaderCircle1);
loaderCircle1.classList.add('loader-1')
loaderCircle2.classList.add('loader-2')
console.log(mainBody)
document.addEventListener('readystatechange', () => {
    console.log(document.readyState)
});

if (document.readyState == 'interactive') {
    mainBody.appendChild(loaderBG);
} else if (document.readyState == 'complete') {
    mainBody.appendChild(loaderBG);
}