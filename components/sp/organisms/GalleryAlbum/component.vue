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
    <div class="GalleryAlbum__itemsMask">
      <Hooper
        class="GalleryAlbum__items"
        :settings="hooperSettings"
        @slide="slide"
      >
        <Slide
          v-for="(image, index) in getImages()"
          :key="index"
          class="GalleryAlbum__item"
        >
          <img
            class="GalleryAlbum__itemImg"
            :src="image.url"
            :alt="image.alt"
          />
        </Slide>
      </Hooper>
    </div>
  </div>
</template>

<script>
import { Hooper, Slide } from 'hooper';
import 'hooper/dist/hooper.css';

export default {
  name: 'GalleryAlbum',
  components: {
    Hooper,
    Slide
  },
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
      currentIndex: 0,
      images: [],
      hooperSettings: {
        itemsToShow: 1,
        itemsToSlide: 1,
        infiniteScroll: true,
        vertical: true,
        transition: 400,
        autoPlay: false
      }
    };
  },
  mounted() {
    setTimeout(() => {
      this.images = this.getImages();
      this.currentImg.url = this.getImages()[0].url;
      this.currentImg.alt = this.getImages()[0].alt;
    }, 100);
  },
  methods: {
    slide({ currentSlide }) {
      currentSlide += 1;
      currentSlide = currentSlide === 0 ? this.images.length : currentSlide;
      this.currentIndex =
        currentSlide > this.images.length
          ? currentSlide - this.images.length
          : currentSlide;
      this.setCurrentImg();
    },
    setCurrentImg() {
      const currentImage = this.images[this.currentIndex - 1];
      this.currentImg.url = currentImage.url;
      this.currentImg.alt = currentImage.alt;
    },
    getImages() {
      return Object.values(this.post).filter((item) => {
        return item.url;
      });
    }
  }
};
</script>

<style scoped lang="scss">
@import './style.scss';
</style>
