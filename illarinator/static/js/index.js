const generateButton = document.getElementById('generate-button');
const textHolder = document.getElementById('text-holder');

function capitalize(word) {
    return word[0].toUpperCase() + word.substr(1);
}

function generate() {
    const response = axios.get('/generate')
        .then(response => textHolder.innerText = capitalize(response.data))
        .catch(error => textHolder.innerText = 'Что-то пошло не так :(');
}

generateButton.onclick = generate;
