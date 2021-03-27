<template>
  <div class="Gallery">
    <GalleryView v-if="!isSp" :gallery-posts="posts" />
    <GalleryViewSp v-if="isSp" :gallery-posts="posts" />
  </div>
</template>

<script>
import isMobile from 'ismobilejs';
import { TweenMax } from 'gsap';
import GalleryView from '~/components/pc/templates/GalleryView/component';
import GalleryViewSp from '~/components/sp/templates/GalleryView/component';
export default {
  name: 'Gallery',
  data() {
    return {
      isSp: false
    };
  },
  components: {
    GalleryView,
    GalleryViewSp
  },
  created() {
    // eslint-disable-next-line nuxt/no-globals-in-created
    this.isSp = isMobile(window.navigator).phone;
  },
  async asyncData({ $prismic, error }) {
    try {
      const galleryPosts = await $prismic.api.query(
        $prismic.predicates.at('document.type', 'gallery'),
        { orderings: '[my.gallery.release_date desc]' }
      );
      return {
        posts: galleryPosts.results
      };
    } catch (e) {
      error({ statusCode: 404, message: 'Page not found' });
    }
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
