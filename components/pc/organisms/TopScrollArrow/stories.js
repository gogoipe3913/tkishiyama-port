import TopScrollArrow from './component.vue';

export default {
  title: 'pc|organisms/TopScrollArrow',
  component: TopScrollArrow
};

export const item = () => ({
  components: { TopScrollArrow },
  render(h) {
    return <TopScrollArrow />;
  }
});
