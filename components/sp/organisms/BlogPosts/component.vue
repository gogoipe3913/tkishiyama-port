<template>
  <div class="BlogPosts">
    <div class="BlogPosts__upper">
      <p class="BlogPosts__title">DOCUMENTS</p>
    </div>
    <div class="BlogPosts__lower"></div>
    <ul class="BlogPosts__items">
      <BlogPost
        v-for="(item, index) in items"
        :key="index"
        class="BlogPosts__item"
        :post="item"
      />
    </ul>
  </div>
</template>

<script>
import BlogPost from '~/components/sp/molecules/BlogPost/component';

export default {
  name: 'BlogPosts',
  components: {
    BlogPost
  },
  props: {
    posts: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      items: this.posts,
      lottie: []
    };
  },
  methods: {
    initLottie(lottie) {
      this.lottie = lottie;
      setTimeout(() => {
        this.playLottie();
      }, 1000);
    },
    playLottie() {
      this.lottie.play();
    }
  }
};
</script>

<style scoped lang="scss">
@import './style.scss';
</style>
