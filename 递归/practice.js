let deepClone = function (target, map = new WeakMap()) {
    if (typeof target === 'object') {
        if (map.has(target)) return map.get(target);
        let obj = Array.isArray(target) ? [] : {};
        map.set(target, obj);
        for (let key in target) {
            obj[key] = deepClone(target[key], map);
        }
        return obj;
    } else {
        return target;
    }
};
const target = {
    field1: 1,
    field2: undefined,
    field3: {
        child: 'child'
    },
    field4: [2, 4, 8],
    name:'hello'
};
target.target = target;
let result = deepClone(target);
result.name = 'hihi';
console.log(result, 'jkkk',target);