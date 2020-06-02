<template>
  <div class="TopScrollArrow">
    <div class="TopScrollArrow__wrapper">
      <div class="TopScrollArrow__iconLineMask">
        <div class="TopScrollArrow__iconLine"></div>
      </div>
      <div class="TopScrollArrow__iconTriangle">
        <div class="TopScrollArrow__iconTriangleFirstMask">
          <div class="TopScrollArrow__iconTriangleFirst"></div>
        </div>
        <div class="TopScrollArrow__iconTriangleSecondMask">
          <div class="TopScrollArrow__iconTriangleSecond"></div>
        </div>
        <div class="TopScrollArrow__iconTriangleThirdMask">
          <div class="TopScrollArrow__iconTriangleThird"></div>
        </div>
        <div class="TopScrollArrow__iconTriangleLastMask">
          <div class="TopScrollArrow__iconTriangleLast"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TopScrollArrow'
};
</script>

<style scoped lang="scss">
@import './style.scss';
</style>
