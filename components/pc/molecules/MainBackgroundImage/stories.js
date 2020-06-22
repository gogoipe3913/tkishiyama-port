import MainBackgroundImage from './component';

export default {
  title: 'pc|molecules/MainBackgroundImage',
  component: MainBackgroundImage
};

export const item = () => ({
  components: { MainBackgroundImage },
  render(h) {
    return <MainBackgroundImage />;
  }
});
