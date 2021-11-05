// 也可以直接字面量进行类型声明
let a : 18
a = 18
let b : "a" | "c" // 联合类型
let d :any // 表示任意类型,想当于关闭TS的类型检测

let e :unknown  // 表示未知类型的值
e = 1
e = '1'
// unknown 就是一个类型安全的any
// unknown 类型的变量,不能直接赋值给其他变量

let s : string 
if(typeof e === 'string') {
  s = e
}

s = e as string // 类型断言,可以用来告诉解析器变量的实际类型
s = <string>e;
function fn () :number{
  return 123;
}

function fn1(num) {
  if(num>0){
      return 1
  }else{
    return true
  }
}
// void 用来表示空,以函数为例,表示没有返回值的函数
function fn2():void {

}

// never 表示永远不会有返回结果
function fn3():never {
    throw new Error('报错了')
}