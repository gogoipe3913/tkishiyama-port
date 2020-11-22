<template>
  <div class="Album">
    <GalleryAlbumView :current-post="currentPost" />
  </div>
</template>

<script>
import GalleryAlbumView from '~/components/sp/templates/GalleryAlbumView/component';
export default {
  name: 'Album',
  components: {
    GalleryAlbumView
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
  }
};
</script>

<style scoped lang="scss"></style>
