import TopEyeCatch from './component';

export default {
  title: 'pc|organisms/TopEyeCatch',
  component: TopEyeCatch
};

export const item = () => ({
  components: { TopEyeCatch },
  render(h) {
    return <TopEyeCatch />;
  }
});
