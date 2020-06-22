import RightFrame from './component.vue';

export default {
  title: 'sp|molecules/RightFrame',
  component: RightFrame
};

export const item = () => ({
  components: { RightFrame },
  render(h) {
    return <RightFrame />;
  }
});
