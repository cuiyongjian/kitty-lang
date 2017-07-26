/**
 * @file inherits
 * @author cuiyongjian(cuiyongjian@outlook.com)
 */


/**
 * 为类型构造器建立继承关系
 * @param  {Function} subclass 子类
 * @param  {Function} superclass 父类
 * @return {Function}
 */
module.exports = function (subclass, superclass) {
    // 创建一个空函数代替父类，因为我们仅需要这个实例__proto__指向父类prototype而已
    // 空函数可以避免子类prototype中出现不必要的属性。其实完全可以采用最新的Object.create来让子类指向父类prototype
    var Fn = new Function();
    Fn.prototype = superclass.prototype;
    var subProto = subclass.prototype;
    // 让子类prototype变成父类实例，原型链形成，但子类原型属性丢失
    var proto = subclass.prototype = new Fn();
    // 将子类原型对象属性找回。拷贝到目前的子类prototype上。
    Object.keys(subProto).forEach(function (key) {
        proto[key] = subProto[key];
    });
    // 由于子类prototype属性丢失，所以再重新设置回子类的prototype.constructor属性
    subclass.prototype.constructor = subclass;
    return subclass;
};