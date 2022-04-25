// Uncaught (in promise) TypeError: Assignment to constant variable.
// 原因：我们使用 const 定义了变量且存在初始值。 后面又给这个变量赋值，所以报错了。使用 const 定义的常量，不能修改它的值，且定义的常量必须赋初值；let 定义的是变量，可以进行变量赋值操作，且不需要赋初值。
// 解决：将 const 改为 let 进行声明。