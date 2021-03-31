<template>
  <div class="GalleryAlbumView">
    <GalleryLeftFrame class="GalleryAlbumView__leftFrame" />
    <GalleryAlbum :post="post" />
  </div>
</template>

<script>
import GalleryLeftFrame from '~/components/pc/molecules/GalleryLeftFrame/component';
import GalleryAlbum from '~/components/pc/organisms/GalleryAlbum/component';
export default {
  name: 'GalleryAlbumView',
  components: {
    GalleryLeftFrame,
    GalleryAlbum
  },
  props: {
    currentPost: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      post: this.currentPost
    };
  }
};
</script>

<style scoped lang="scss">
@import './style.scss';
</style>
