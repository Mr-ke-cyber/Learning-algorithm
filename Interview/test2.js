// let arr =[[‘A’,’B’],[‘a’,’b’],[1,2]]求二维数组的全排列组合 结果：Aa1,Aa2,Ab1,Ab2,Ba1,Ba2,Bb1,Bb2
// 来自美团
const foo = (arr) => {
    let res = [];
    const dfs = (para, tempRes) => {
        if (para.length === 0) {
            res.push(tempRes);
            return;
        }
        dfs(para.slice(1), tempRes + para[0][0]);
        dfs(para.slice(1), tempRes + para[0][1]);
    };
    dfs(arr, "");
    return res.join(',');
};
let result = foo([['A', 'B'], ['a', 'b'], [1, 2]]);
console.log(result);
