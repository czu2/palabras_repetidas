// Cuenta Letras

function letters(){
    var textoEntrada = document.querySelector('#texto-entrada').textContent;
    var arrayLetters = textoEntrada.replace(/[^a-z]/gi, '').toUpperCase().split("");
    var results = countLetters(arrayLetters);
    showLetterResults(results);
}

function countLetters(arrayLetters) {
    var result = {}
    arrayLetters.forEach(letter => {
        if (!result[letter]){
            result[letter] = 1;
        }
        else{
            result[letter] += 1;
        }
    })
    return result;
}


// Cuenta Palabras

function words(){
    var textoEntrada = document.querySelector('#texto-entrada').textContent;
    var wordArray = textoEntrada.match(/\b(\w+)\b/g);
    var results = countWords(wordArray);
    showWordResults(results);
}

function countWords(wordArray){
    var result = {}
    wordArray.forEach(word => {
        var upWord = word.toUpperCase();
        if (!result[upWord]){
            result[upWord] = 1;
        }
        else{
            result[upWord] += 1;
        }
    })
    return result;
}


// Muestra Resultados

function showLetterResults(result){
    var resultsArray= Object.entries(result)
    var resultTag = document.querySelector('#resultados');

    resultsArray.forEach(values => {
        var p = document.createElement("p");
        
        var strong = document.createElement("strong");
        strong.innerHTML = `· Letra: ${values[0]} `;
        p.appendChild(strong);

        var span = document.createElement("span");
        span.innerHTML = `  /  Cantidad: ${values[1]} `;
        p.appendChild(span);
        
        resultTag.appendChild(p);
    })
}

function showWordResults(result){
    var resultsArray = Object.entries(result)
    var resultTag = document.querySelector('#resultados');
    
    resultsArray.forEach(values => {
        var p = document.createElement("p");

        var strong = document.createElement("strong");
        strong.innerHTML = `· Palabra: ${values[0]}`;
        p.appendChild(strong);

        var span = document.createElement("span");
        span.innerHTML = `  /  Cantidad: ${values[1]}`;
        p.appendChild(span);

        resultTag.appendChild(p);
    })
}


// Main

letters();
words();