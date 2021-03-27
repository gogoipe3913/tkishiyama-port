<template>
  <div class="GalleryView">
    <BlogFrameSide class="GalleryView__blogFrameSide" />
    <GlobalSnsButton
      :class="[
        isVisibleSns
          ? 'GalleryView__GlobalSnsButton--pushed'
          : 'GalleryView__GlobalSnsButton'
      ]"
      :is-sns-displayed="isVisibleSns"
      @clickedSnsLine="showSnsRouter"
    />
    <SnsRouter v-if="isVisibleSns" class="GalleryView__snsRouter" />
    <GlobalNavButton
      :class="[
        isVisibleNav
          ? 'GalleryView__GlobalNavButton--pushed'
          : 'GalleryView__GlobalNavButton'
      ]"
      :is-nav-displayed="isVisibleNav"
      @clickedNavLine="showNavRouter"
    />
    <NavRouter v-if="isVisibleNav" class="GalleryView__navRouter" />
    <GalleryPosts class="GalleryView__galleryPosts" :posts="posts" />
  </div>
</template>

<script>
import BlogFrameSide from '~/components/pc/organisms/BlogFrameSide/component';
import SnsRouter from '~/components/pc/organisms/SnsRouter/component';
import NavRouter from '~/components/pc/organisms/NavRouter/component';
import GlobalSnsButton from '~/components/pc/organisms/GlobalSnsButton/component';
import GlobalNavButton from '~/components/pc/organisms/GlobalNavButton/component';
import GalleryPosts from '~/components/pc/organisms/GalleryPosts/component';

export default {
  name: 'GalleryView',
  components: {
    BlogFrameSide,
    SnsRouter,
    NavRouter,
    GlobalSnsButton,
    GlobalNavButton,
    GalleryPosts
  },
  props: {
    galleryPosts: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      posts: this.galleryPosts,
      isVisibleSns: false,
      isVisibleNav: false
    };
  },
  methods: {
    showSnsRouter(isRotated) {
      this.isVisibleSns = isRotated;
      return this.isVisibleSns;
    },
    showNavRouter(isRotated) {
      this.isVisibleNav = isRotated;
      return this.isVisibleNav;
    }
  }
};
</script>

<style scoped lang="scss">
@import './style.scss';
</style>
