// 0、1、1、2、3、5、8-----计算第n个数的值

let count = 0; //比较每种解法的时间复杂度
let fibonacci = function (n) {
    count++;
    if (n === 0 || n === 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
};
// 数组缓存的优化写法 闭包模式
let fibonacci2 = function () {
    let temp = [0, 1];
    return function (n) {
        count++;
        if (temp[n] === undefined) {
            temp[n] = fibonacci2(n - 1) + fibonacci2(n - 2);
        }
        return temp[n];
    }
}();

//数组缓存的优化写法，传参模式
let fibonacci3 = function (n, memory = []) {
    count++;
    if (n < 2) return n;
    if (memory[n] === undefined) {
        memory[n] = fibonacci3(n - 1, memory) + fibonacci3(n - 2, memory);
    }
    return memory[n];
};

//动态规划写法
let fibonacci4 = function (n) {
    let dp = [0, 1];
    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
        count++;
    }
    return dp[n];
};

let result = fibonacci2(20);
console.log(result, 'count:', count);




