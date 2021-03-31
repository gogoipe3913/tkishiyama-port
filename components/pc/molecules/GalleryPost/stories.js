import GalleryPost from './component';

export default {
  title: 'sp|molecules/GalleryPost',
  component: { GalleryPost }
};

export const item = () => ({
  components: { GalleryPost },
  render(h) {
    const item = {
      uid: 'slug-for-storybook',
      heroImage:
        'https://images.ctfassets.net/qx3vqxu71ky0/4lcRrztErzC1SYe5qjtVQA/8c379645427af1a2fedd29cf169c4e8e/DSCF6215.JPG'
    };
    return <GalleryPost post={item} />;
  }
});
