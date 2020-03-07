// 编写一个 StockSpanner 类，它收集某些股票的每日报价，并返回该股票当日价格的跨度。
// 今天股票价格的跨度被定义为股票价格小于或等于今天价格的最大连续日数（从今天开始往回数，包括今天）。
// 例如，如果未来7天股票的价格是 [100, 80, 60, 70, 60, 75, 85]，那么股票跨度将是 [1, 1, 1, 2, 1, 4, 6]。
// 示例：
// 输入：["StockSpanner","next","next","next","next","next","next","next"], [[],[100],[80],[60],[70],[60],[75],[85]]
// 输出：[null,1,1,1,2,1,4,6]
// 解释：
// 首先，初始化 S = StockSpanner()，然后：
// S.next(100) 被调用并返回 1，
// S.next(80) 被调用并返回 1，
// S.next(60) 被调用并返回 1，
// S.next(70) 被调用并返回 2，
// S.next(60) 被调用并返回 1，
// S.next(75) 被调用并返回 4，
// S.next(85) 被调用并返回 6。
// 注意 (例如) S.next(75) 返回 4，因为截至今天的最后 4 个价格
// (包括今天的价格 75) 小于或等于今天的价格。
// 提示：
// 调用 StockSpanner.next(int price) 时，将有 1 <= price <= 10^5。
// 每个测试用例最多可以调用  10000 次 StockSpanner.next。
// 在所有测试用例中，最多调用 150000 次 StockSpanner.next。
// 此问题的总时间限制减少了 50%。
/*方法一：暴力求解，虽然所有测试用例都过了，但是超时了*/
var StockSpanner = function() {
    this.spanner = [];
};

/**
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function(price) {
    if (!this.spanner.length) {
        this.spanner.push(price);
        return 1;
    }
    let len = this.spanner.length;
    this.spanner.push(price);
    if (price < this.spanner[len - 1]) {
        return 1;
    } else {
        let res = 1;
        while (len--) {
            if (price >= this.spanner[len]) {
                res++;
            } else break;
        }
        return res;
    }
};

/**
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */
/*
方法二：主要就是提高执行效率，也即减少运算次数，关键要明白此题需要维护的是一个单调减的栈*/
// 这道题利用了 单调减栈每次插入新数据时，会一次性将比自己小的元素全部排出的特性
// 这个特性正好和题目里的价格小于或等于今天价格的最大连续日是吻合的
// 换句话说，我们单次插入某值时抛弃的元素组，就是该值前的一段连续日
// 所以每次插入新数据，都会将之前小于自己的元素折叠一次，记录下比这个新数据小的数量，以达到提高运算效率的目的。
var StockSpanner2 = function() {
    this.spanner = [];
    this.cache = [];
};

/**
 * @param {number} price
 * @return {number}
 */
StockSpanner2.prototype.next = function(price) {
    let res = 1;
    let len = this.spanner.length;
    while (len && this.spanner[len - 1] <= price) {
        this.spanner.pop();
        res += this.cache.pop();
        len--;
    }
    this.cache.push(res);
    this.spanner.push(price);
    return res;
};