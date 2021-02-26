<template>
  <div class="MainTitleGlitch">
    <div class="MainTitleGlitch__textColumn">
      <p class="MainTitleGlitch__glitchChar">
        <GlitchChar char="P" />
      </p>
      <p class="MainTitleGlitch__glitchChar">
        <GlitchChar char="L" />
      </p>
      <p class="MainTitleGlitch__glitchChar">
        <GlitchChar char="A" />
      </p>
      <p class="MainTitleGlitch__glitchChar">
        <GlitchChar char="Y" />
      </p>
    </div>
    <div class="MainTitleGlitch__textColumn">
      <p class="MainTitleGlitch__glitchChar">
        <GlitchChar char="G" />
      </p>
      <p class="MainTitleGlitch__glitchChar">
        <GlitchChar char="R" />
      </p>
      <p class="MainTitleGlitch__glitchChar">
        <GlitchChar char="O" />
      </p>
      <p class="MainTitleGlitch__glitchChar">
        <GlitchChar char=" " />
      </p>
    </div>
    <div class="MainTitleGlitch__textColumn">
      <p class="MainTitleGlitch__glitchChar">
        <GlitchChar char=" " />
      </p>
      <p class="MainTitleGlitch__glitchChar">
        <GlitchChar char=" " />
      </p>
      <p class="MainTitleGlitch__glitchChar">
        <GlitchChar char="U" />
      </p>
      <p class="MainTitleGlitch__glitchChar">
        <GlitchChar char="N" />
      </p>
    </div>
    <div class="MainTitleGlitch__textColumn">
      <p class="MainTitleGlitch__glitchChar">
        <GlitchChar char=" " />
      </p>
      <p class="MainTitleGlitch__glitchChar">
        <GlitchChar char=" " />
      </p>
      <p class="MainTitleGlitch__glitchChar">
        <GlitchChar char=" " />
      </p>
      <p class="MainTitleGlitch__glitchChar">
        <GlitchChar char="D" />
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
