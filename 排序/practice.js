const a = {b: 3};
function foo (obj) {
    obj.b = 5;
    return obj;
}
const aa = foo (a);
console.log(a.b);  // 5
console.log(aa.b); // 5
