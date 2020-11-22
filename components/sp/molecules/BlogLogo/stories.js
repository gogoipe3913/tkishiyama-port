import BlogLogo from './component';

export default {
  title: 'sp|molecules/BlogLogo',
  component: BlogLogo
};

export const item = () => ({
  components: { BlogLogo },
  render(h) {
    return <BlogLogo />;
  }
});
