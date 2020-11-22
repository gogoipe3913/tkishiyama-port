<template>
  <div class="Gallery">
    <GalleryViewSp :gallery-posts="posts" />
  </div>
</template>

<script>
import GalleryViewSp from '~/components/sp/templates/GalleryView/component';
export default {
  name: 'Gallery',
  components: {
    GalleryViewSp
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
  }
};
</script>

<style scoped lang="scss">
@import '~/assets/sass/index.scss';
* {
  color: #444;
}
</style>
