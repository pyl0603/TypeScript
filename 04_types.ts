let a : object; // 表示一个js对象
a = {}
a = function () {}

let b : {name:string,age?:number};  // b :{}  => 用来指定对象中可以包含哪些属性
// age?  熟悉名后面加上?表示属性可选
b = {name:'孙悟空'}


let c : {name:string, [propName:string]:any} // 表示要求对象里必须有name属性 其他属性可随意添加


let d:(a:number,b:number)=>number // d是一个函数, 有两个参数,值类型是number
d = function (n1:number,n2:number):number{
  return n1+n2
}
let e :string [] //表示是字符串数组
e = ['1','2',]


let f :number[]
let g :Array<number>
g = [1,2,3242]
/*
*   元组,元组就是固定长度的数组
**/ 
let h :[string,string]
h = ['hello','abc']


/*
* enum 枚举
**/

enum Gender{
  Male = 0,
  Famole = 1
}

let i:{name:string,gender:0|1}
i = {
  name:'孙悟空',
  gender:Gender.Male
}
console.log(i.gender === Gender.Male);

// &表示且
// let j:string & number
let j :{name:string}&{age:number} 
// 同时满足


type myType = string;//别名
let myString = 1|2|3|4
let k:1|2|3|4
