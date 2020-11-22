import NavigationBar from './component.vue';

export default {
  title: 'sp|organisms/NavigationBar',
  component: { NavigationBar }
};

export const item = () => ({
  components: { NavigationBar },
  render(h) {
    return <NavigationBar />;
  }
});
