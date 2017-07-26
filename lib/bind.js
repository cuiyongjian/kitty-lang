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
    // 这里之所以bind+apply一起用，主要是为了利用apply函数可以接收数组参数列表的特性，最终转义过来就是fn.bind(thisArg, others..), 否则要自己手工类似这样写: fn.bind(thisArg, args.slice(1))
    return fn.bind.apply(fn, args);
};



/**
 * 附赠一个非bind的实现。 bind函数是指给一个函数绑定上this指针或预置参数
 * @param {Function} fn 待绑定的函数
 * @param {Object} thisArg this指向
 * @param {...*} others 函数执行时的前置参数
 * @return {Function} 
*/

var bind = function (fn, thisArg, others) {
    var args = [].slice.call(arguments, 2)
    return function () {
      return fn.apply(thisArg, args)
    }
}







