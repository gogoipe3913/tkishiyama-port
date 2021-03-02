<template>
  <div class="BlogArticleView">
    <CloseIcon class="BlogArticleView__closeIcon" path="/documents" />
    <BlogFrameSide class="BlogArticleView__blogFrameSide" />
    <GlobalSnsButton
      :class="[
        isVisibleSns
          ? 'BlogArticleView__GlobalSnsButton--pushed'
          : 'BlogArticleView__GlobalSnsButton'
      ]"
      :is-sns-displayed="isVisibleSns"
      @clickedSnsLine="showSnsRouter"
    />
    <SnsRouter v-if="isVisibleSns" class="BlogArticleView__snsRouter" />
    <GlobalNavButton
      :class="[
        isVisibleNav
          ? 'BlogArticleView__GlobalNavButton--pushed'
          : 'BlogArticleView__GlobalNavButton'
      ]"
      :is-nav-displayed="isVisibleNav"
      @clickedNavLine="showNavRouter"
    />
    <NavRouter v-if="isVisibleNav" class="BlogArticleView__navRouter" />
    <BlogArticle :post="post" />
  </div>
</template>

<script>
import CloseIcon from '~/components/all/atoms/CloseIcon/component';
import BlogFrameSide from '~/components/pc/organisms/BlogFrameSide/component';
import SnsRouter from '~/components/pc/organisms/SnsRouter/component';
import NavRouter from '~/components/pc/organisms/NavRouter/component';
import GlobalSnsButton from '~/components/pc/organisms/GlobalSnsButton/component';
import GlobalNavButton from '~/components/pc/organisms/GlobalNavButton/component';
import BlogArticle from '~/components/pc/organisms/BlogArticle/component';

export default {
  name: 'BlogArticleView',
  components: {
    CloseIcon,
    BlogFrameSide,
    SnsRouter,
    NavRouter,
    GlobalSnsButton,
    GlobalNavButton,
    BlogArticle
  },
  props: {
    currentPost: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      post: this.currentPost,
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
