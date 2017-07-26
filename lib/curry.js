/**
 * @file 给函数绑定前置参数
 * @author cuiyongjian(cuiyongjian@outlook.com)
 */

module.exports = function (fn, args) {
    args = [].slice.call(arguments, 1);
    return function () {
        var execArgs = [].slice.call(arguments)
        // 调用函数时，设置this为当调用环境的this
        return fn.apply(this, args.concat(execArgs));
    };
};