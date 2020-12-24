# CSS
CSS的知识，只讲那些重要的部分

## 基本约定
基本的规则，分必要和次要

#### 必要约定

**id**：小驼峰，少用，明确需要且适宜后用，不能接受 `logo-wrapper`这样格式的命名作为id

**class命名**：字母加中划线，不要使用驼峰，不要数字开头，不要下划线

**缩进**：统一使用2格缩进（或4），不管有无大括号，都应当缩进对齐

**id不要嵌套**：id要注意其唯一性，没有必要写到嵌套里面徒增大小

```scss
// good
#userId {
  // ...
}

.logo-wrapper {
  display: flex;
}


// bad
#user-id {
}

.logo-wrapper {
  display: flex;

  // bad
  #userName {
    // ...
  }
}

```

#### 次要约定
视团队情况具体执行，不强求

**括号**：推荐使用大括号来表示层级关系

**分号**：建议使用分号来结束，这个次要中的次要


来个标准示例
```css
.listing { /* 使用大括号，{ 之前有空格 */
  font-size: 18px; /* 两个空格缩进，:后面有空格，带分号 */
  line-height: 1.2;
}

/* 一行一个别名 */
.one,
.selector,
.per-line {
  // ...
}
```

## 关于嵌套
使用less，scss等预处理语言，不要嵌套过深，层级深导致打包过大，看下面的这个例子真切感受下

```scss
.page-container-wrapper {
  .main-content {
    width: 1260px;
    margin: 50px auto 20px;
    /* 省略 */
    .tips-wrapper {
      height: 90px;
      width: 1260px;
      /* 省略 */
      .title {
        width: 699px;
        height: 66px;
        /* 省略 */
        .icon {
          display: inline-block;
        }
      }
    }
  }
}
```

转换后
```css
.page-container-wrapper .main-content {
  width: 1260px;
  margin: 50px auto 20px;
  /* 省略 */
}
.page-container-wrapper .main-content .tips-wrapper {
  height: 90px;
  width: 1260px;
  /* 省略 */
}
.page-container-wrapper .main-content .tips-wrapper .title {
  width: 699px;
  height: 66px;
  /* 省略 */
}
.page-container-wrapper .main-content .tips-wrapper .title .icon {
  display: inline-block;
}
```
所谓的“过深”是一个模糊的形容，什么才叫过深？参考值是3层，对于像Vue的SFC文件中style的定义，通过添加scoped，已经实现了作用域的限定，一定程度的“扁平化”并不会丢失或被覆盖。

<em>这里有个考虑，过深这个形容是模糊的，而扁平的程度也是模糊的，要扁平到什么程度呢？而且扁平后也会丢失一部分层级信息，如何取舍衡量，留给读者去思考</em>

## scoped
在Vue SFC等类似的场景中，推荐使用scoped，使用相应的loader去添加作用范围限制

#### 一个真实问题场景
如下，B组件是从A组件拷贝过来做了一些拓展的，两个组件使用了相同的class name，但都没有用scoped，
这个时候问题就来了 —— 

**如果页面同时加载了两个组件的style，则要么A影响了B，要么B影响了A**

```html
<!-- in A.vue component -->
<style lang="scss">
.header-wrapper {
  width: 1080px;
  font-size: 14px;
}
</style>

<!-- in B.vue component -->
<style lang="scss">
.header-wrapper {
  width: 1200px;
  font-size: 20px;
}
</style>
```
请注意 **scoped 不是 scope!**

## 命名scoped
使用预处理器时，组件顶层元素的class name命名本身就是一个“scoped”

想强调的一点 —— 对于那些需要公用的样式，尤其是那些”无法添加“scoped的，比如你写一小段公共的代码，通过npm包的方式添加到多个工程，那么你要注意，使你的命名具备足够的特殊性，能够**自成scoped**。

举例如下，如果命名成下面这样，或许早晚或者中午就会出问题
```html
<div class="cookie-policy">
  <!-- 省略 -->
</div>
```

而如果是这样，就不可能出问题了
```html
<div id="commonCookiePolicyPopupWrapperMyy">
  <!-- 省略 -->
</div>
```
我这里其实加了一个 `Myy` 后缀，这里其实想表达的意思，是可以在表意的名称之外，添加一些额外的前后缀，来确保绝无可能重复。 

## 属性顺序
属性有顺序是提高可读性的一个较为有用的策略。

并不是说要死死规定每个属性的顺序，那样的要求不具备可行性，（即使有工具能自动处理，大家也不会愿意用，给人的压迫感太强，且收益甚慰），大家都是打工人，认不清身份吗要这样做zibenjia的事

就两个具体要求

- 属性分类，不同类别之间遵循大概的先后逻辑；
- 同一个类别的属性，写到一起；

一个参考顺序如下，就是先确定与外部的关系，然后再处理自身内部的事情

```text
1. position，display (找到位置)
2. width, height等尺寸 (占多大地方)
3. margin, padding等间距（确认距离）
4. 边框，背景 (划定边界标记)
5. 字体，颜色（整理衣着)
6. 其他
```

可以不完全按照这个顺序，比如说你就是喜欢把尺寸放在前面，display放后面，都OK的，最基本的要求，请把一类的属性写到一起。

```css
/* bad case 这样凌乱的会让人也很凌乱吧？不要说例子太过极端，真的有类似的 😂 */
.wrapper {
  display: flex;
  width: 600px;
  align-items: center;
  height: 200px;
  justify-content: center;
  font-size: 14px;
  text-align: center;
  font-family: 'roboto-regular';
  color: #f85415;
}

/* good case 这样是不是就清晰多了呢 😌 */
.wrapper {
  width: 600px;
  height: 200px;

  display: flex;
  align-items: center;
  justify-content: center;

  font-family: 'roboto-regular';
  font-size: 14px;
  color: #f85415;
  text-align: center;
}
```

## 减少嵌套
大家都没有在意这个点，但真的是嵌套太多了，大家在开发的过程中，真的可以有意识地去思考，如何能够减少一些嵌套。
```scss
.certificate-classroom-wrapper {
  .main-content {
    width: 1260px;
    margin: 50px auto 20px;
    /* 省略 */
    .ppt-tips-wrapper {
      height: 90px;
      width: 1260px;
      /* 省略 */
      .text {
        width: 699px;
        height: 66px;
        /* 省略 */
        .title {
          display: inline-block;
        }
      }
    }
  }
}
```
