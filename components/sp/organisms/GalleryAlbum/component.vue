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
          `0${(getCurrentIndex('ドム') + 1).toString()}
          /
          0${getImages().length.toString()}`
        }}
      </p>
    </div>
    <div id="hiddenScroll" class="GalleryAlbum__itemsMask">
      <ul class="GalleryAlbum__items">
        <li
          v-for="(image, index) in getImages()"
          :key="index"
          :ref="`galleryAlbumItemRef${index.toString()}`"
          class="GalleryAlbum__item"
        >
          <img
            class="GalleryAlbum__itemImg"
            :src="image.url"
            :alt="image.alt"
          />
        </li>
      </ul>
    </div>
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
      currentScrollY: 0,
      // とりあえず1で初期化
      postHeight: 1,
      currentImg: {
        url: '',
        alt: ''
      },
      images: [],
      hiddenScroll: ''
    };
  },
  computed: {},
  watch: {},
  mounted() {
    setTimeout(() => {
      this.postHeight = this.$refs.galleryAlbumItemRef0[0].clientHeight;
      this.images = this.getImages();
      this.currentImg.url = this.getImages()[this.getCurrentIndex()].url;
      this.currentImg.alt = this.getImages()[this.getCurrentIndex()].alt;
    }, 100);
    // window.addEventListener('scroll', this.getCurrentIndex);
    window.addEventListener(
      'load',
      function(event) {
        let touchStartY;
        let touchMoveY;

        // 開始時
        window.addEventListener(
          'touchstart',
          function(event) {
            event.preventDefault();
            // 座標の取得
            touchStartY = event.touches[0].pageY;
          },
          false
        );

        // 移動時
        window.addEventListener(
          'touchmove',
          function(event) {
            event.preventDefault();
            // 座標の取得
            touchMoveY = event.changedTouches[0].pageY;
          },
          false
        );

        // 終了時
        window.addEventListener(
          'touchend',
          function(event) {
            // 移動量の判定
            if (touchStartY > touchMoveY) {
              if (touchStartY > touchMoveY + 50) {
                // 右から左に指が移動した場合
              }
            } else if (touchStartY < touchMoveY) {
              if (touchStartY + 50 < touchMoveY) {
                // 左から右に指が移動した場合
              }
            }
          },
          false
        );
      },
      false
    );
  },
  methods: {
    setCurrentImg() {
      this.currentImg.url = this.getImages()[this.getCurrentIndex()].url;
      this.currentImg.alt = this.getImages()[this.getCurrentIndex()].alt;
    },
    getImages() {
      return Object.values(this.post).filter((item) => {
        return item.url;
      });
    },
    getCurrentIndex() {
      const currentIndex =
        Math.floor(this.currentScrollY / this.postHeight) === Infinity
          ? null
          : Math.floor(this.currentScrollY / this.postHeight);
      return currentIndex || 0;
    },
    scrollToNextItem() {
      const hiddenScroll = document.getElementById('hiddenScroll');
      // const scroll = hiddenScroll.scrollTop;
      let touchStartY;
      let touchMoveY;

      // 開始時
      hiddenScroll.addEventListener(
        'touchstart',
        function(event) {
          event.preventDefault();
          touchStartY = event.touches[0].pageY;
        },
        false
      );

      // 移動時
      hiddenScroll.addEventListener(
        'touchmove',
        function(event) {
          event.preventDefault();
          touchMoveY = event.changedTouches[0].pageY;
        },
        false
      );

      // 終了時
      hiddenScroll.addEventListener(
        'touchend',
        this.scrollAction(hiddenScroll, touchStartY, touchMoveY),
        false
      );
    },
    scrollAction(hiddenScroll, startY, movedY) {
      if (startY < movedY) {
        if (startY < movedY + 50) {
          // 上から下に指が移動した場合
          clearTimeout(
            setTimeout(hiddenScroll.scrollBy(this.postHeight, 5), 500)
          );
          this.setCurrentImg();
        }
      } else if (startY > movedY) {
        if (startY + 50 > movedY) {
          // 下から上に指が移動した場合
        }
      }
    }
  }
};
</script>

<style scoped lang="scss">
@import './style.scss';
</style>
