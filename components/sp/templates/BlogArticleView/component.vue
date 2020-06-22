<template>
  <div class="BlogArticleView">
    <CloseIcon class="BlogArticleView__closeIcon" path="/blog" />
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
import BlogFrameSide from '~/components/sp/organisms/BlogFrameSide/component';
import SnsRouter from '~/components/sp/organisms/SnsRouter/component.vue';
import NavRouter from '~/components/sp/organisms/NavRouter/component.vue';
import GlobalSnsButton from '~/components/sp/organisms/GlobalSnsButton/component.vue';
import GlobalNavButton from '~/components/sp/organisms/GlobalNavButton/component.vue';
import BlogArticle from '~/components/sp/organisms/BlogArticle/component';
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
