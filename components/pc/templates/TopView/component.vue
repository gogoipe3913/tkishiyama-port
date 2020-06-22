<template>
  <div class="TopView">
    <NavigationBar ref="navigationBarRef" class="TopView__navigationBar" />
    <GlobalSns class="TopView__globalSns" />
    <TopEyeCatch ref="topEyeCatchRef" class="TopView__topEyeCatch" />
    <TopScrollArrow class="TopView__topScrollArrow" />
    <AboutDocument
      ref="aboutDocumentRef"
      class="TopView__aboutDocument"
      :about-document-flags="aboutDocumentFlags"
    />
    <ContactForm
      :class="[
        isShowContactForm
          ? 'TopView__contactForm--show'
          : 'TopView__contactForm'
      ]"
    />
  </div>
</template>

<script>
import NavigationBar from '~/components/pc/organisms/NavigationBar/component.vue';
import GlobalSns from '~/components/pc/organisms/GlobalSns/component.vue';
import TopEyeCatch from '~/components/pc/organisms/TopEyeCatch/component.vue';
import TopScrollArrow from '~/components/pc/organisms/TopScrollArrow/component.vue';
import AboutDocument from '~/components/pc/organisms/AboutDocument/component.vue';
import ContactForm from '~/components/pc/organisms/ContactForm/component.vue';

export default {
  name: 'TopView',
  components: {
    NavigationBar,
    GlobalSns,
    TopEyeCatch,
    TopScrollArrow,
    AboutDocument,
    ContactForm
  },
  data() {
    return {
      fromNavToEyeCatchHeight: 0,
      aboutDocumentHeight: 0,
      aboutDocumentFlags: {
        isShowHeader: false,
        isShowText: false,
        isShowProfiel: false
      },
      isShowContactForm: false
    };
  },
  mounted() {
    setTimeout(() => {
      this.fromNavToEyeCatchHeight =
        this.$refs.navigationBarRef.$el.clientHeight +
        this.$refs.topEyeCatchRef.$el.clientHeight;
      this.aboutDocumentHeight = this.$refs.aboutDocumentRef.$el.clientHeight;
    }, 500);
    window.addEventListener('scroll', this.isHeightAboutDocument);
  },
  methods: {
    isHeightAboutDocument() {
      const scroll = window.scrollY;

      if (scroll > this.fromNavToEyeCatchHeight / 2 - 50) {
        this.aboutDocumentFlags.isShowHeader = true;
      }
      if (scroll > this.fromNavToEyeCatchHeight - 50) {
        this.aboutDocumentFlags.isShowText = true;
      }
      if (
        scroll >
        this.fromNavToEyeCatchHeight + this.aboutDocumentHeight / 2 - 50
      ) {
        this.aboutDocumentFlags.isShowProfiel = true;
      }
      if (
        scroll >
        this.fromNavToEyeCatchHeight + this.aboutDocumentHeight - 250
      ) {
        this.isShowContactForm = true;
        window.removeEventListener('scroll', this.isHeightAboutDocument);
      }
    }
  }
};
</script>

<style scoped lang="scss">
@import './style.scss';
</style>
