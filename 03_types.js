// 也可以直接字面量进行类型声明
var a;
a = 18;
var b; // 联合类型
var d; // 表示任意类型,想当于关闭TS的类型检测
var e; // 表示未知类型的值
e = 1;
e = '1';
// unknown 就是一个类型安全的any
// unknown 类型的变量,不能直接赋值给其他变量
var s;
if (typeof e === 'string') {
    s = e;
}
s = e; // 类型断言,可以用来告诉解析器变量的实际类型
s = e;
function fn() {
    return 123;
}
function fn1(num) {
    if (num > 0) {
        return 1;
    }
    else {
        return true;
    }
}
// void 用来表示空,以函数为例,表示没有返回值的函数
function fn2() {
}
// never 表示永远不会有返回结果
function fn3() {
    throw new Error('报错了');
}
