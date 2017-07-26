/**
 * @file 类型辅助模块
 * @author cuiyongjian(cuiyongjian@outlook.com)
 */


/**
 * 获取对象真实类型
 * @param  {*} data 一个基本类型或者对象数据
 * @return {string} 类型名称的字符串表示
 */
exports.type = function (data) {
    return Object.prototype.toString.call(data).slice(8, -1).toLowerCase();
};

/**
 * 判断某变量是不是简单对象
 * @param  {*}  data 目标变量
 * @return {Boolean} 是与否
 */
exports.isPlainObject = function (data) {
    return ('object' === exports.type(data)) && Object.prototype.isPrototypeOf(data);
};

/**
 * 判断是否是空的简单对象
 * @param  {*}  data 目标变量
 * @return {Boolean}
 */
exports.isEmptyObject = function (data) {
    if (!exports.isPlainObject(data)) {
        return false;
    }
    return Object.keys(data).length === 0;
};


/**
 * 判断变量是否为空值（空字符串，空数组，空对象，未定义）
 * @param  {[type]}  data [description]
 * @return {Boolean}      [description]
 */
exports.isEmpty = function (data) {
    return data == null
        || data == ''
        || (Object.isArray(data) && data.length === 0)
        || exports.isEmptyObject(data);
};




