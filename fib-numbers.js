// variable

0 // 0 
1 // 0 + 1 
1 // 0 + 1
2 // 1 + 1 
3 // 1 + 2

function fibonacci(num) {

    if (num <= 1) return 1;

    return fibonacci(num - 1) + fibonacci(num - 2);

    console.log(fibonacci(num));

}