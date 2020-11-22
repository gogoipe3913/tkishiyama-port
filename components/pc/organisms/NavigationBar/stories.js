import NavigationBar from './component.vue';

export default {
  title: 'pc|organisms/NavigationBar',
  component: { NavigationBar }
};

export const item = () => ({
  components: { NavigationBar },
  render(h) {
    return <NavigationBar />;
  }
});
