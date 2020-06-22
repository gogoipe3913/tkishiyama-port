import GalleryLeftFrame from './component.vue';

export default {
  title: 'sp|molecules/GalleryLeftFrame',
  component: GalleryLeftFrame
};

export const item = () => ({
  components: { GalleryLeftFrame },
  render(h) {
    return <GalleryLeftFrame />;
  }
});
