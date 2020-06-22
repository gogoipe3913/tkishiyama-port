import GalleryAlbumView from './component';

export default {
  title: 'sp|template/GalleryAlbumView',
  component: GalleryAlbumView
};

export const item = () => ({
  component: { GalleryAlbumView },
  render(h) {
    return <GalleryAlbumView />;
  }
});
