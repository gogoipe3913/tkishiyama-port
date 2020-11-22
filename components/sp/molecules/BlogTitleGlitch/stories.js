import BlogTitleGlitch from './component';

export default {
  title: 'sp|molecules/BlogTitleGlitch',
  component: BlogTitleGlitch
};

export const item = () => ({
  components: { BlogTitleGlitch },
  render(h) {
    return <BlogTitleGlitch />;
  }
});
