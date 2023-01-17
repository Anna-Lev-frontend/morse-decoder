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
    const arr = [];
    for (let i = 0; i < expr.length+1; i++) {
        if (!(i % 10) && i !== 0) {
            arr.push(expr.slice(i - 10, i))
        }
    }
    console.log(arr)
    const decodeStr = arr.map((item) => {
        if (item.includes('*')) {
            return ' ';
        }
        let str = '';
        for (let i = 0; i < item.length+1; i++) {
            if (!(i % 2) && i !== 0) {
                if (item[i] + item[i+1] === '10') {
                    str = str + '.';
                }

                else if (item[i] + item[i+1] === '11') {
                    str = str + '-';
                }

            }
        }
        
        return MORSE_TABLE[str];

    }).join('');
    return decodeStr;
}


module.exports = {
    decode
}
