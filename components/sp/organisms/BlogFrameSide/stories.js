import BlogFrameSide from './component.vue';

export default {
  title: 'sp|organisms/BlogFrameSide',
  component: BlogFrameSide
};

export const item = () => ({
  components: { BlogFrameSide },
  render(h) {
    return <BlogFrameSide totalScroll="1800" nowScroll="444" />;
  }
});
