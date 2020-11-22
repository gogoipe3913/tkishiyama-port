import FrameBox from './component.vue';

export default {
  title: 'sp|organisms/FrameBox',
  component: FrameBox
};

export const item = () => ({
  components: { FrameBox },
  render(h) {
    return <FrameBox totalScroll="1800" nowScroll="444" />;
  }
});
