<template>
  <span :class="[...Object.keys($attrs)]">
    <slot></slot>
  </span>
</template>
<style lang="less" scoped>
.green {
  color: green;
}
.red {
  color: red;
}
.yellow {
  color: yellow;
}
.orange {
  color: orange;
}
.blue {
  color: blue;
}
.bold {
  font-weight: bold;
}
.gray {
  color: gray;
}
.tiny {
  font-size: 12px;
}
</style>
