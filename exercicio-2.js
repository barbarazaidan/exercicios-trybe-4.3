// inversão de palavras

let word = 'bárbara';

let palavraReversa = "";

for (let cont = 0; cont < word.length; cont += 1) {
    palavraReversa = palavraReversa + word [word.length - 1 - cont]
    console.log (palavraReversa)
}
console.log (palavraReversa)