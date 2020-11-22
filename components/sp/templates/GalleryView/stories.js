import GalleryView from './component';

export default {
  title: 'sp|templates/GalleryView',
  component: GalleryView
};

export const item = () => ({
  component: { GalleryView },
  render(h) {
    const items = [
      {
        fields: {
          title: 'title for stories1',
          slug: 'slug-for-storybook',
          heroImage:
            'https://images.ctfassets.net/qx3vqxu71ky0/4lcRrztErzC1SYe5qjtVQA/8c379645427af1a2fedd29cf169c4e8e/DSCF6215.JPG'
        }
      },
      {
        fields: {
          title: 'title for stories2',
          slug: 'slug-for-storybook',
          heroImage:
            'https://images.ctfassets.net/qx3vqxu71ky0/4lcRrztErzC1SYe5qjtVQA/8c379645427af1a2fedd29cf169c4e8e/DSCF6215.JPG'
        }
      },
      {
        fields: {
          title: 'title for stories3',
          slug: 'slug-for-storybook',
          heroImage:
            'https://images.ctfassets.net/qx3vqxu71ky0/4lcRrztErzC1SYe5qjtVQA/8c379645427af1a2fedd29cf169c4e8e/DSCF6215.JPG'
        }
      },
      {
        fields: {
          title: 'title for stories4',
          slug: 'slug-for-storybook',
          heroImage:
            'https://images.ctfassets.net/qx3vqxu71ky0/4lcRrztErzC1SYe5qjtVQA/8c379645427af1a2fedd29cf169c4e8e/DSCF6215.JPG'
        }
      },
      {
        fields: {
          title: 'title for stories5',
          slug: 'slug-for-storybook',
          heroImage:
            'https://images.ctfassets.net/qx3vqxu71ky0/4lcRrztErzC1SYe5qjtVQA/8c379645427af1a2fedd29cf169c4e8e/DSCF6215.JPG'
        }
      }
    ];

    return <GalleryView gallery-posts={items} />;
  }
});
