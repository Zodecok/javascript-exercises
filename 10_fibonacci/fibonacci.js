const fibonacci = function(nth) {
    nth = parseInt(nth);
    if (nth < 0) {
        return "OOPS";
    }
    if (nth == 0) {
        return 0;
    }
    if (nth == 1 || nth == 2) {
        return 1;
    }
    return fibonacci(nth-1) + fibonacci(nth-2);
};

// 1 1 2 3 5 8 13
// 1 2 3 4 5 6 7

// Do not edit below this line
module.exports = fibonacci;
