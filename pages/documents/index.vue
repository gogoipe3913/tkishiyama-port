<template>
  <div class="Blog">
    <BlogView v-if="!isSp" :blog-posts="posts" />
    <BlogViewSp v-if="isSp" :blog-posts="posts" />
  </div>
</template>

<script>
import isMobile from 'ismobilejs';
import { mapState, mapGetters } from 'vuex';
import BlogView from '~/components/pc/templates/BlogView/component';
import BlogViewSp from '~/components/sp/templates/BlogView/component';

export default {
  name: 'Blog',
  components: {
    BlogView,
    BlogViewSp
  },
  computed: {
    ...mapState(['posts']),
    ...mapGetters(['setEyeCatch', 'draftChip', 'linkTo'])
  },
  created() {
    // eslint-disable-next-line nuxt/no-globals-in-created
    this.isSp = isMobile(window.navigator).phone;
  }
};
</script>

<style scoped lang="scss">
@import '~/assets/sass/index.scss';
* {
  color: #444;
}
</style>
