# 命名扯皮

命名是那类很难的问题 —— 有认知差距，但没有进入壁垒。如八卦问题一样，每个人都想发表自己的看法，而不像核问题一样，大家都谨慎发表，听专家的。

力不足者，中道而废，讲不清楚全部就讲能讲清楚的部分，讲不完怎么做是对的就讲怎么做是不对的。

**命名的核心目标就一个词概括 —— 简明，简单但明确地表示其代表的意义**

## 工程及文件

#### 工程
体现包含的业务，能够从名称了解到它代表着什么
```bash
# bad
zifeiyu (子非鱼，这个是纯粹个人爱好了)

# good
advertising
```

看情况，公共的内容最好能够少一些”自以为有趣“，<del>像我这个文档，如果用在团队中就适合少一些骚话</del>

#### 文件
规则：小写字母开头，只包含小写字母和数字，使用中划线 **-** 连接
特殊：内部文件可以使用下划线 **_** 开头，如 **_api.js**

```bash
# bad case
order_list
  ├── personal_order_list.vue
  └── order_detail.vue

# good case
order-list
  ├── personal-order-list.vue
  └── order-detail.vue
```

## 类和常量
类和常量是大写字母开头的命名

#### 类命名
约定俗成类名大驼峰
```js
class SuperPerson {

}

class SubPerson extends SuperPerson {
}
```

#### 常量
”常量全大写“大家都知道，但需要说明的是

这里的 **常量** 不等于 **所有用const声明的”常量“**

常量分两类：公共常量和局部常量


#### 共用常量
不仅仅表示不能改变，还代表了其公共特点，一般写在独立文件，单独配置中，这类采用**全大写加下划线**
```js
/**
 * 用户xxx订单审核的状态
 * 审核说明：....
 */
export const ORDER_AUDIT_STATUS_FAIL = 'FAIL';
export const ORDER_AUDIT_STATUS_PASS = 'PASS';
```
公共常量命名虽然本身表意，但可以添加一些注释补充描述其业务意义及一些内在依赖，逻辑。因为命名过于具体则太长，而在集中管理的前提下，通过统一注释来补充说明避免命名过长，也是一种可以采用的策略。

#### 局部常量
仅仅是局部使用，只是用来明确使用中不会，不应该被改变的值或引用，没有左值操作，这类常量，就不一定要全大写，可以跟普通变量一样，小驼峰即可，**如果局部常量也全大写，那么就无法与公共常量有效区分**。
```js
function doSomething() {
  const prefix = 'myy-';
  // ...
}
```

## 变量命名
变量命名使用小驼峰，内部使用的一些特殊变量，辅助属性可以用`_`开头

```js
let userName = '';
let teacherId = '';

/**
 * 辅助属性示意
 * @param {Object} order 订单描述对象
 */
function normalizeOrder(order) {
  return {
    ...order,
    _checked: false
  };
}
```

## 函数命名
普通函数小驼峰，构造函数大驼峰

虽然说构造函数还是普通函数，仅仅是取决于我们的使用，跟定义没有关系，但是约定俗成，对于需要作为构造函数使用的，按照大驼峰来命名吧。

```js
// 普通函数
function doSomething() {
}

// 构造函数
function SuperPerson(options) {
  // ...
}
```

## 关于表意
表意，就是要用相关的英文单词来描述变量的意义，怎样才算达意，实在是难以说得清清楚楚的词，
下面我将描述一些基本原则。

## 命名前缀
前缀用什么，动词开头，名词开头还是怎么样？

is是用在函数方法上还是普通变量值上？
```js
// is前缀命名变量
let isReady = false;

// is前缀命名函数
function isReady() {
  // ...
}
```

#### is前缀
根据我的经验，强求`is`只能用在属性大家(包括我)实在是难以接受

我的方案是 —— is用在方法还是属性，这随你喜欢，爱咋用咋用。

但是，**is意味着一个Boolean，请务必遵守**，我不管你用作属性还是函数，起码你得返回一个Boolean，像下面这样算怎么回事，你is啥，is个锤子啊

```js
// is前缀命名一个Boolean变量
const isReady = true;

// 返回个字符串你is个锤子啊
function isYueyue(name) {
  // ...
  return 'yueyue';
}
```

`if` 前缀也是一样的，**如果前缀明确意味着期望某种类型，你就要返回对应的类型**


#### get前缀
get表示动作，就安心用在方法命名吧，用作属性真不合适。

我遇到过，确认过眼神，一脸懵逼。

```js
data() {
  return {
    getCounts: 6, // 就很崩溃，你一个属性名你get啥啊get
    getReady: true, // 用来表述状态，貌似还有点道理，但用is不香吗
  }
}
```

#### 总结
举一隅不以三隅反，则不复也，让我们表里如一，让动词执行一个动作，让Boolean返回Boolean。

## 临时变量
我们经常会使用到临时变量，像temp, retVal, obj这些，需要提醒的是

**临时变量，请不要失去其临时性，而临时性，不是指就在几行代码之间使用，而是它本身没有，也不需要表示什么明确意义**，

下面这样用temp合适，这个变量唯一的目的就是临时存储
```js
if (left < right) {
  temp = right;
  right = left;
  left = temp;
}
```

但像下面这样的，这些取出来的值，是有明确的意义的，用a,b,c这种命名，我就很服气。
```js
function getParams() {
  let a = this.orderDetail.orderId || '';
  let b = this.staffInfo.id || '';
  // ...
  return {
    // ...
    orderId: a,
    operatorId: b
  }
}
```

这样它不香吗
```js
// 这样它不香吗
function getParams() {
  // ...
  return {
    // ...
    orderId: this.orderDetail.orderId || '',
    operatorId: this.staffInfo.id || ''
  }
}
```