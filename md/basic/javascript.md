# JavaScript
JavaScript的约定，是与ES6紧密结合的。

ES6我总结了两个方面的优势

- 使用更爽，像拓展运算符大大方便了操作；
- 功能更强，像Array的一些新方法，提供了更强大的功能；

本文将会结合ES6，提供一些参考，说明如何更好地利用这些特性去组织代码

<txt tiny green>功能更强也意味着使用更爽，这么一想，就好像是双倍的爽快</txt>

## 变量声明
使用 const 和 let，而不是var
```js
// from
var name = 'mayueyue';
var age = 25;

// to
const name = 'mayueyue';
let age = 25;
```
有的同学可能会说，我喜欢全都用let，我理解这样的想法，但多迈一步或许会更好。如果你坚持一种选择，期望你能够言之有理地表明自己的依据。

何时使用const，可参考 [类和常量](http://localhost:9527/basic/naming.html#%E7%B1%BB%E5%92%8C%E5%B8%B8%E9%87%8F)

## Airbnb
Airbnb的规范[JavaScript部分](https://github.com/airbnb/javascript)很详细的，值得阅读，[中文的看这个](https://github.com/lin-123/javascript)

<txt>我目测在没有外力的情况下，大多数人只是打开看两眼就会封印在书签里</txt>


# 其他