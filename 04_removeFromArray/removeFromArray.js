const removeFromArray = function(arr, ...vals) {

    for (let val of vals) {
        let index = arr.indexOf(val);
        if (index > -1) arr.splice(index, 1);
    }
    
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
