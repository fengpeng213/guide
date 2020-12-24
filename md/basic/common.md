# 公共基础

描述公共的约定，基本上是“龟腚”

## 分号

一句话，推荐使用分号，底线是统一使用或者统一不使用。

可分级别实现统一，比如工程级统一，团队级统一。

```js
const name = 'yueyue';
let age = 25;
```

```css
.wrapper {
  display: flex;
  font-size: 14px;
}
```

## 缩进

使用空格，tab设置转换，缩进统一为2空格或4空格

```css
.wrapper {
  display: flex;
  font-size: 14px;
}
```

## 块标识

使用{}作为块标识

```scss
.wrapper
  display: flex;
  font-size: 14px;
  .name
    font-size: 16px;
  .age
    font-size: 12px;

// 采用
.wrapper {
  display: flex;
  font-size: 14px;
  .name {
    font-size: 16px;
  }
}
```

## 下划线

下划线 `_` ，明确用来表现一些”内部“，”私有“，”局部“ 的含义，如内部文件，内部变量。

文件，文件夹，URL的命名，尽量采用中划线 `-`。

使用 `_` 需要有明确的理由

## 大写字母

大写往往只在驼峰，类命名，常量等处用到，大写字母开头的场景较少

使用 **大写字母** 开头 需要有明确的理由

## 中文拼音

一般情况下禁止使用中文拼音
