console.log(ES5Class() + 'cc'); // es5:可以直接作为函数运行
// console.log(new ES6Class()) // 会报错：不存在变量提升

function ES5Class() {
    console.log("hello es5");
}

ES5Class.prototype.func = function() {
    console.log("Hello world");
};

class ES6Class {
    constructor() {}
    func() {
        console.log("Hello world");
    }
}

let es5 = new ES5Class();
let es6 = new ES6Class();

// 推荐在循环对象属性的时候，使用for...in
// 在遍历数组的时候的时候，使用for...of
console.log("ES5 :");
for (let _ in es5) {
    console.log('5'+ _);
}

// es6:不可枚举
console.log("ES6 :");
for (let _ in es6) {
    console.log('6'+ _);
}