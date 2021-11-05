// a 的类型 设置为number,在以后的使用过程中a只能是number
var a;
var b;
b = 'hello';
var c = true; // 声明完类型 直接赋值 => 不常用
var d = false; // 如果变量的声明和赋值是同时进行的,ts可以自动对变量类型进行检测
function sum(a, b) {
    return a + b;
}
console.log(sum(1333, 222));
