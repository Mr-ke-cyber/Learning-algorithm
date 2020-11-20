// 实现一个decodeString函数，输入符合count[letter]规则的参数，
// 能将letter的内容count次输出。其中，count是0或正整数，letter是区分大小写的纯字母。
// 并正确通过下面的测试用例:
// decodeString('5[ab]'); // ababababab
// decodeString('3[a]2[bc]'); // aaabcbc
// decodeString('2[abc]3[cd]ef'); // abcabccdcdcdef
// decodeString('3[a2[c]]'); // accaccacc
// 双指针 + 递归解法
const decodeString = str => {
      let checkStr = str.match(/\d+/g);
      if (!checkStr) {    // 递归结束条件 说明没有未“拍平”的地方了
          return str;
      }
      let len = str.length;
      let i = 0, j = 0;
      while (i < len) {
          if (str[i] === "[") {   // 按照题意有“[”必然有“]”
              j = i;
              while (j < len) {
                  if (str[j] === "[") {   // 有“[”嵌套，因而更新i的值
                        i = j;
                  } else if (str[j] === "]") {
                      let k = 0;
                      let tempStr = "";
                      let diff = str.slice(i + 1, j);
                      while (k < 1 * str[i - 1]) {
                          tempStr += diff;
                          k++;
                      }
                      str = str.slice(0, i - 1) + tempStr + str.slice(j + 1);
                      str =  decodeString(str);
                      break;
                  }
                  j++;
              }
          }
          i++;
      }
      return str;
};
let result = decodeString("3[a]2[bc]");
console.log(result, 'jkk')
