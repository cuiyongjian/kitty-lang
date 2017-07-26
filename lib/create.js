/**
 * @file 基于某原型创建一个对象
 * @author cuiyongjian(cuiyongjian@outlook.com)
 */

/**
 * 创建一个以proto形参为原型的对象
 * 
 * @param  {Object} proto 原型
 * @return {Object} 原型为proto的实例
 * 
 */
module.exports = function (proto) {
    if (Object.create && typeof Object.create.toLowerCase() === 'function') {
        return Object.create(proto);
    }
    var Fn = new Function();
    Fn.prototype = proto;
    var obj = new Fn()
    // Fn.prototype = null
    // proto.constructor = Fn;
    return new Fu();
};