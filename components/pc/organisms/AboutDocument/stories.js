import AboutDocument from './component.vue';

export default {
  title: 'pc|organisms/AboutDocument',
  component: AboutDocument
};

export const item = () => ({
  components: { AboutDocument },
  render(h) {
    return <AboutDocument />;
  }
});
