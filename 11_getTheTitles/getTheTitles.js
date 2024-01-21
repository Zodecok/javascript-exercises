const getTheTitles = function(objs) {
    let arr = [];
    objs.forEach(obj => arr.push(obj["title"]));
    return arr;
};

// Do not edit below this line
module.exports = getTheTitles;
