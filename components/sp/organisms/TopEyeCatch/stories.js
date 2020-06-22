import TopEyeCatch from './component';

export default {
  title: 'sp|organisms/TopEyeCatch',
  component: TopEyeCatch
};

export const item = () => ({
  components: { TopEyeCatch },
  render(h) {
    return <TopEyeCatch />;
  }
});
