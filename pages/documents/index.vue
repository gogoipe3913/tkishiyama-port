<template>
  <div class="Blog">
    <BlogView v-if="!isSp" :blog-posts="posts" />
    <BlogViewSp v-if="isSp" :blog-posts="posts" />
  </div>
</template>

<script>
import isMobile from 'ismobilejs';
import { TweenMax } from 'gsap';
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
  },
  mounted() {
    const hoverables = document.querySelectorAll('.hoverable');
    for (const hoverable of hoverables) {
      hoverable.addEventListener('mouseenter', this.onMouseHover);
      hoverable.addEventListener('mouseleave', this.onMouseHoverOut);
      hoverable.addEventListener('click', this.onMouseHoverOut);
    }
  },
  methods: {
    onMouseHover(e) {
      const bigBall = document.querySelector('.cursor__ball--big');

      TweenMax.to(bigBall, 0.3, {
        scale: 3
      });
    },
    onMouseHoverOut() {
      const bigBall = document.querySelector('.cursor__ball--big');

      TweenMax.to(bigBall, 0.3, {
        scale: 1
      });
    }
  }
};
</script>

<style scoped lang="scss">
@import '~/assets/sass/index.scss';
* {
  color: #444;
}
</style>
