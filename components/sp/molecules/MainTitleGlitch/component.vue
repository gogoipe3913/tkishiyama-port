<template>
  <div class="MainTitleGlitch">
    <div class="MainTitleGlitch__textColumn">
      <p class="MainTitleGlitch__glitchChar">
        <GlitchChar char="P" />
      </p>
      <p class="MainTitleGlitch__glitchChar">
        <GlitchChar char="O" />
      </p>
      <p class="MainTitleGlitch__glitchChar">
        <GlitchChar char="R" />
      </p>
    </div>
    <div class="MainTitleGlitch__textColumn">
      <p class="MainTitleGlitch__glitchChar">
        <GlitchChar char="T" />
      </p>
      <p class="MainTitleGlitch__glitchChar">
        <GlitchChar char="F" />
      </p>
      <p class="MainTitleGlitch__glitchChar">
        <GlitchChar char="O" />
      </p>
    </div>
    <div class="MainTitleGlitch__textColumn">
      <p class="MainTitleGlitch__glitchChar">
        <GlitchChar char="L" />
      </p>
      <p class="MainTitleGlitch__glitchChar">
        <GlitchChar char="I" />
      </p>
      <p class="MainTitleGlitch__glitchChar">
        <GlitchChar char="O" />
      </p>
    </div>
  </div>
</template>

<script>
import GlitchChar from '~/components/all/atoms/GlitchChar/component';

export default {
  name: 'MainTitleGlitch',
  components: {
    GlitchChar
  }
};
</script>

<style scoped lang="scss">
@import './style.scss';
</style>
