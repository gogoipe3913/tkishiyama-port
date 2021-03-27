<template>
  <li class="GalleryPost">
    <div class="GalleryPost__item">
      <button class="GalleryPost__itemButton hoverable">
        <nuxt-link
          class="GalleryPost__itemButtonLink"
          tag="img"
          :src="img"
          :to="{
            name: 'gallery-slug',
            params: { slug: item.uid }
          }"
        >
        </nuxt-link>
      </button>
    </div>
  </li>
</template>

<script>
export default {
  name: 'GalleryPost',
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      item: this.post,
      img: this.post.data.image.url
    };
  }
};
</script>

<style scoped lang="scss">
@import './style.scss';
</style>
