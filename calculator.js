/* function calculate(s) {
    return parseInt(s);
}

module.exports = calculate;
*/

function calculate(s) {
    // 1, 2 
    // split 
    const parts = s.split(",");
    var sum = 0;
    for (const p of parts) {
        const n = parseInt(p);
        sum += n;
    }
    return sum;
}

module.exports = calculate;