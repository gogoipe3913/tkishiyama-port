import BlogRightFrame from './component.vue';

export default {
  title: 'sp|molecules/BlogRightFrame',
  component: BlogRightFrame
};

export const item = () => ({
  components: { BlogRightFrame },
  render(h) {
    return <BlogRightFrame />;
  }
});
