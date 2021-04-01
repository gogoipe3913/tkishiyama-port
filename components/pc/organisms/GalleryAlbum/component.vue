<template>
  <div class="GalleryAlbum">
    <div class="GalleryAlbum__bgImg">
      <img
        class="GalleryAlbum__bgImgBody"
        :src="currentImg.url"
        :alt="currentImg.alt"
      />
    </div>
    <div class="GalleryAlbum__bgMask"></div>
    <div class="GalleryAlbum__rightFrame">
      <p class="GalleryAlbum__rightFrameText">
        {{
          `${
            currentIndex >= 10
              ? currentIndex.toString()
              : '0' + currentIndex.toString()
          }
          /
          ${
            getImages().length >= 10
              ? getImages().length.toString()
              : '0' + getImages().length.toString()
          }`
        }}
      </p>
    </div>
    <ul class="GalleryAlbum__items">
      <li
        v-for="(image, index) in getImages()"
        :key="index"
        class="GalleryAlbum__item"
      >
        <img class="GalleryAlbum__itemImg" :src="image.url" :alt="image.alt" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'GalleryAlbum',
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      currentImg: {
        url: '',
        alt: ''
      },
      currentIndex: 1,
      images: [],
      windowHeight: window.innerHeight
    };
  },
  mounted() {
    setTimeout(() => {
      this.images = this.getImages();
      this.currentImg.url = this.getImages()[0].url;
      this.currentImg.alt = this.getImages()[0].alt;
    }, 100);
    window.addEventListener('scroll', this.changeCurrent);
  },
  methods: {
    setCurrentImg() {
      const currentImage = this.images[this.currentIndex];
      this.currentImg.url = currentImage.url;
      this.currentImg.alt = currentImage.alt;
    },
    getImages() {
      return Object.values(this.post).filter((item) => {
        return item.url;
      });
    },
    changeCurrent() {
      const scroll = window.scrollY;
      const FIRST_CHANGE_TITLE_POSITION = this.windowHeight;

      if (scroll < FIRST_CHANGE_TITLE_POSITION) {
        this.currentIndex = 1;
        this.currentImg.url = this.images[0].url;
        this.currentImg.alt = this.images[0].alt;
      } else {
        this.images.forEach((image, index) => {
          if (
            index > 0 &&
            // eslint-disable-next-line prettier/prettier
            FIRST_CHANGE_TITLE_POSITION + this.windowHeight * (index - 1) < scroll &&
            // eslint-disable-next-line prettier/prettier
            scroll < FIRST_CHANGE_TITLE_POSITION + this.windowHeight * index
          ) {
            this.currentIndex = index + 1;
            this.currentImg.url = this.images[index + 1].url;
            this.currentImg.alt = this.images[index + 1].alt;
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
