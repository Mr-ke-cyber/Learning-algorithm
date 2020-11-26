/***来自有赞***
 * 将一个json数据的所有key从下划线改为驼峰
 * @param {object | array} value 待处理对象或数组
 * @return {object | array} 处理后的对象或数组
 */
const testData = {
    a_bbb : 123,
    a_g : [1,2,3,4],
    a_d : {
        s : 2,
        s_d : 3
    },
    a_f : [1, 2, 3, {
        a_g : 5
    }],
    a_d_s : 1
};
/*解法一：错误示范*/
function mapKeysToCamelCase (data) {
    const str = JSON.stringify(data);
    const tempArr = str.split('');
    const newArr = [];
    tempArr.forEach((item, index) => {
        if (item === "_") {
            tempArr[index + 1] = tempArr[index + 1].toUpperCase();
            newArr.push(index + 1);
        }
    });
    const newStr = tempArr.join('');
    const newStr1 = newStr.replace(/_/g, '');
    return JSON.parse(newStr1);
}
// 这种解法能达到预期效果吗？并不能，它将value也给替换成了驼峰了，题目只要求将key换成驼峰，并且a_d_s这种属性名也替换成了aDS了,所以是错误示范。
/*我们来看正确写法*/
function mapKeysToCamelCase2 (data) {
    let temp = Array.isArray(data) ? [] : {};
    for (let key in data) {
        if (data.hasOwnProperty(key)) {
            let i = 0;
            let nk = "";
            while (i < key.length) {
                if (key.charAt(i) === "_") {
                    if (key.charAt(i - 2) !== "_") {
                        nk += key.charAt(i + 1).toUpperCase();
                    } else {
                        i++;
                        continue;
                    }
                    i++;
                } else {
                    nk += key.charAt(i);
                }
                i++;
            }
            temp[nk] = typeof data[key] === "object" ? mapKeysToCamelCase2(data[key]) : data[key];
        }
    }
    return temp;
}
let result = mapKeysToCamelCase2(testData);
console.log(result)




