import MainTitleGlitch from './component';

export default {
  title: 'sp|molecules/MainTitleGlitch',
  component: MainTitleGlitch
};

export const item = () => ({
  components: { MainTitleGlitch },
  render(h) {
    return <MainTitleGlitch />;
  }
});
