const generateButton = document.getElementById('generate-button');
const textHolder = document.getElementById('text-holder');
let animationID = null;

function capitalize(word) {
    return word[0].toUpperCase() + word.substr(1);
}

function buttonLoadingDots() {
    const DOTS_LEN = 3;
    generateButton.innerText += '.';
    if (generateButton.innerText.length > DOTS_LEN) {
        generateButton.innerText = '';
    }
}

function startLoadingAnimation() {
    generateButton.disabled = true;
    generateButton.innerText = '';
    generateButton.classList.add('loading');
    animationID = setInterval(buttonLoadingDots, 100);
}

function endLoadingAnimation() {
    generateButton.disabled = false;
    clearInterval(animationID);
    generateButton.classList.remove('loading');
    generateButton.innerText = 'Замутить кликуху';
}

function generate() {
    startLoadingAnimation();
    axios.get('/generate')
        .then(response => {
            textHolder.innerText = capitalize(response.data);
            endLoadingAnimation();
        })
        .catch(error => {
            textHolder.innerText = 'Что-то пошло не так :(';
            endLoadingAnimation();
        });
}

generateButton.onclick = generate;
