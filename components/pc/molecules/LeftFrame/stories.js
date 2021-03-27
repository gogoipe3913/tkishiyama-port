import LeftFrame from './component.vue';

export default {
  title: 'sp|molecules/LeftFrame',
  component: LeftFrame
};

export const item = () => ({
  components: { LeftFrame },
  render(h) {
    return <LeftFrame />;
  }
});
