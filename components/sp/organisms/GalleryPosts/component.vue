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
        class="GalleryPosts__item"
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

      if (scroll < this.windowHeight / 2 + this.postHeights[1]) {
        this.title = this.items[0].data.title[0].text;
      } else if (
        scroll >= this.windowHeight / 2 + this.postHeights[1] &&
        scroll < this.windowHeight + this.postHeights[1]
      ) {
        this.title = this.items[1].data.title[0].text;
      } else if (
        scroll >= this.windowHeight + this.postHeights[1] &&
        scroll < this.windowHeight + this.postHeights[1] + this.postHeights[1]
      ) {
        this.title = this.items[2].data.title[0].text;
      } else if (
        scroll >=
          this.windowHeight + this.postHeights[1] + this.postHeights[2] &&
        scroll <
          this.windowHeight +
            this.postHeights[1] +
            this.postHeights[2] +
            this.postHeights[3]
      ) {
        this.title = this.items[3].data.title[0].text;
      } else if (
        scroll >=
          this.windowHeight +
            this.postHeights[1] +
            this.postHeights[2] +
            this.postHeights[3] &&
        scroll <
          this.windowHeight +
            this.postHeights[1] +
            this.postHeights[2] +
            this.postHeights[3] +
            this.postHeights[4]
      ) {
        this.title = this.items[4].data.title[0].text;
      }
    }
  }
};
</script>

<style scoped lang="scss">
@import './style.scss';
</style>
