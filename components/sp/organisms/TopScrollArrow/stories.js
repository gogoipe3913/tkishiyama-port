import TopScrollArrow from './component.vue';

export default {
  title: 'sp|organisms/TopScrollArrow',
  component: TopScrollArrow
};

export const item = () => ({
  components: { TopScrollArrow },
  render(h) {
    return <TopScrollArrow />;
  }
});
