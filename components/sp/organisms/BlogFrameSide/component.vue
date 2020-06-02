<template>
  <div class="BlogFrameSide">
    <BlogRightFrame />
    <BlogLeftFrame />
  </div>
</template>

<script>
import BlogRightFrame from '~/components/sp/molecules/BlogRightFrame/component.vue';
import BlogLeftFrame from '~/components/sp/molecules/BlogLeftFrame/component.vue';

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
