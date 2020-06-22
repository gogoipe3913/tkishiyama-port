<template>
  <div class="CloseIcon">
    <nuxt-link class="CloseIcon__link" :to="linkPath">
      <div class="CloseIcon__crossLine">
        <span class="CloseIcon__crossLinePos"></span>
        <span class="CloseIcon__crossLineNega"></span>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'CloseIcon',
  props: {
    path: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      linkPath: this.path
    };
  }
};
</script>

<style scoped lang="scss">
@import './style.scss';
</style>
