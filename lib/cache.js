/**
 * @file 函数绑定this指针与前置参数
 * @author cuiyongjian(cuiyongjian@outlook.com)
 * @date 2017-07-17
 */



/**
 * bind函数实现这是基于node的实现，由于node肯定支持ECMA5，所以函数具有bind
 * 若是基于非ECMA5来实现，则只需要利用闭包return一个包裹起来的apply调用即可。
 * @param  {Function} fn 待绑定的函数
 * @param  {Object} thisArg this指向
 * @param  {...*} others 函数执行时附加的前置参数
 * @return {Function}
 */
module.exports = function (fn, thisArg, others) {
    // 其中args[0] === thisArg
    // args[1]... === others
    var args = [].slice.call(arguments, 1);
    return fn.bind.apply(fn, args);
};