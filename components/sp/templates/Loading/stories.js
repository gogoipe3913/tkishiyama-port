import Loading from './component.vue';

export default {
  title: 'sp|templates/Loading',
  component: Loading
};

export const item = () => ({
  components: { Loading },
  render(h) {
    return <Loading />;
  }
});
