import GlobalSnsButton from './component.vue';

export default {
  title: 'sp|organisms/GlobalSnsButton',
  component: GlobalSnsButton
};

export const item = () => ({
  components: { GlobalSnsButton },
  render(h) {
    return <GlobalSnsButton isSnsDisplayed={false} />;
  }
});
