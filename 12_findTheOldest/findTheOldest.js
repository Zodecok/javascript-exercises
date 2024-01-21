const findTheOldest = function(pepes) {
    let oldest = pepes[0];
    pepes.forEach(pepe => {
        let oldestTop = typeof(oldest.yearOfDeath) == "undefined" ? new Date().getFullYear() : oldest.yearOfDeath;
        let newTop = typeof(pepe.yearOfDeath) == "undefined" ? new Date().getFullYear() : pepe.yearOfDeath;
        if (newTop - pepe.yearOfBirth > oldestTop - oldest.yearOfBirth) {
            oldest = pepe;
        }
    })
    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
