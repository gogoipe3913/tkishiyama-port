import MainTitleGlitch from './component';

export default {
  title: 'pc|molecules/MainTitleGlitch',
  component: MainTitleGlitch
};

export const item = () => ({
  components: { MainTitleGlitch },
  render(h) {
    return <MainTitleGlitch />;
  }
});
