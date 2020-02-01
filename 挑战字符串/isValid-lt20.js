// 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。
// 有效字符串需满足：
// 左括号必须用相同类型的右括号闭合。
// 左括号必须以正确的顺序闭合。
// 注意空字符串可被认为是有效字符串。
// 示例 1:
// 输入: "()"
// 输出: true
// 示例 2:
// 输入: "()[]{}([()])"
// 输出: true
// 示例 3:
// 输入: "(]"
// 输出: false
// 示例 4:
// 输入: "([)]"
// 输出: false
// 示例 5:
// 输入: "{[]}"
// 输出: true
/**
 * @param {string} s
 * @return {boolean}
 */
/*方法一：正则匹配*/
var isValid = function (s) {
    while (s.includes("()") || s.includes("{}") || s.includes("[]")){
        s = s.replace(/\(\)|\[]|{}/g, "");
    }
    return !s;
};
/*方法二：使用栈结构*/
var isValid2 = function (s) {
    let stack = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
            stack.push(s[i]);
        } else {
           let curr = stack.pop();
           if (curr === '(' && s[i] !== ')' || curr === '[' && s[i] !== ']' || curr === '{' && s[i] !== '}' || curr === undefined) {
               return false;
           }
        }
    }
    return stack.length === 0;
};
/*方法三：在前述方法的基础上优化*/
var isValid3 = function (s) {
    let stack = [];
    const map = {
        '(' : ')',
        '{' : '}',
        '[' : ']'
    };
    for (let i = 0; i < s.length; i++) {
         let curr = s[i];
         if (map[curr]) {
             stack.push(curr);
         } else {
             let char = stack.pop();
             if (map[char] !== curr) {
                 return false;
             }
         }
    }
    return !stack.length;
};
let result = isValid3("{[]");
console.log(result, 'jkk');