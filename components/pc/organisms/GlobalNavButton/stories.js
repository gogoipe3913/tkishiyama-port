import GlobalNavButton from './component.vue';

export default {
  title: 'pc|organisms/GlobalNavButton',
  component: GlobalNavButton
};

export const def = () => ({
  components: { GlobalNavButton },
  render(h) {
    return <GlobalNavButton isNavDisplayed={false} />;
  }
});
