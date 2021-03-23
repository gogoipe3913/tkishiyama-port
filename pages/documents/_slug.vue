<template>
  <div class="Article">
    <BlogArticleView v-if="!isSp" :current-post="currentPost" />
    <BlogArticleViewSp v-if="isSp" :current-post="currentPost" />
  </div>
</template>

<script>
import isMobile from 'ismobilejs';
import { TweenMax } from 'gsap';
import { mapGetters } from 'vuex';
import BlogArticleView from '~/components/pc/templates/BlogArticleView/component';
import BlogArticleViewSp from '~/components/sp/templates/BlogArticleView/component';

export default {
  name: 'Article',
  components: {
    BlogArticleView,
    BlogArticleViewSp
  },
  async asyncData({ payload, store, params, error }) {
    const currentPost =
      payload ||
      (await store.state.posts.find(
        (post) => post.fields.slug === params.slug
      ));

    if (currentPost) {
      return { currentPost };
    } else {
      return error({ statusCode: 400 });
    }
  },
  computed: {
    ...mapGetters(['setEyeCatch'])
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

<style scoped lang="scss"></style>
