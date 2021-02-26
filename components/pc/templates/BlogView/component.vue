<template>
  <div class="BlogView">
    <BlogFrameSide class="BlogView__blogFrameSide" />
    <BottomFrame class="BlogView__bottomFrame" />
    <GlobalSnsButton
      :class="[
        isVisibleSns
          ? 'BlogView__GlobalSnsButton--pushed'
          : 'BlogView__GlobalSnsButton'
      ]"
      :is-sns-displayed="isVisibleSns"
      @clickedSnsLine="showSnsRouter"
    />
    <SnsRouter v-if="isVisibleSns" class="BlogView__snsRouter" />
    <GlobalNavButton
      :class="[
        isVisibleNav
          ? 'BlogView__GlobalNavButton--pushed'
          : 'BlogView__GlobalNavButton'
      ]"
      :is-nav-displayed="isVisibleNav"
      @clickedNavLine="showNavRouter"
    />
    <NavRouter
      v-if="isVisibleNav"
      class="BlogView__navRouter"
      document-link=""
    />
    <BlogPosts :posts="posts" />
  </div>
</template>

<script>
import BlogFrameSide from '~/components/pc/organisms/BlogFrameSide/component';
import BottomFrame from '~/components/pc/molecules/BottomFrame/component';
import SnsRouter from '~/components/pc/organisms/SnsRouter/component.vue';
import NavRouter from '~/components/pc/organisms/NavRouter/component.vue';
import GlobalSnsButton from '~/components/pc/organisms/GlobalSnsButton/component.vue';
import GlobalNavButton from '~/components/pc/organisms/GlobalNavButton/component.vue';
import BlogPosts from '~/components/pc/organisms/BlogPosts/component';

export default {
  name: 'BlogView',
  components: {
    BlogFrameSide,
    BottomFrame,
    SnsRouter,
    NavRouter,
    GlobalSnsButton,
    GlobalNavButton,
    BlogPosts
  },
  props: {
    blogPosts: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      posts: this.blogPosts,
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
