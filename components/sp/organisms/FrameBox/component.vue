<template>
  <div class="FrameBox">
    <TopFrame />
    <RightFrame />
    <LeftFrame />
    <BottomFrame />
  </div>
</template>

<script>
import TopFrame from '~/components/sp/molecules/TopFrame/component.vue';
import RightFrame from '~/components/sp/molecules/RightFrame/component.vue';
import LeftFrame from '~/components/sp/molecules/LeftFrame/component.vue';
import BottomFrame from '~/components/sp/molecules/BottomFrame/component.vue';

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
