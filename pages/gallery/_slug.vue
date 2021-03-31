<template>
  <div class="Album">
    <GalleryAlbumView v-if="!isSp" :current-post="currentPost" />
    <GalleryAlbumViewSp v-if="isSp" :current-post="currentPost" />
  </div>
</template>

<script>
import isMobile from 'ismobilejs';
import { TweenMax } from 'gsap';
import GalleryAlbumView from '~/components/pc/templates/GalleryAlbumView/component';
import GalleryAlbumViewSp from '~/components/sp/templates/GalleryAlbumView/component';
export default {
  name: 'Album',
  components: {
    GalleryAlbumView,
    GalleryAlbumViewSp
  },
  async asyncData({ $prismic, params, error }) {
    try {
      const currentPost = await $prismic.api.query(
        $prismic.predicates.at('my.gallery.uid', params.slug)
      );
      return {
        currentPost: currentPost.results[0].data
      };
    } catch (e) {
      error({ statusCode: 404, message: 'Page not found' });
    }
  },
  data() {
    return {
      isSp: false
    };
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
