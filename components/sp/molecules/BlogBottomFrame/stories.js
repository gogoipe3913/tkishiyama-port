import BlogBottomFrame from './component.vue';

export default {
  title: 'sp|molecules/BlogBottomFrame',
  component: BlogBottomFrame
};

export const item = () => ({
  components: { BlogBottomFrame },
  render(h) {
    return <BlogBottomFrame totalScroll="1800" nowScroll="444" />;
  }
});
