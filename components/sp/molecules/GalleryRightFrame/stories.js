import GalleryRightFrame from './component.vue';

export default {
  title: 'sp|molecules/GalleryRightFrame',
  component: GalleryRightFrame
};

export const item = () => ({
  components: { GalleryRightFrame },
  render(h) {
    return <GalleryRightFrame />;
  }
});
