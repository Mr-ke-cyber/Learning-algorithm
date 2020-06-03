// 实现一个LazyMan，可以按照以下方式调用:
//     LazyMan(“Hank”)输出:
//     Hi! This is Hank!
//     LazyMan(“Hank”).sleep(10).eat(“dinner”)输出
// Hi! This is Hank!
// //等待10秒..
//     Wake up after 10
// Eat dinner~
//     LazyMan(“Hank”).eat(“dinner”).eat(“supper”)输出
// Hi This is Hank!
//     Eat dinner~
//     Eat supper~
//     LazyMan(“Hank”).sleepFirst(5).eat(“supper”)输出
// //等待5秒
// Wake up after 5
// Hi This is Hank!
//     Eat supper
// 以此类推。
function _lazyMan(name) {
    this.events = [];
    const fn = ((name) => {
        return () => {
            console.log(`Hi! This is ${name}`);
            this.next();     // 通过self.next串联起事件流
        }
    })(name);
    this.events.push(fn);
    setTimeout(() => {
        this.next();
    }, 0);       // 在下一个事件循环启动任务
}
_lazyMan.prototype.next = function() {
    const fn = this.events.shift();
    fn && fn();
};

_lazyMan.prototype.sleep = function(time) {
    const fn = ((time) => {
        return () => {
            let timer = setTimeout(() => {
                console.log(`Wake up after ${time} s`);
                this.next();
            }, time * 1000)
        }
    })(time);
    this.events.push(fn);
    return this;
};
_lazyMan.prototype.sleepFirst = function(time) {
    const fn = ((time) => {
        return () => {
            let timer = setTimeout(() => {
                console.log(`Wake up after ${time} s`);
                this.next();
            }, time * 1000)
        }
    })(time);
    this.events.unshift(fn);
    return this;
};

_lazyMan.prototype.eat = function(food) {
    const fn = ((food) => {
        return () => {
            console.log(`Eat ${food} ~`);
            this.next();
        }
    })(food);
    this.events.push(fn);
    return this
};

function LazyMan(name) {
    return new _lazyMan(name)
}
// LazyMan("Hank").sleep(2).eat('dinner');
// LazyMan("Hank").eat("dinner").eat("supper");
LazyMan("Hank").sleepFirst(5).eat("supper");






