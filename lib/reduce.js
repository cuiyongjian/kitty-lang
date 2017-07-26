/**
 * @file reduce function
 * @author cuiyongjian(cuiyongjian@outlook.com)
 */

/**
 * 自己实现了一个数组规约方法，可以让用户传入一个规约算法，从而以此对数组各项执行，实现规约。
 * @param  {Array} arr 要规约的数组
 * @param  {Function} reduceFunc 规约算法函数
 * @param  {*} initial 规约迭代的初始值
 * @return {*} 规约结果
 */
module.exports = function (arr, reduceFunc, initial) {
    for (var i = 0; i < arr.length; i++) {
        if (i === 0) {
            initial = initial || arr[0];
            continue;
        }
        initial = reduceFunc(initial, arr[i]);
    }
    return initial || arr[0];
};
