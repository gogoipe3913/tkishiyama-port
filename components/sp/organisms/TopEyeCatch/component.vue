<template>
  <div class="TopEyeCatch">
    <MainBackgroundImage class="TopEyeCatch__mainBackgroundImage" />
    <MainTitleGlitch class="TopEyeCatch__mainTitleGlitch" />
    <NameLogo class="TopEyeCatch__nameLogo" @nameLogoCreated="initLottie" />
  </div>
</template>

<script>
import MainBackgroundImage from '~/components/sp/molecules/MainBackgroundImage/component.vue';
import MainTitleGlitch from '~/components/sp/molecules/MainTitleGlitch/component.vue';
import NameLogo from '~/components/sp/molecules/NameLogo/component.vue';

export default {
  name: 'TopEyeCatch',
  components: {
    MainBackgroundImage,
    MainTitleGlitch,
    NameLogo
  },
  data() {
    return {
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
