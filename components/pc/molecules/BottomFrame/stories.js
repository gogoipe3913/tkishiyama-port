import BottomFrame from './component.vue';

export default {
  title: 'sp|molecules/BottomFrame',
  component: BottomFrame
};

export const item = () => ({
  components: { BottomFrame },
  render(h) {
    return <BottomFrame totalScroll="1800" nowScroll="444" />;
  }
});
