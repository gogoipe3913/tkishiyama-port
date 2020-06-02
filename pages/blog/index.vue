<template>
  <div class="Blog">
    <BlogViewSp :blog-posts="posts" />
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
import BlogViewSp from '~/components/sp/templates/BlogView/component';

export default {
  name: 'Blog',
  components: {
    BlogViewSp
  },
  computed: {
    ...mapState(['posts']),
    ...mapGetters(['setEyeCatch', 'draftChip', 'linkTo'])
  }
};
</script>

<style scoped lang="scss">
@import '~/assets/sass/index.scss';
* {
  color: #444;
}
</style>
