const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    let morseWordsArr = [];

    for (let i = 0; i < expr.length; i += 10) {
        let element = expr.slice(i, i + 10);;
        let morseSymbolsArr = [];
        if (element == '**********') {
            morseSymbolsArr.push(' ');
        }
        for (let i = 0; i < element.length; i += 2) {
            let j = i + 1;
            let a = element[i];
            let b = element[j];
            if (a == 1 && b == 1) {
                morseSymbolsArr.push('-');
            } else if (a == 1 && b == 0) {
                morseSymbolsArr.push('.');
            } else if (a == 0 && b == 0) {
                continue;
            }
        }
        morseWordsArr.push(morseSymbolsArr);
    }

    let morseLetters = morseWordsArr.map(letters => letters.join(''));

    let decodedStr = morseLetters.map(letter => letter == ' ' ? letter : MORSE_TABLE[letter]).join('');
    return decodedStr;
}

module.exports = {
    decode
}