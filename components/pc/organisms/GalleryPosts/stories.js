import GalleryPosts from './component';

export default {
  title: 'pc|organisms/GalleryPosts',
  component: GalleryPosts
};

export const item = () => ({
  component: { GalleryPosts },
  render(h) {
    const items = [
      {
        title: 'title for stories1',
        uid: 'slug-for-storybook',
        heroImage:
          'https://images.ctfassets.net/qx3vqxu71ky0/4lcRrztErzC1SYe5qjtVQA/8c379645427af1a2fedd29cf169c4e8e/DSCF6215.JPG'
      },
      {
        title: 'title for stories2',
        uid: 'slug-for-storybook',
        heroImage:
          'https://images.ctfassets.net/qx3vqxu71ky0/4lcRrztErzC1SYe5qjtVQA/8c379645427af1a2fedd29cf169c4e8e/DSCF6215.JPG'
      },
      {
        title: 'title for stories3',
        uid: 'slug-for-storybook',
        heroImage:
          'https://images.ctfassets.net/qx3vqxu71ky0/4lcRrztErzC1SYe5qjtVQA/8c379645427af1a2fedd29cf169c4e8e/DSCF6215.JPG'
      },
      {
        title: 'title for stories4',
        uid: 'slug-for-storybook',
        heroImage:
          'https://images.ctfassets.net/qx3vqxu71ky0/4lcRrztErzC1SYe5qjtVQA/8c379645427af1a2fedd29cf169c4e8e/DSCF6215.JPG'
      },
      {
        title: 'title for stories5',
        uid: 'slug-for-storybook',
        heroImage:
          'https://images.ctfassets.net/qx3vqxu71ky0/4lcRrztErzC1SYe5qjtVQA/8c379645427af1a2fedd29cf169c4e8e/DSCF6215.JPG'
      }
    ];

    return <GalleryPosts posts={items} />;
  }
});
