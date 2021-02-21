<template>
  <div class="TopView">
    <FrameBox class="TopView__frameBox" />
    <GlobalSnsButton
      :class="[
        isVisibleSns
          ? 'TopView__GlobalSnsButton--pushed'
          : 'TopView__GlobalSnsButton'
      ]"
      :is-sns-displayed="isVisibleSns"
      @clickedSnsLine="showSnsRouter"
    />
    <SnsRouter v-if="isVisibleSns" class="TopView__snsRouter" />
    <GlobalNavButton
      :class="
        isVisibleNav
          ? 'TopView__GlobalNavButton--pushed'
          : 'TopView__GlobalNavButton'
      "
      :is-nav-displayed="isVisibleNav"
      @clickedNavLine="showNavRouter"
    />
    <NavRouter v-if="isVisibleNav" class="TopView__navRouter" top-link="" />
    <TopEyeCatch ref="topEyeCatchRef" />
    <TopScrollArrow class="TopView__topScrollArrow" @click="showSnsRouter" />
    <AboutDocument
      ref="aboutDocumentRef"
      class="TopView__aboutDocument"
      :about-document-flags="aboutDocumentFlags"
    />
    <ContactForm
      :class="
        isShowContactForm
          ? 'TopView__contactForm--show'
          : 'TopView__contactForm'
      "
    />
  </div>
</template>

<script>
import FrameBox from '~/components/sp/organisms/FrameBox/component.vue';
import SnsRouter from '~/components/sp/organisms/SnsRouter/component.vue';
import NavRouter from '~/components/sp/organisms/NavRouter/component.vue';
import TopEyeCatch from '~/components/sp/organisms/TopEyeCatch/component.vue';
import TopScrollArrow from '~/components/sp/organisms/TopScrollArrow/component.vue';
import AboutDocument from '~/components/sp/organisms/AboutDocument/component.vue';
import ContactForm from '~/components/sp/organisms/ContactForm/component.vue';
import GlobalSnsButton from '~/components/sp/organisms/GlobalSnsButton/component.vue';
import GlobalNavButton from '~/components/sp/organisms/GlobalNavButton/component.vue';

export default {
  name: 'TopView',
  components: {
    // NavigationBar,
    TopEyeCatch,
    TopScrollArrow,
    AboutDocument,
    ContactForm,
    FrameBox,
    SnsRouter,
    NavRouter,
    GlobalSnsButton,
    GlobalNavButton
  },
  data() {
    return {
      eyeCatchHeight: 0,
      aboutDocumentHeight: 0,
      aboutDocumentFlags: {
        isShowHeader: false,
        isShowTextUpper: false,
        isShowTextLower: false,
        isShowProfiel: false
      },
      isShowContactForm: false,
      isVisibleSns: false,
      isVisibleNav: false
    };
  },
  mounted() {
    setTimeout(() => {
      this.eyeCatchHeight = this.$refs.topEyeCatchRef.$el.clientHeight;
      this.aboutDocumentHeight = this.$refs.aboutDocumentRef.$el.clientHeight;
    }, 500);
    window.addEventListener('scroll', this.isHeightAboutDocument);
  },
  methods: {
    isHeightAboutDocument() {
      const scroll = window.scrollY;

      if (scroll > this.eyeCatchHeight / 3) {
        this.aboutDocumentFlags.isShowHeader = true;
      }
      if (scroll > this.eyeCatchHeight - 200) {
        this.aboutDocumentFlags.isShowTextUpper = true;
      }
      if (scroll > this.eyeCatchHeight + 200) {
        this.aboutDocumentFlags.isShowTextLower = true;
      }
      if (scroll > this.eyeCatchHeight + this.aboutDocumentHeight / 2 - 100) {
        this.aboutDocumentFlags.isShowProfiel = true;
      }
      if (scroll > this.eyeCatchHeight + this.aboutDocumentHeight - 150) {
        this.isShowContactForm = true;
        window.removeEventListener('scroll', this.isHeightAboutDocument);
      }
    },
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
