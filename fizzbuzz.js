// fizzbuzz

function fizzBuzz(num) {
    let output = "";
    if (num % 3 === 0) output += "Fizz";
    if (num % 5 === 0) output += "Buzz";
    // if (num % 3 === 0 && num % 5 === 0) output += "FizzBuzz"; 
    if (num % 3 !== 0 && num % 5 !== 0) return num;

    return output;

}
module.exports = fizzBuzz;