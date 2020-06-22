import GlobalSns from './component.vue';

export default {
  title: 'pc|organisms/GlobalSns',
  component: GlobalSns
};

export const item = () => ({
  components: { GlobalSns },
  render(h) {
    return <GlobalSns />;
  }
});
