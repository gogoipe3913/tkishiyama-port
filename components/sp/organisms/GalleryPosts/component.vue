<template>
  <div class="GalleryPosts">
    <div class="GalleryPosts__title">
      <p class="GalleryPosts__titleBody">{{ title }}</p>
    </div>
    <ul class="GalleryPosts__items">
      <GalleryPost
        v-for="(item, index) in items"
        :key="index"
        :ref="'galleryPostRef' + index"
        :post="item"
      />
    </ul>
  </div>
</template>

<script>
import GalleryPost from '~/components/sp/molecules/GalleryPost/component';

export default {
  name: 'GalleryPosts',
  components: {
    GalleryPost
  },
  props: {
    posts: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      windowHeight: window.innerHeight,
      items: this.posts,
      title: this.posts[0].data.title[0].text,
      postHeights: []
    };
  },
  mounted() {
    setTimeout(() => {
      this.posts.forEach((post, index) => {
        // eslint-disable-next-line prettier/prettier
        this.postHeights[index] = this.$refs[`galleryPostRef${index}`][0].$el.clientHeight;
      });
    }, 500);
    window.addEventListener('scroll', this.nowTitle);
  },
  methods: {
    nowTitle() {
      const scroll = window.scrollY;
      const FIRST_CHANGE_TITLE_POSITION = this.windowHeight * 1.5;

      if (scroll < FIRST_CHANGE_TITLE_POSITION) {
        this.title = this.items[0].data.title[0].text;
      } else {
        this.posts.forEach((post, index) => {
          if (
            // 一つ目までは別の処理
            index > 0 &&
            // eslint-disable-next-line prettier/prettier
            FIRST_CHANGE_TITLE_POSITION + this.windowHeight * (index - 1)  <= scroll &&
            // eslint-disable-next-line prettier/prettier
            scroll < FIRST_CHANGE_TITLE_POSITION + this.windowHeight * index
          ) {
            this.title = this.items[index].data.title[0].text;
          }
        });
      }
    }
  }
};
</script>

<style scoped lang="scss">
@import './style.scss';
</style>
