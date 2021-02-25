<template>
  <div class="BlogFrameSide">
    <BlogRightFrame />
    <BlogLeftFrame />
  </div>
</template>

<script>
import BlogRightFrame from '~/components/pc/molecules/BlogRightFrame/component.vue';
import BlogLeftFrame from '~/components/pc/molecules/BlogLeftFrame/component.vue';

export default {
  name: 'FrameSide',
  components: {
    BlogRightFrame,
    BlogLeftFrame
  }
};
</script>

<style scoped lang="scss">
@import './style.scss';
</style>
