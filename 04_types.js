var a; // 表示一个js对象
a = {};
a = function () { };
var b; // b :{}  => 用来指定对象中可以包含哪些属性
// age?  熟悉名后面加上?表示属性可选
b = { name: '孙悟空' };
var c; // 表示要求对象里必须有name属性 其他属性可随意添加
var d; // d是一个函数, 有两个参数,值类型是number
d = function (n1, n2) {
    return n1 + n2;
};
var e; //表示是字符串数组
e = ['1', '2',];
var f;
var g;
g = [1, 2, 3242];
/*
*   元组,元组就是固定长度的数组
**/
var h;
h = ['hello', 'abc'];
/*
* enum 枚举
**/
var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Famole"] = 1] = "Famole";
})(Gender || (Gender = {}));
var i;
i = {
    name: '孙悟空',
    gender: Gender.Male
};
console.log(i.gender === Gender.Male);
// &表示且
// let j:string & number
var j;
var myString = 1 | 2 | 3 | 4;
var k;
