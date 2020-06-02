import Loading from './component.vue';

export default {
  title: 'pc|templates/Loading',
  component: Loading
};

export const item = () => ({
  components: { Loading },
  render(h) {
    return <Loading />;
  }
});
