/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    let len = gas.length;
    let i = 0;
    while (i < len) {
        if (gas[i] >= cost[i]){
            let start = i;
            let j = 0;
            let currGas = gas[start];
            while (j < len) {
                currGas -= cost[start];
                start++;
                if (currGas < 0) {
                    break;
                }
                if (start === len) {
                    start = 0;
                }
                currGas += gas[start];
                j++;
                if (j === len) {
                    return i;
                }
            }
        }
        i++;
    }
    return -1;
};
let result = canCompleteCircuit([2], [2]);
console.log(result, 'jkl');
