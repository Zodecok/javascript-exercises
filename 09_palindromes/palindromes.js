const palindromes = function (phrase) {
    phrase = phrase.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
    backwards = phrase.split('').reverse().join('');
    if (phrase === backwards) {
        return true;
    }
    return false;
};

// Do not edit below this line
module.exports = palindromes;
