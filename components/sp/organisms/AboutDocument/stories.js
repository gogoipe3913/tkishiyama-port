import AboutDocument from './component.vue';

export default {
  title: 'sp|organisms/AboutDocument',
  component: AboutDocument
};

export const item = () => ({
  components: { AboutDocument },
  render(h) {
    return <AboutDocument />;
  }
});
