import TopFrame from './component.vue';

export default {
  title: 'sp|molecules/TopFrame',
  component: TopFrame
};

export const item = () => ({
  components: { TopFrame },
  render(h) {
    return <TopFrame />;
  }
});
