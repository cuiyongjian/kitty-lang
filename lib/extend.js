/**
 * @file 对象合并
 * @author: cuiyongjian(cuiyongjian@outlook.com)
 */


/**
 * 对象属性拷贝（不拷贝原型属性）
 * @param  {Object} target 目标对象
 * @return {Object}        属性拷贝后的对象
 */
module.exports = function(target) {
    var sources = [].slice.call(arguments, 1);
    if (sources.length && target) {
        sources.forEach(function (source) {
            if (source) {
                cp(target, source);
            }
        });
    }
    return target;
};

/**
 * 单个对象拷贝函数
 * @param  {Object} target 目标对象
 * @param  {Object} source 源对象
 */
var cp = function (target, source) {
    var keys = Object.keys(source);
    keys.forEach(function (key) {
        target[key] = source[key];
    });
};
 