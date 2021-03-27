<template>
  <div class="FrameBox">
    <TopFrame />
    <RightFrame />
    <LeftFrame />
    <BottomFrame />
  </div>
</template>

<script>
import TopFrame from '~/components/pc/molecules/TopFrame/component.vue';
import RightFrame from '~/components/pc/molecules/RightFrame/component.vue';
import LeftFrame from '~/components/pc/molecules/LeftFrame/component.vue';
import BottomFrame from '~/components/pc/molecules/BottomFrame/component.vue';

export default {
  name: 'FrameBox',
  components: {
    TopFrame,
    RightFrame,
    LeftFrame,
    BottomFrame
  }
};
</script>

<style scoped lang="scss">
@import './style.scss';
</style>
