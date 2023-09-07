const sumAll = function(start, end) {
    let startValid = typeof(start) === "number" && (start > 0);
    let endValid = typeof(end) === "number" && (end > 0);

    if (!(startValid && endValid)) return "ERROR";

    if (start > end) [start, end] = [end, start];

    let sum = 0;
    for (;start <= end; start++) {
        sum += start;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
