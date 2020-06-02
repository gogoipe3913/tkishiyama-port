import BlogLeftFrame from './component.vue';

export default {
  title: 'sp|molecules/BlogLeftFrame',
  component: BlogLeftFrame
};

export const item = () => ({
  components: { BlogLeftFrame },
  render(h) {
    return <BlogLeftFrame />;
  }
});
